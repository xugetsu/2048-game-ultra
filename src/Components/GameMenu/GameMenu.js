import React from 'react';
import style from './GameMenu.css'
import Option from './ListElements/Option';
import Resize from './ListElements/Resize/Resize';
import Block from './ListElements/Block';
import Repeat from './ListElements/Repeat';
import NewGame from './ListElements/NewGame/NewGame';
import Help from './ListElements/Help';

/*
                
                <li onClick = {props.resizeMatrix}>  <Block /> </li>
                <li onClick = {props.resizeMatrix}>  <Help /> </li>
*/

const gameMenu = (props) => {
    return (
   
<div className={style.GameMenu}>

        <ul>

                <NewGame newGame = {props.newGame} />
                <li onClick = {props.resizeMatrix}>  <Repeat /> </li>
                <Resize resizeMatrix = {(i) => props.resizeMatrix(i)} />
                

        </ul>

</div>

    );
}
export default gameMenu;