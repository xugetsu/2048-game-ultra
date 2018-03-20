import React from 'react';
import style from './GameInfo.css'
const gameInfo = (props) => {
    return (
            <div className = {style.Info_wrapper}>
                <div className = {style.Tips}> 
                   <p><span>Info:</span> Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!</p>
                </div> 
                <div className = {style.Info_Score}> 
                    {props.score}
                </div>
                <div className = {style.Info_Best}> 
                    {props.score}
                </div>  

            </div>   
    );
}

export default gameInfo;