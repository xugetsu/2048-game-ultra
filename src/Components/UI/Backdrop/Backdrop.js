import React from 'react';
import style from './Backdrop.css';


const backdrop = (props) => (
     <div className={style.Backdrop}>
        <h1> Game Over </h1>
        <h3> Your Score is : {props.score} </h3>
        <div className = {style.NewGame} 
             onClick = {props.newGame}> 
             <p>New Game</p>
        </div>
     </div> 
    );

export default backdrop;