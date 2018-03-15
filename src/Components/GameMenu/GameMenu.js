import React from 'react';
import style from './GameMenu.css'
import Option from './Icons/Option';
import Resize from './Icons/Resize';
import Block from './Icons/Block';
import Repeat from './Icons/Repeat';
import NewGame from './Icons/NewGame';
import Help from './Icons/Help';

const gameMenu = (props) => {
    return (
   
<div className={style.GameMenu}>
        <ul>
                <li onClick = {props.newGame}> 
                    <NewGame /> </li>
                <li onClick = {props.resizeMatrix}>
                    <Resize />
                </li>
                <li>  <Repeat /> </li>
                <li>  <Block /> </li>
                <li>  <Help /> </li>
        </ul>
</div>

    );
}
export default gameMenu;