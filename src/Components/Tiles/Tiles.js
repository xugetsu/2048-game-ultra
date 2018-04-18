import React from 'react';
//import createFragment from 'react-addons-create-fragment';
import style from './Tiles.css';
import tileStyle from './Tile/Tile.css';
import Tile from './Tile/Tile';

const tiles = (props) => {
    const virtualTiles = props.virtualTiles; // Array of virtual tiles
    const M = props.matrix;
    const matrixSize = M.length;
    // Prepare a list of normal tiles 
    let arrayOfTiles = M.reduce( (list,MRow) => list.concat(MRow) , []); 
    // Add virtual tiles from virtualTiles array
    arrayOfTiles = virtualTiles? arrayOfTiles.concat(virtualTiles) : arrayOfTiles;
    // Re-arrange the list by their ids in ascending order 
    const rearrangedTiles = Array(100).fill()   
                                      .map( (_,index) => arrayOfTiles.find( el => el.normal.id === index ) )
                                      .filter( tile => tile !== undefined && tile.normal.val !== 0); // removing places with no matching id                      
    
    const size = (props.tileSize + props.gridMargin)*(props.matrix.length);
    const tile_innerTile_styling = {
                                    width: props.tileSize /*+ 'px'*/, // it seems that px is optional so it can be removed and nothing will happen to the styles
                                    height: props.tileSize /*+ 'px'*/,
                                    fontSize: props.fontSize, // px has been removed so we can use  props.fontSize value inside tile to resize the font
                                    lineHeight: props.lineHeight + 'px' // px here is important though
                                    }; 
    const distance = props.tileSize + props.gridMargin; 

    // Create a List of Tile components
    const componentList = rearrangedTiles.map(
        tile => {  
                    const x = (distance * tile.normal.col) + 0.5 * props.gridMargin + 'px';
                    const y = (distance * tile.normal.row) + 0.5 * props.gridMargin + 'px';
                    const transform_styling = {transform: 'translate('+ [x, y] +')'}; 
                    let tileStyles = [tileStyle.Tile,
                                      tileStyle['Tile_' + (tile.merged ? tile.normal.val*2: tile.normal.val > 1? tile.normal.val: 1)],
                                      tile.merged ? tileStyle.TileMerged : '',
                                      !tile.merged && tile.normal.newTile ? tileStyle.TileNew : '',
                                      !tile.merged && props.removeModeState? tileStyle.RemoveTile : ''];
                                      
                    return (
                        <Tile   key={tile.normal.id.toString()}
                                matrixSize = {matrixSize}
                                val={tile.merged ? tile.normal.val*2 : tile.normal.val}
                                styles={tileStyles}
                                transform_styling={transform_styling}
                                tile_innerTile_styling = {tile_innerTile_styling}
                                removeTile = {() => props.removeTile(tile.normal.row, tile.normal.col)}/>
                    );
                }
    );

    return ( 
    <div className={style.TilesContainer} style = {{height:size,width:size}}  >       
       {componentList}
     </div>
    );
};

export default tiles;
