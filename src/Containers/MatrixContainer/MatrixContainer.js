import React from 'react';
import style from './MatrixContainer.css';
import Grids from '../../Components/Grids/Grids';
import Tiles from '../../Components/Tiles/Tiles';
import Backdrop from '../../Components/UI/Backdrop/Backdrop';

const matrixContainer = (props) => {
    const N = props.matrix.length;
    const backdrop = props.gameOver || props.gamePaused ? 
                          <Backdrop newGame    = {props.newGame} 
                                    continue   = {props.continue}
                                    score      = {props.score}
                                    gameOver   = {props.gameOver}
                                    gamePaused = {props.gamePaused}  /> 
                          :  null;
    return (
        <div className = {style.MatrixContainer} > 

        {backdrop}

        <Grids  gridSize    = {props.sizes.gridSize+'px'} 
                gridMargin  = {props.sizes.gridMargins+'px'} 
                gridNumbers = {N} />

        <Tiles  matrix       = {props.matrix} 
                virtualTiles = {props.virtualTiles} 
                tileSize     = {props.sizes.gridSize} 
                gridMargin   = {props.sizes.gridMargins}
                fontSize     = {props.sizes.fontSizes}                            
                lineHeight   = {props.sizes.lineHeight}
                removeTile   = {(i,j) => props.removeTile(i,j)}
                removeModeState = {props.removeModeState} />
        </div> 
    );
} 
export default matrixContainer;             