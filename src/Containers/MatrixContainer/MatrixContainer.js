import React from 'react';
import style from './MatrixContainer.css';
import Grids from '../../Components/Grids/Grids';
import Tiles from '../../Components/Tiles/Tiles';
import MergedTiles from '../../Components/Tiles/MergedTiles';
import Backdrop from '../../Components/UI/Backdrop/Backdrop';
import GameMenu from '../../Components/GameMenu/GameMenu';
import GameInfo from '../../Components/GameInfo/GameInfo';
const matrixContainer = (props) => {

        const N =props.matrix.length;
        const gridSize = [80,72,60]; 
        const gridMargins = [13,12,10]; 
        const fontSizes = [45,40,35];
        const lineHeight = [85,75,65];                          
        const matrixSize = gridSize[N-4]*N + gridMargins[N-4]*(N + 1) ;
        const matrixPadding = gridMargins[N-4]+'px';
        const backdrop = props.gameOver ? <Backdrop  newGame = {props.newGame} 
                                                     score   = {props.score}
                                                     matrixSize =  {matrixSize}  /> 
                                        :  null;
        return (
                <div    className={style.GameContainer} 
                        style={{width:   500 + 'px', 
                                height: 500 + 'px', 
                                padding: matrixPadding}}>
                        <GameInfo score   = {props.score}/>
                        <GameMenu 
                                resizeMatrix = { props.resizeMatrix} 
                                menuHeight = {matrixSize-gridMargins[N-4]*2}
                                newGame = {props.newGame} />  

                        <div style={{marginTop: 500-matrixSize + 'px'  }}> 

                                {backdrop}

                                <Grids  gridSize    = {gridSize[N-4]+'px'} 
                                        gridMargin  = {gridMargins[N-4]+'px'} 
                                        gridNumbers = {N} />

                                <Tiles  matrix       = {props.matrix} 
                                        virtualTiles = {props.virtualTiles} 
                                        tileSize     = {gridSize[N-4]} 
                                        gridMargin   = {gridMargins[N-4]}
                                        fontSize     = {fontSizes[N-4]}                            
                                        lineHeight   = {lineHeight[N-4]}/>

                                <MergedTiles matrix       = {props.matrix} 
                                             tileSize     = {gridSize[N-4]} 
                                             gridMargin   = {gridMargins[N-4]}
                                             fontSize     = {fontSizes[N-4]}                           
                                             lineHeight   = {lineHeight[N-4]}/>
                        </div>             
                </div>
               );
}
export default matrixContainer;
