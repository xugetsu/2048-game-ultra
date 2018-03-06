import React from 'react';
import style from './Tile.css';

const tile = (props) => {
    
      
     
     const styles = [  style.Tile,
                       style['Tile_' + props.val],
                       style['TilePosition_' + props.col + '_' + props.row],
                       props.new ? style.TileNew : ''
                    ]; 
      
    return (
        <div className={styles.join(' ') }>
            <div className={style.TileInner}>{props.val? props.val : ''}</div>
        </div>
    );
};

export default tile;