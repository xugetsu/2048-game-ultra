import React from 'react';
import style from './Grids.css';

const grids = (props) => {
    const size = {  width: props.gridSize, 
                    height: props.gridSize, 
                    marginRight: props.gridMargin
                 };
    const gridCell = <div className={style.GridCell} 
                          style = {size} >
                     </div>;
    const gridRow = (
            <div className={style.GridRow} 
                style = {{marginBottom: props.gridMargin }}>
            {Array(props.gridNumbers).fill().map( _ => gridCell)}
            </div>
    );
    return (
        <div className={style.GridContainer}>
            {Array(props.gridNumbers).fill().map( _ => gridRow)}
        </div>
    );
};

export default grids;