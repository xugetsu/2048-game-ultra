import React from 'react';
import style from './GameInfo.css'
const gameInfo = (props) => {
    return (
            <div className = {style.Info_wrapper}>
                <div className = {style.Info_Score}> 
                    {props.score}
                </div>
                <div className = {style.Info_Best}> 
                    {props.score}
                </div>  
                <div className = {style.Tips}> 
                   Tip: 
                </div> 
            </div>   
    );
}

export default gameInfo;