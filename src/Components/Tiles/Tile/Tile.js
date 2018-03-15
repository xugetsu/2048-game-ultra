import React from 'react';
import style from './Tile.css';

const tile = (props) => {
    
 
    const innerTile_styling = {
                    width: props.tileSize +'px',
                    height: props.tileSize +'px',
                    fontSize: props.fontSize +'px',
                    lineHeight:props.lineHeight +'px'
                  }; 
    const distance = props.tileSize + props.gridMargin;                
    const x = (distance * props.col) + 0.5* props.gridMargin + 'px';
    const y = (distance * props.row) + 0.5* props.gridMargin + 'px';
    const tile_styling = {
                    width: props.tileSize +'px',
                    height: props.tileSize +'px',
                    fontSize: props.fontSize +'px',
                    lineHeight: props.lineHeight +'px',
                    transform: 'translate('+[x,y]+')'
                  };  
    const styles = [   style.Tile,
                       style['Tile_' + props.val],
                       props.new ? style.TileNew : ''
                    ]; 


    return (
        <div className={styles.join(' ')} style={tile_styling} >
            <div className={style.TileInner} style ={innerTile_styling} >{props.val? props.val : ''}</div>
        </div>
    );
};

export default tile;