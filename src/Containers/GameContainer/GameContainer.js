import React, {Component} from 'react';
import style from './GameContainer.css';
import * as $ from '../../Lib/Functions/functions';
import GameMenu from '../../Components/GameMenu/GameMenu';
import GameInfo from '../../Components/GameInfo/GameInfo';
import MatrixContainer from '../../Containers/MatrixContainer/MatrixContainer';
import ControlKeys from '../../Components/ControlKeys/ControlKeys';
import axios from '../../axios';
class GameContainer extends Component{

  newGame = (i, clicked, resizeMatrix) => { 
    $.print('newGame',0);
    let matrix, matrixSize;
    if(!clicked){
      matrix = $.initMatrix(4);
      return matrix;
    }else if(clicked && resizeMatrix) {
      matrixSize = i;
      matrix = $.initMatrix(matrixSize);
      this.bestScore(matrixSize);
    }else{
      matrixSize = this.state.matrixSize;
      matrix = $.initMatrix(matrixSize);
    }
    const idStore = Array.from({length: 15}, (x,i) => i + matrix.length*matrix.length);
    this.setState({
      matrixSize: matrixSize,
      matrix: matrix,
      virtualTiles: [],
      score: 0,
      movesCount:0,
      lastMove: ' start ',
      history: [{matrix: matrix, virtualTiles: [], score: 0, movesCount: 0, lastMove: ' start ', idStore: idStore}],
      idStore: idStore,
      gameOver: false,
      removeMode: false,
      removTilAttmpt: 3,
      restoreAttmpt: 3,
      disableRestore: true,
      enableremovTil: false,
    });
  }
  move = (oldMatrix, direction) => { // move and merge tiles 
    $.print('move',0);
    let newScore = this.state.score;
    const data   = $.fetchingData(oldMatrix,this.state.idStore); // fetching needed data from the oldMatrix
    let idStore  = [...data.updatedIdStore];  // oldIdStore + available Ids from oldMatrix's old virtual Tiles       
    const clearedMatrix = data.matrix; // oldMatrix cleared from old virtual Tiles & old merged tiles vals has been fixed
    const matrixAfterMovingTiles  = $.moveTiles(clearedMatrix,direction);
    const mergingTiles = $.mergeAndShift(matrixAfterMovingTiles,direction,idStore); 
    const newMatrix = mergingTiles.matrix;
    const virtualTiles = $.pickVirtualTiles(newMatrix);
        
    newScore += mergingTiles.addToScore;
    idStore = [...mergingTiles.newIdStore]; // some ids have been used from idstore when merging tiles
    $.addingNewTile(newMatrix, idStore); 
    const newHistory = this.state.history.concat([{ matrix: newMatrix, 
                                                    virtualTiles: virtualTiles, 
                                                    score: newScore, 
                                                    movesCount: this.state.movesCount + 1, 
                                                    lastMove: direction, 
                                                    idStore: idStore}]);
    this.setState({
                    matrix:newMatrix,
                    virtualTiles:virtualTiles,
                    score : newScore,
                    movesCount: this.state.movesCount + 1,
                    history: newHistory,
                    idStore: idStore,
                    lastMove:direction,
                    disableRestore: !this.state.restoreAttmpt || (this.state.movesCount < 4)? true : false,
                    enableremovTil: this.state.movesCount > 0 ? true : false,
                });            
  }
  clickHandler = (direction) => {
    $.print('clickHandler',0);
    if ($.checkForUpdate(this.state.matrix,direction)) { 
      this.move(this.state.matrix,direction);
    }
  }
  removeModeHandler = () => {
    const data   = $.fetchingData(this.state.matrix,this.state.idStore); // fetching needed data from the oldMatrix
    let idStore  = [...data.updatedIdStore];  // oldIdStore + available Ids from oldMatrix's old virtual Tiles       
    const clearedMatrix = data.matrix; // oldMatrix cleared from old virtual Tiles & old merged tiles vals has been fixed
    this.setState({
                    removeMode: true,
                    idStore: idStore,
                    matrix: clearedMatrix,
                    virtualTiles: []
                 });
    }
  removeTileHandler = (i,j) => {
    const matrix = $.cloneMatrix(this.state.matrix);
    let val = matrix[i][j].normal.val;
    matrix[i][j].normal.val = 0;
    let discount = 2;
    while (val >= 4) { discount += val; val /= 2; }
    
    this.setState({
        removeMode: false,
        matrix: matrix,
        score: this.state.score - discount,
        removTilAttmpt: this.state.removTilAttmpt - 1
      });
  }
  restoreHandler = () => {
    const oldHistory = [...this.state.history];
    const newHistory =  this.state.history.slice(0, oldHistory.length - 1);
    const newData = newHistory[newHistory.length - 1];
    this.setState({
                    history: newHistory,
                    matrix: newData.matrix,
                    virtualTiles: newData.virtualTiles, 
                    score: newData.score, 
                    movesCount: newData.movesCount, 
                    lastMove: newData.lastMove, 
                    idStore: newData.idStore,
                    restoreAttmpt: this.state.restoreAttmpt - 1,
                    disableRestore: (this.state.restoreAttmpt === 1) ? true : false,
                  });
  }
  componentDidUpdate (prevProps, prevState) {
    $.print('componentDidUpdate',0);     
    if($.matrixIsFull(this.state.matrix) && !this.state.gameOver) {
        if (  !$.checkForUpdate(this.state.matrix, 'left') && 
              !$.checkForUpdate(this.state.matrix, 'up')   &&
              !this.state.restoreAttmpt &&
              !this.state.removTilAttmpt){
              this.setState({gameOver:true});
        }
    }
  }

