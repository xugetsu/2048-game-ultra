import React from 'react';
import style from './Tiles.css';
import Tile from './Tile/Tile';
import MergedTile from './Tile/MergedTile';

const tiles = (props) => {
    const virtualTiles = props.virtualTiles;
    const M = props.matrix;
    let arrayOfTiles = M.reduce( (list,MRow) => list.concat(MRow) , []); 
    arrayOfTiles = virtualTiles? arrayOfTiles.concat(virtualTiles) : arrayOfTiles;
    const rearrangedTiles = Array(100).fill() // creating an array of tiles arranged by their ids in ascending order   
                                     .map( (_,index) => arrayOfTiles.find( el => el.normal.id === index ) )
                                     .filter( tile => tile !== undefined && tile.normal.val !== 0); // removing places with no matching id                      
    const componentList = rearrangedTiles.map( tile => 
         <Tile  key={tile.normal.id.toString()} 
                val={tile.normal.val} 
                row={tile.normal.row} 
                col={tile.normal.col} 
                new={tile.normal.newTile} 
                tileSize   = {props.tileSize}
                gridMargin = {props.gridMargin}
                fontSize = {props.fontSize}                           
                lineHeight   = {props.lineHeight}
                removeTile = {(i,j) => props.removeTile(i, j)}
                removeModeState = {props.removeModeState} />
    );
    const size = (props.tileSize + props.gridMargin)*(props.matrix.length);
// -----------------------------------------------------------------------------------------
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
// -----------------------------------------------------------------------------------------

    return ( 
    <div className={style.TilesContainer} style = {{height:size,width:size}}  >       
       {componentList}
       {arrayTiles}
     </div>
    );
};

export default tiles;
