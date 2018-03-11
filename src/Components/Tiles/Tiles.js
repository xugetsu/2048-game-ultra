import React from 'react';
import style from './Tiles.css';
import Tile from './Tile/Tile';

const tiles = (props) => {
    const virtualTiles = props.virtualTiles;
    const M = props.matrix;
    let arrayOfTiles = M.reduce( (list,MRow) => list.concat(MRow) , []); 
    arrayOfTiles = virtualTiles? arrayOfTiles.concat(virtualTiles) : arrayOfTiles;
    const rearrangedTiles = Array(M.length*M.length*2).fill() // creating an array of tiles arranged by their ids in ascending order   
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
                fontSize = {props.fontSize}/>
    );


                     
    return ( 
    <div className={style.TilesContainer}>       
       {componentList}
     </div>
    );
};

export default tiles;
