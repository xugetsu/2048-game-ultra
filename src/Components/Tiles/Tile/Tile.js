import React from 'react';
import style from './Tile.css';

const tile = (props) => {
    let tile_innerTile_styling = {...props.tile_innerTile_styling};
    const x = [18,13,13,13,10,10];
    switch (props.val) {
        case 2048: case 1024: tile_innerTile_styling.fontSize -= x[props.matrixSize - 4]; break;
        case 512: case 256: case 128: tile_innerTile_styling.fontSize -= 8; break; // 4x4 5x5 6x6 7x7 8x8 9x9   
        default: break;}
    return (
        <div onClick = {props.removeTile} className={props.styles.join(' ')} style={{...props.tile_innerTile_styling,...props.transform_styling}} >
            <div className={style.TileInner}  style ={tile_innerTile_styling} >
                <span>{props.val>1? props.val : ''}</span>
            </div>
        </div>
    );
};

export default tile;