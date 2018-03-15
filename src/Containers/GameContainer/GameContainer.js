import React from 'react';
import style from './GameContainer.css';

import GameMenu from '../../Components/GameMenu/GameMenu';
import GameInfo from '../../Components/GameInfo/GameInfo';
import MatrixContainer from '../../Containers/MatrixContainer/MatrixContainer';

const gameContainer = (props) => {


        return (
                <div className = { style.GameWrapper } > 
                        <div    className={style.GameContainer}>

                                <GameInfo score   = {props.score}/>
                                <GameMenu 
                                        resizeMatrix = { props.resizeMatrix} 
                                        menuHeight = {433}
                                        newGame = {props.newGame} /> 
                                <MatrixContainer matrix = {props.matrix} 
                                                virtualTiles = {props.virtualTiles} 
                                                gameOver = {props.gameOver} 
                                                score    = {props.score}
                                                newGame =  {props.newGame} 
                                                resizeMatrix = { props.resizeMatrix}  />

                
                        </div>
                </div>
               );
}
export default gameContainer;
