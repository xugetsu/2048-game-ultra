import React from 'react';
import style from './Tile.css';

const mergedTile = (props) => {
    
    const styles = [  style.Tile, 
                      style.TileMerged,
                      style['Tile_' + props.val]
                    ]; 
    const innerTile_styling = {
                    width: props.tileSize +'px',
                    height: props.tileSize +'px',
                    fontSize: props.fontSize +'px',
                    lineHeight: props.lineHeight +'px'
                  }; 
    const distance = props.tileSize + props.gridMargin;                
    const x = distance * props.col+'px';
    const y = distance * props.row+'px';
    const tile_styling = {
                    width: props.tileSize +'px',
                    height: props.tileSize +'px',
                    fontSize: props.fontSize +'px',
                    lineHeight:props.lineHeight +'px',
                    transform:'translate('+[x,y]+')'
                  }; 
    return (
       <div className={styles.join(' ')} style={tile_styling}>
           <div className={style.TileInner} style ={innerTile_styling} >{props.val}</div>
       </div>
   );
};
export default mergedTile;

