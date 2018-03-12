import React from 'react';
import style from './Tiles.css'
import MergedTile from './Tile/MergedTile';

const mergedTiles = (props) => {
    const tiles = props.matrix.map( (matrixRow,row) => matrixRow.map(
        (tile, col) => tile.merged? <MergedTile key = {Math.random().toString()}
                                                val = {tile.normal.val*2}
                                                row = {tile.normal.row}
                                                col = {tile.normal.col}
                                                tileSize   = {props.tileSize}
                                                gridMargin = {props.gridMargin}
                                                fontSize = {props.fontSize}                           
                                                lineHeight   = {props.lineHeight}/>
                                  :null
                            ));
                                         
    const arrayTiles = tiles.reduce( (list,tilesRow) => list.concat(tilesRow) , []); 
     return ( 
    <div className={style.TilesContainer}>       
       {arrayTiles}
     </div>
    );
};

export default mergedTiles;

