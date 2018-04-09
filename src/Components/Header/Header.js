import React from 'react';
import style from './Header.css'
import GameTitle from './GameTitle/GameTitle';

const header = (props) => {
    return (
        <header>
                <GameTitle />
                <div className={style.GameIntro}>
                        Join the numbers and get to the 
                        <span> 2048 tile!</span>
                </div>
         </header>
    );
}

export default header;