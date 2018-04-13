import React from 'react';
import style from './Backdrop.css';
import A from '../../../hoc/A/A';

const backdrop = (props) => {
    const styles =  [style.btn, !props.gamePaused ? style.Appear :'' ];
    const Continue = props.gamePaused ? <button className={style.Continue} 
                                                onClick = {props.continue}>Continue</button> : null;
    return(
     <div className={style.Backdrop}>

        <div className={styles.join(' ')}>
             {props.gamePaused ? null : <h1>{'Game Over'}</h1>}
             <h3> {props.gamePaused?'Do you want to continue where you left off ?':'Your Score '}</h3>
             {props.gamePaused ? null : <h3><span>{props.score}</span></h3>}
             {Continue}
             <button className={style.NewGame} onClick = {props.newGame}>New Game</button>
        </div>
     </div>

    );
}

export default backdrop;