  state = {
    matrix:  (this.newGame(4,false,false)),
    matrixSize: 4,
    virtualTiles: [],
    score: 0,
    movesCount: 0,
    history: null,
    step: 0,
    lastMove:'Start',
    idStore: Array.from({length: 15}, (x,i) => i + 4*4),
    gameOver:false,
    removeMode:false,
    removTilAttmpt: 3,
    restoreAttmpt: 3,
    disableRestore: true,
    enableremovTil: false,
    bestScore: 0,
  }
  bestScore = (size) => {
    axios.get('https://my-2048-game-with-react.firebaseio.com/bestScore/m'+size+'x'+size+'.json')
    .then( response =>
      this.setState({ bestScore: response.data})
    )
    .catch( err => err );
  }
  componentDidMount(){
      this.bestScore(4);
      this.setState({ history: [{ matrix: this.state.matrix, 
                                  virtualTiles: [],
                                  score: 0, 
                                  movesCount: 0, 
                                  lastMove: ' start ', 
                                  idStore: this.state.idStore }]
                    });
  }

  render(){
    $.print('render',0); 
    $.print("*** *** *** ***",0);
    const matrix = this.state.matrix, virtualTiles = this.state.virtualTiles;
    const N = matrix.length;
    const gridSize = [80,72,60,53,48,43]; 
    const gridMargins = [13,12,10,7.5,5.5,5]; 
    const sizes = { gridSize:    gridSize[N-4],
                    gridMargins: gridMargins[N-4],
                    fontSizes:   [45,40,35,33,28,25][N-4],
                    lineHeight:  [80,70,58,52,50,40][N-4],
                    matrixSize: gridSize[N-4]*N + gridMargins[N-4]*(N + 1) };
    return (
      <div className={style.GameContainer}>
        <GameInfo 
          score = {this.state.score}
          bestScore = {this.state.bestScore}
          showTopPlayersModal = {this.props.showTopPlayersModal}/>
        <GameMenu 
          resizeMatrix = {(i) => this.newGame(i,true, true) } 
          menuHeight = {433}
          newGame = {() => this.newGame(4,true, false)} 
          removeMode = {this.removeModeHandler}
          removeModeState = {this.state.removeMode}
          removTilAttmpt = {this.state.removTilAttmpt}
          restore = {this.restoreHandler} 
          restoreAttmpt = {this.state.restoreAttmpt}
          disableRestore =  {this.state.disableRestore}
          enableremovTil = {this.state.enableremovTil}/> 
        <MatrixContainer 
          matrix = {matrix} 
          virtualTiles = {virtualTiles} 
          gameOver = {this.state.gameOver} 
          score    = {this.state.score}
          newGame =  {() => this.newGame(4,true, false)} 
          resizeMatrix = {(i) => this.newGame(i,true, true) }
          removeTile =  {this.state.removeMode ? (i,j) => this.removeTileHandler(i,j)
                                               : (i,j) => null}
          removeModeState = {this.state.removeMode}
          sizes = {sizes}/>
        <ControlKeys 
            left  = {() => this.clickHandler('left')} 
            right = {() => this.clickHandler('right')}
            up    = {() => this.clickHandler('up')}   
            down  = {() => this.clickHandler('down')} />
      </div>
    );
  }
}
export default GameContainer;
