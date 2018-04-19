import React from 'react';
import style from './BlockerInfo.css';

const blockerInfo = (props) => {
        const timer = props.timer;
    return (
            <div className={style.BlockerInfo} >
                {/* Next<p>Blocker</p> */}
                <span style={{color:'hsl('+(timer/(30*(10-props.matrixSize))*200)+', 100%, 50%)'}}>{props.timer}</span>
            </div>
    );
};

export default blockerInfo;