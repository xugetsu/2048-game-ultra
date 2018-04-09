import React from 'react';
import style from './Header.css'
import GameTitle from './GameTitle/GameTitle';

const header = (props) => {
    return (
        <header>
                <GameTitle />
                <div className={style.GameIntro}>
                    <p>
                        <b>Play 2048 Game Online</b>
                        <br />
                        Join the numbers and get to the 
                        <b> 2048 tile!</b>
                    </p>
                </div>
         </header>
    );
}

export default header;