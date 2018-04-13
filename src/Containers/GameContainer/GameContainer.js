import React, {Component} from 'react';
import style from './GameContainer.css';
import * as $ from '../../Lib/Functions/functions';
import GameMenu from '../../Components/GameMenu/GameMenu';
import GameInfo from '../../Components/GameInfo/GameInfo';
import MatrixContainer from '../../Containers/MatrixContainer/MatrixContainer';
import ControlKeys from '../../Components/ControlKeys/ControlKeys';
import axios from '../../axios';
class GameContainer extends Component{
////////////////////CUSTOME METHODES//////////////CUSTOME METHODES///////////////////CUSTOME METHODES///////////////////////////////////////////////
  newGame = (matrixSize, resizeMatrix, returnData) => { 
    if(returnData){  // new game is invoked from state / newGame from backdrop 
      return this.initState(matrixSize); 
    }
    if(resizeMatrix) { // new game is invoked from game Menu - Resize
      this.setState(this.initState(matrixSize));
      this.bestScore(matrixSize);
    }else{ // new game is invoked from game Menu - Restart
      this.removeLocalStorageData(matrixSize);
      this.setState(this.initState(this.state.matrixSize));
    }
   }
  initState = (matrixSize) => {
    const matrix = $.initMatrix(matrixSize);
    const idStore = Array.from({length: 15}, (x,i) => i + matrixSize*matrixSize);
    const state = {
                    matrixSize: matrixSize,
                    matrix: matrix,
                    virtualTiles: [],
                    score: 0,
                    movesCount: 0,
                    lastMove: ' start ',
                    history: [{matrix: matrix, virtualTiles: [], score: 0, movesCount: 0, lastMove: ' start ', idStore: idStore}],
                    idStore: idStore,
                    gameOver: false,
                    gamePaused : false,
                    removeMode: false,
                    removTilAttmpt: 3,
                    restoreAttmpt: 3,
                    disableRestore: true,
                    enableremovTil: false,}
      return state;
   }
  continue = () => {
    this.setState({gamePaused:false});
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

////////////////////STORAGE METHODES//////////////STORAGE METHODES///////////////////STORAGE METHODES///////////////////////////////////////////////
  setLocalStorageData  = () => {
    const matrixSize = this.state.matrixSize;
    localStorage.setItem("2048GameState" + matrixSize, JSON.stringify(this.state));
    localStorage.setItem("lastMatrixSize", JSON.stringify(matrixSize));
   }
  getLastMatrixSize = () =>{
    console.log('localStorage.getItem("lastMatrixSize") = ', localStorage.getItem("lastMatrixSize") );
    const  lastMatrixSize = !(localStorage.getItem("lastMatrixSize") in {4:4,5:5,6:6,7:7,8:8,9:9}) ? 4: 
                            Number(localStorage.getItem("lastMatrixSize"));
    console.log('lastMatrixSize', lastMatrixSize);
    return lastMatrixSize;
   }

  getMatrixData = (matrixSize) => {   
     const matrixData = localStorage.getItem("2048GameState" + matrixSize);    
      if(matrixData === null){
        return this.newGame(matrixSize, true, true);
      }else{
        const data = JSON.parse(localStorage.getItem("2048GameState" + matrixSize));
        if(data.lastMove === ' start ')
            return {...data, gamePaused: false}
        else{
            return {...data, gamePaused: true}
        }
      }  }

  switchMatrixDataWithReqSize(matrixSize) {
    this.setLocalStorageData(); // Save previous Data before switching to a new matrix size 
    this.setState({ ...this.getMatrixData(matrixSize)});
    this.bestScore(matrixSize);  }

  bestScore = (size) => {
    axios.get('https://my-2048-game-with-react.firebaseio.com/bestScore/m'+size+'x'+size+'.json')
    .then( response => this.setState({bestScore:response.data}))
    .catch( err => err ); }

  removeLocalStorageData(matrixSize){  
    localStorage.removeItem("2048GameState" + matrixSize);  
   }
////////////////////REACT LIFECYCLE METHODES//////////////REACT LIFECYCLE METHODES//////////////////////////////////////////////////////////////////
  componentDidMount(){
      window.addEventListener('beforeunload', this.setLocalStorageData);  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.setLocalStorageData);  }

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
////////////////////STATE//////////////STATE///////////////STATE/////////////STATE///////////////STATE//////////////////////
  constructor(props) {
    super(props);
    const LastMatrixSize = this.getLastMatrixSize();
    this.state = this.getMatrixData(LastMatrixSize);
    this.bestScore(LastMatrixSize);
  } 
////////////////////RENDER METHODE//////////////RENDER METHODE/////////////////RENDER METHODE/////////////////////////////////////////////////
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

    const controlKeys = this.state.gamePaused || this.state.gameOver ?      
                          null : (<ControlKeys                     
                                        up    = {() => this.clickHandler('up')} 
                                        left  = {() => this.clickHandler('left')} 
                                        down  = {() => this.clickHandler('down')} 
                                        right = {() => this.clickHandler('right')}/>);
    return (
      <div className={style.GameContainer}>
        <GameInfo 
          score = {this.state.score}
          bestScore = {this.state.bestScore}
          showTopPlayersModal = {this.props.showTopPlayersModal}/>
        <GameMenu 
          menuHeight      = {433}
          restore         = {this.restoreHandler} 
          matrixSize      = {this.state.matrixSize}    
          removeModeState = {this.state.removeMode}
          removeMode      = {this.removeModeHandler}
          restoreAttmpt   = {this.state.restoreAttmpt}
          removTilAttmpt  = {this.state.removTilAttmpt}
          disableRestore  = {this.state.disableRestore}
          enableremovTil  = {this.state.enableremovTil}
          resizeMatrix    = {(i) => this.switchMatrixDataWithReqSize(i)} 
          newGame         = {() => this.newGame(this.state.matrixSize, false, false)} /> 
        <MatrixContainer 
          sizes      = {sizes}
          matrix     = {matrix}
          score      = {this.state.score}
          gamePaused = {this.state.gamePaused}
          continue   = {this.continue}
          gameOver   = {this.state.gameOver}
          newGame    = {() => this.newGame(this.state.matrixSize,false, false)}
          removeTile = {this.state.removeMode ? (i,j) => this.removeTileHandler(i,j) : (i,j) => null}
          removeModeState = {this.state.removeMode}
          virtualTiles    = {virtualTiles}/>

        {controlKeys}

      </div>
    );
   }
}
export default GameContainer;
