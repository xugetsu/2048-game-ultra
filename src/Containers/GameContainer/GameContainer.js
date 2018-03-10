import React from 'react';
import style from './GameContainer.css';
import Grids from '../../Components/Grids/Grids';
import Tiles from '../../Components/Tiles/Tiles';
import MergedTiles from '../../Components/Tiles/MergedTiles';
import Backdrop from '../../Components/UI/Backdrop/Backdrop';

const gameContainer = (props) => {
        const backdrop = props.gameOver ? <Backdrop  newGame = {props.newGame} 
                                                     score   = {props.score}  /> 
                                        :  null;
        return (
                <div className={style.GameContainer}>
                    {backdrop}
                    <Grids />
                    <Tiles matrix = {props.matrix} virtualTiles = {props.virtualTiles} />
                    <MergedTiles matrix = {props.matrix}/>
                </div>
               );
}
export default gameContainer;
