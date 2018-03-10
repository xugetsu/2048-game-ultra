import React from 'react';
import style from './Grids.css';

const grids = () => {
    const gridCell = <div className={style.GridCell}></div>;
    const gridRow = (
        <div className={style.GridRow}>
            {gridCell}{gridCell}{gridCell}{gridCell}
        </div>
        
    );
    return (
        <div className={style.GridContainer}>
            {gridRow}
            {gridRow}
            {gridRow}
            {gridRow}
        </div>
        
    );
};

export default grids;