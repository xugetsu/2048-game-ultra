import React from 'react';
import style from './Tile.css';

const tile = (props) => {
    
      
     
    const styles = [  style.Tile,
                       style['Tile_' + props.val],
                       props.new ? style.TileNew : ''
                    ]; 
    const distance = props.tileSize + props.gridMargin;                
    const x = distance * props.col+'px';
    const y = distance * props.row+'px';
    const translationXY = { transform:'translate('+[x,y]+')' };
    return (
        <div className={styles.join(' ')} style={translationXY}>
            <div className={style.TileInner}>{props.val? props.val : ''}</div>
        </div>
    );
};

export default tile;