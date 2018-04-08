import React from 'react';
import style from './GameContainer.css';

import GameMenu from '../../Components/GameMenu/GameMenu';
import GameInfo from '../../Components/GameInfo/GameInfo';
import MatrixContainer from '../../Containers/MatrixContainer/MatrixContainer';

const gameContainer = (props) => {
        const N = props.matrix.length;
        const gridSize = [80,72,60,53,48,43]; 
        const gridMargins = [13,12,10,7.5,5.5,5]; 
        const sizes = { gridSize:    gridSize[N-4],
                        gridMargins: gridMargins[N-4],
                        fontSizes:   [45,40,35,33,28,25][N-4],
                        lineHeight:  [80,70,58,52,50,40][N-4],
                        matrixSize: gridSize[N-4]*N + gridMargins[N-4]*(N + 1) };
        return (
                <div className = { style.GameWrapper } > 
                        <div    className={style.GameContainer}>

                                <GameInfo score   = {props.score}/>
                                <GameMenu 
                                        resizeMatrix = {(i) => props.resizeMatrix(i)} 
                                        menuHeight = {433}
                                        newGame = {props.newGame} 
                                        removeMode = {props.removeMode}
                                        removeModeState = {props.removeModeState} 
                                        removTilAttmpt = {props.removTilAttmpt} 
                                        restore = {props.restore} 
                                        restoreAttmpt = {props.restoreAttmpt}
                                        disableRestore = {props.disableRestore} 
                                        enableremovTil = {props.enableremovTil} /> 
                                <MatrixContainer matrix = {props.matrix} 
                                                 virtualTiles = {props.virtualTiles} 
                                                 gameOver = {props.gameOver} 
                                                 score    = {props.score}
                                                 newGame =  {props.newGame} 
                                                 resizeMatrix = { props.resizeMatrix}
                                                 removeTile = {(i,j) => props.removeTile(i,j)}
                                                 removeModeState = {props.removeModeState}
                                                 sizes = {sizes}/>

                
                        </div>
                </div>
               );
}
export default gameContainer;
