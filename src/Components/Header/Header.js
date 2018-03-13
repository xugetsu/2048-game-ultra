import React from 'react';
import style from './Header.css'

const header = (props) => {
    return (
        <header>
                <h1>2048 <span>Ultra!</span></h1>
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