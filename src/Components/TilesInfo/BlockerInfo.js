import React from 'react';
import style from './BlockerInfo.css';

const blockerInfo = (props) => {
        const timer = props.timer*5;
    return (
            <div className={style.BlockerInfo} >
                {/* Next<p>Blocker</p> */}
                <span style={{color:'hsl('+timer+', 100%, 50%)'}}>{props.timer}</span>
            </div>
    );
};

export default blockerInfo;