import React from 'react';
import style from './NewGame.css';

const newGame = (props) => {
	return(
            <li className={style.NewGame} onClick = {props.newGame} >  
                <svg x="0px" y="0px" viewBox="-150 -170 800 800" 
                        style={{marginLeft: '5px',marginTop: '7px'}}>
                        <path d="M346.8,61.2C311.1,22.95,260.1,0,204,0C91.8,0,0,91.8,0,204s91.8,204,204,204c94.35,0,173.4-66.3,196.35-153H346.8
                        C326.4,313.65,270.3,357,204,357c-84.15,0-153-68.85-153-153c0-84.15,68.85-153,153-153c43.35,0,79.05,17.85,107.1,45.9
                        l-81.6,81.6H408V0L346.8,61.2z"/>
                </svg> 
                <span className={style.ToolTipText}>Restart</span>
            </li>
          );
}
export default newGame;

