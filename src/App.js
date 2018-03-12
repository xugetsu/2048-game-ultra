import React, {Component} from 'react';
import style from './CSS/App.css';
import ControlKeys from './Components/ControlKeys/ControlKeys';
import GameInfo from './Components/GameInfo/GameInfo';
import MatrixContainer from './Containers/MatrixContainer/MatrixContainer';
import * as $ from './Lib/Functions/functions';
import Logo from './Components/LOGO SVG/logo';

class App extends Component{
    newGame = (clicked) => { 
        $.print('newGame',0);
        const matrix = $.initMatrix();
        if(!clicked){return matrix;} // if the callBack is invoked by the state 
        this.setState({ // if the callBack is invoked by clicking on the newGame button 
            matrix: matrix,
            virtualTiles: [],
            score: 0,
            history: [matrix],
            step: 0,
            lastMove: ' start ',
            idStore: Array.from({length: 15}, (x,i) => i + matrix.length*matrix.length),
            gameOver: false
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
        this.setState({
                        matrix:newMatrix,
                        virtualTiles:virtualTiles,
                        score : newScore,
                        history: this.state.history.concat([newMatrix]),
                        step:this.state.history.length+1,
                        idStore: idStore,
                        lastMove:direction,
                        });            
     }
    clickHandler = (direction) => {
        $.print('clickHandler',0);
        if ($.checkForUpdate(this.state.matrix,direction)) { 
            this.move(this.state.matrix,direction);
        }
     }
    forward = () => {
       $.print('forward',0); 
       return this.setState({matrix:this.state.history[this.state.step+1],step:this.state.step+1});
     }
    backward = () => {
       $.print('backward',0); 
       return this.setState({matrix:this.state.history[this.state.step-1],step:this.state.step-1});
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
        matrix:  (this.newGame(false)),
        virtualTiles: [],
        score: 0,
        history:[],
        step:0,
        lastMove:'Start',
        idStore: Array.from({length: 15}, (x,i) => i + 4*4),
        gameOver:false
     }
    render() {
        $.print('render',0); 
        $.print("*** *** *** ***",0);
        const matrix = this.state.matrix, virtualTiles = this.state.virtualTiles;
        return (
            <div className = {style.BigWrapper}>
                <header>
                  <GameInfo 
                      score = {this.state.score} 
                      newGame = {() => this.newGame(true)} />
                </header>

                <MatrixContainer 
                      matrix = {matrix} 
                      virtualTiles = {virtualTiles} 
                      gameOver = {this.state.gameOver} 
                      score    = {this.state.score}
                      newGame =  {() => this.newGame(true)} />
                <ControlKeys 
                      left  = {() => this.clickHandler('left')} 
                      right = {() => this.clickHandler('right')}
                      up    = {() => this.clickHandler('up')}   
                      down  = {() => this.clickHandler('down')} />
                <div className = {style.InstructionWrapper}>
                    <div className = {style.Instruction}>
                        <p>
                            <b>HOW TO PLAY:</b> Use your <b>arrow keys</b> to move the tiles. 
                            When two tiles with the same number touch, they <b>merge into one!</b>
                        </p>
                   </div>
                </div>
                <footer>
                    <div className = {style.LogoFooter}>
                        <Logo logoHeight = {500}/>
                    </div>
                    This project is made by 
                    <a href="https://www.linkedin.com/in/ali-othmani-11873707" 
                       target="_blank" 
                       rel="noopener noreferrer"
                    > Ali Othmani</a>
                </footer>

            </div>);
     }
    }
export default App;