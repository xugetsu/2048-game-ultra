import React, {Component} from 'react';
import style from './GameContainer.css';

import GameMenu from '../../Components/GameMenu/GameMenu';
import GameInfo from '../../Components/GameInfo/GameInfo';
import MatrixContainer from '../../Containers/MatrixContainer/MatrixContainer';

class GameContainer extends Component{

    render(){
        const N = this.props.matrix.length;
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
                    score = {this.props.score}
                    showTopPlayersModal = {this.props.showTopPlayersModal}/>
                <GameMenu 
                    resizeMatrix = {(i) => this.props.resizeMatrix(i)} 
                    menuHeight = {433}
                    newGame = {this.props.newGame} 
                    removeMode = {this.props.removeMode}
                    removeModeState = {this.props.removeModeState} 
                    removTilAttmpt = {this.props.removTilAttmpt} 
                    restore = {this.props.restore} 
                    restoreAttmpt = {this.props.restoreAttmpt}
                    disableRestore = {this.props.disableRestore} 
                    enableremovTil = {this.props.enableremovTil} /> 
                <MatrixContainer 
                    matrix = {this.props.matrix} 
                    virtualTiles = {this.props.virtualTiles} 
                    gameOver = {this.props.gameOver} 
                    score    = {this.props.score}
                    newGame =  {this.props.newGame} 
                    resizeMatrix = { this.props.resizeMatrix}
                    removeTile = {(i,j) => this.props.removeTile(i,j)}
                    removeModeState = {this.props.removeModeState}
                    sizes = {sizes}/>
            </div>
        );
    }
}
export default GameContainer;
