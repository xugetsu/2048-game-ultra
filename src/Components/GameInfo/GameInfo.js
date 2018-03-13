import React from 'react';
import style from './GameInfo.css'
const gameInfo = (props) => {
    return (
        <div className={style.GameInfo}>
            <div className={style.AppHeader}>
                <div className={style.AppTitle}>
                    <h1>2048 <span>Ultra!</span></h1>
                    <p>
                        <b>Play 2048 Game Online</b>
                        <br />
                        Join the numbers and get to the 
                        <b> 2048 tile!</b>
                    </p>
                </div>
                <div className = {style.Info_wrapper}>
                    <div className = {style.Info_Score}> 
                        {props.score}
                    </div>
                    <div className = {style.Info_Best}> 
                        {props.score}
                    </div>
                        
                </div>
            </div>
         </div> 
    );
}

export default gameInfo;