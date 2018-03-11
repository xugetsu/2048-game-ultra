import React from 'react';
import style from './MatrixContainer.css';
import Grids from '../../Components/Grids/Grids';
import Tiles from '../../Components/Tiles/Tiles';
import MergedTiles from '../../Components/Tiles/MergedTiles';
import Backdrop from '../../Components/UI/Backdrop/Backdrop';

const matrixContainer = (props) => {
        const backdrop = props.gameOver ? <Backdrop  newGame = {props.newGame} 
                                                     score   = {props.score}  /> 
                                        :  null;
        const N = props.matrix.length;                              
        const size = props.gridSize*N + props.gridMargin*(N + 1) + 'px';
        const matrixSize = {width:size, height:size};
        return (
                <div className={style.MatrixContainer} style={matrixSize}>
                    {backdrop}
                    <Grids  gridSize    = {props.gridSize} 
                            gridMargin  = {props.gridMargin} 
                            gridNumbers = {N} />

                    <Tiles  matrix = {props.matrix} 
                            virtualTiles = {props.virtualTiles} />

                    <MergedTiles matrix = {props.matrix}/>
                </div>
               );
}
export default matrixContainer;
