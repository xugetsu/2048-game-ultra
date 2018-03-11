import React from 'react';
import style from './Grids.css';

const grids = (props) => {
    const size = {  width: props.gridSize, 
                    height: props.gridSize, 
                    marginRight: props.gridMargin
                 };
    const  gridCells = Array(props.gridNumbers).fill()
                            .map( (_,i) => <div key = {i}
                                                className={style.GridCell} 
                                                style = {size} >;
                                            </div>)
 
    return (
        <div className={style.GridContainer}>
            {Array(props.gridNumbers).fill()
                    .map( (_,i) => <div  key = {i}
                                     className={style.GridRow} 
                                     style = {{marginBottom: props.gridMargin }}>
                                 {gridCells}
                               </div>)}
        </div>
    );
};

export default grids;