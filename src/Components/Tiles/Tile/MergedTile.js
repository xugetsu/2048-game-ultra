import React from 'react';
import style from './Tile.css';

const mergedTile = (props) => {
    
      
     
    const styles = [  style.Tile, 
                      style.TileMerged,
                      style['Tile_' + props.val],
                      style['TilePosition_' + props.col + '_' + props.row]]; 
     
    return (
       <div className={styles.join(' ') }>
           <div className={style.TileInner}>{props.val}</div>
       </div>
   );
};
export default mergedTile;

