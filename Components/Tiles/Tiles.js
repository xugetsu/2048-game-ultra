import React from 'react';
import style from './Tiles.css';
import Tile from './Tile/Tile';

const tiles = (props) => {
    const virtualTiles = props.virtualTiles;
    const M = props.matrix;
    const arrayOfTiles = virtualTiles? [...M[0],...M[1],...M[2],...M[3],...virtualTiles]:[...M[0],...M[1],...M[2],...M[3]];
    const rearrangedTiles = Array(30).fill(0).map( (_,index) => arrayOfTiles.find( el => el.normal.id === index ) )
                            .filter( tile => tile !== undefined);
    const componentList = rearrangedTiles.map( tile => 
        tile && tile.normal.val ?  <Tile key={tile.normal.id.toString()} 
                                         val={tile.normal.val} 
                                         row={1+tile.normal.row} 
                                         col={1+tile.normal.col} 
                                         new={tile.normal.newTile} />
                                :null
    );


                     
    return ( 
    <div className={style.TilesContainer}>       
       {componentList}
     </div>
    );
};

export default tiles;
