import React, {Component} from 'react';
import style from './CSS/App.css';
import ControlKeys from './Components/ControlKeys/ControlKeys';
import GameContainer from './Containers/GameContainer/GameContainer';
import * as $ from './Lib/Functions/functions';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class App extends Component{
    newGame = (i, clicked, resizeMatrix) => { 
        $.print('newGame',0);
        let matrix;
        let matrixSize;
        if(!clicked){
            matrix = $.initMatrix(6);
            return matrix;
        }else if(clicked && resizeMatrix) {
            matrixSize = i;
            matrix = $.initMatrix(matrixSize);
        }else{
            matrixSize = this.state.matrixSize;
            matrix = $.initMatrix(matrixSize);
        }
        this.setState({
            matrix: matrix,
            matrixSize: matrixSize,
            virtualTiles: [],
            score: 0,
            history: [matrix],
            lastMove: ' start ',
            idStore: Array.from({length: 15}, (x,i) => i + matrix.length*matrix.length),
            gameOver: false,
            removeMode: false,
            removTilAttmpt: 3,
            restoreAttmpt: 3,
            disableRestore: true,
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
        const newHistory = this.state.history.concat([newMatrix]);
        newScore += mergingTiles.addToScore;
        idStore = [...mergingTiles.newIdStore]; // some ids have been used from idstore when merging tiles
        $.addingNewTile(newMatrix, idStore); 
        this.setState({
                        matrix:newMatrix,
                        virtualTiles:virtualTiles,
                        score : newScore,
                        history: newHistory,
                        idStore: idStore,
                        lastMove:direction,
                        disableRestore: !this.state.restoreAttmpt || (newHistory.length < 4)? true : false
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
        const newHistory =  this.state.history.slice(0,this.state.history.length - 1);
        this.setState({
            matrix: this.state.history[this.state.history.length - 2],
            history: newHistory,
            restoreAttmpt: this.state.restoreAttmpt - 1,
            disableRestore: (this.state.restoreAttmpt === 1) ? true : false,
        });
    }
    componentDidUpdate (prevProps, prevState) {
        $.print('componentDidUpdate',0);     
        if($.matrixIsFull(this.state.matrix) && !this.state.gameOver) {
            if ( !$.checkForUpdate(this.state.matrix, 'left') && 
                 !$.checkForUpdate(this.state.matrix, 'up')){
                   this.setState({gameOver:true});
            }
        }
     }

    state = {
        matrix:  (this.newGame(6,false,false)),
        matrixSize: 6,
        virtualTiles: [],
        score: 0,
        history:[],
        step:0,
        lastMove:'Start',
        idStore: Array.from({length: 15}, (x,i) => i + 4*4),
        gameOver:false,
        removeMode:false,
        removTilAttmpt: 3,
        restoreAttmpt: 3,
        disableRestore: true,
     }
    componentDidMount(){
        this.setState({history:[this.state.matrix]})
     }
    render() {
        console.log('disableRestore',this.state.disableRestore);
        $.print('render',0); 
        $.print("*** *** *** ***",0);
        const matrix = this.state.matrix, virtualTiles = this.state.virtualTiles;
        return (
            <div className = {style.BigWrapper}>
                <Header />
                
                <GameContainer 
                    matrix = {matrix} 
                    virtualTiles = {virtualTiles} 
                    gameOver = {this.state.gameOver} 
                    score    = {this.state.score}
                    newGame =  {() => this.newGame(4,true, false)} 
                    resizeMatrix = { (i) => this.newGame(i,true, true) } 
                    removeTile = {this.state.removeMode? (i,j) => this.removeTileHandler(i,j) : (i,j) => null}
                    removeMode = {this.removeModeHandler} 
                    removeModeState = {this.state.removeMode}
                    removTilAttmpt = {this.state.removTilAttmpt}
                    restore = {this.restoreHandler} 
                    restoreAttmpt = {this.state.restoreAttmpt}
                    disableRestore = {this.state.disableRestore} /> 
    
                <ControlKeys 
                      left  = {() => this.clickHandler('left')} 
                      right = {() => this.clickHandler('right')}
                      up    = {() => this.clickHandler('up')}   
                      down  = {() => this.clickHandler('down')} />

                <Footer />
                
            </div>
            );
     }
    }
export default App;

/* <div className = {style.InstructionWrapper}>
<div className = {style.Instruction}>
    <p>
        <b>HOW TO PLAY:</b> Use your <b>arrow keys</b> to move the tiles. 
        When two tiles with the same number touch, they <b>merge into one!</b>
    </p>
</div>
</div> */