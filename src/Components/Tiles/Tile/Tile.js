import React from 'react';
import style from './Tile.css';

const tile = (props) => {
    return (
        <div onClick = {props.removeTile} className={props.styles.join(' ')} style={{...props.tile_innerTile_styling,...props.transform_styling}} >
            <div className={style.TileInner}  style ={props.tile_innerTile_styling} >
                <span>{props.val? props.val : ''}</span>
            </div>
        </div>
    );
};

export default tile;