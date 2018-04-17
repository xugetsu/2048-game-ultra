import React from 'react';
import style from './MatrixContainer.css';
import Grids from '../../Components/Grids/Grids';
import Tiles from '../../Components/Tiles/Tiles';
import Backdrop from '../../Components/UI/Backdrop/Backdrop';
import sizes_ from '../../Lib/Data/inlineStyles';

const matrixContainer = (props) => {
    const N = props.matrix.length;
    const sizes = sizes_(N);
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

        <Grids  gridSize    = {sizes.gridSize+'px'} 
                gridMargin  = {sizes.gridMargins+'px'} 
                gridNumbers = {N} />

        <Tiles  matrix       = {props.matrix} 
                virtualTiles = {props.virtualTiles} 
                tileSize     = {sizes.gridSize} 
                gridMargin   = {sizes.gridMargins}
                fontSize     = {sizes.fontSizes}                            
                lineHeight   = {sizes.lineHeight}
                removeTile   = {(i,j) => props.removeTile(i,j)}
                removeModeState = {props.removeModeState} />
        </div> 
    );
} 
export default matrixContainer;             