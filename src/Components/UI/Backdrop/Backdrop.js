import React from 'react';
import style from './Backdrop.css';


const backdrop = (props) => (
     <div className={style.Backdrop} 
            style={{width:props.matrixSize + 'px', 
                    height: props.matrixSize + 'px'}} >
        <h1> Game Over </h1>
        <h3> Your Score is : {props.score} </h3>
     </div> 
    );

export default backdrop;