import React from 'react';
import style from './Tile.css';

const mergedTile = (props) => {
    
      
     
    const styles = [  style.Tile, 
                      style.TileMerged,
                      style['Tile_' + props.val]
                    ]; 
    const distance = props.tileSize + props.gridMargin;                
    const x = distance * props.col+'px';
    const y = distance * props.row+'px';
    const translationXY = { transform:'translate('+[x,y]+')' };
    return (
       <div className={styles.join(' ')} style={translationXY}>
           <div className={style.TileInner}>{props.val}</div>
       </div>
   );
};
export default mergedTile;

