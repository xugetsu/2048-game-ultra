import React from 'react';
import style from './Tiles.css'
import MergedTile from './Tile/MergedTile';

const mergedTiles = (props) => {
    const tiles = props.matrix.map( (matrixRow,row) => matrixRow.map(
        (tile, col) => tile.merged? <MergedTile key = {Math.random().toString()}
                                                val = {tile.normal.val*2}
                                                row = {tile.normal.row + 1}
                                                col = {tile.normal.col + 1} />
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

