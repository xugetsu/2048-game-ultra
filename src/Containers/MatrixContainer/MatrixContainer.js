import React from 'react';
import style from './MatrixContainer.css';
import Grids from '../../Components/Grids/Grids';
import Tiles from '../../Components/Tiles/Tiles';
import MergedTiles from '../../Components/Tiles/MergedTiles';
import Backdrop from '../../Components/UI/Backdrop/Backdrop';

const matrixContainer = (props) => {
    const N = props.matrix.length;
//     const gridSize = [80,72,60,55]; 
//     const gridMargins = [13,12,10,9]; 
//     const fontSizes = [45,40,35,33];
//     const lineHeight = [85,75,65,60];                          
//     const matrixSize = gridSize[N-4]*N + gridMargins[N-4]*(N + 1) ;
    const backdrop = props.gameOver ? <Backdrop  newGame = {props.newGame} 
                                                 score   = {props.score}
                                                 matrixSize =  {props.sizes.matrixSize}  /> 
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

/*
        <MergedTiles matrix       = {props.matrix} 
                    tileSize     = {gridSize[N-4]} 
                    gridMargin   = {gridMargins[N-4]}
                    fontSize     = {fontSizes[N-4]}                           
                    lineHeight   = {lineHeight[N-4]}/>
*/
                     