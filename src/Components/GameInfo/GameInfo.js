import React from 'react';
import style from './GameInfo.css'
import TopButton from './TopButton/TopButton';

const gameInfo = (props) => {
    const tips = (   <div className = {style.Tips}> 
                        <p><span>Info:</span> Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!</p>
                    </div> );
    return (
            <div className = {style.Info_wrapper}>

                <div className = {style.Info_Score}> 
                    {props.score}
                </div>
                <div className = {style.Info_Best}> 
                    {props.score}
                </div>  
                <TopButton />

            </div>   
    );
}
export default gameInfo;