import React from 'react';
import style from './GameMenu.css'
import Option from './ListElements/Option';
import Resize from './ListElements/Resize/Resize';
import Block from './ListElements/Block';
import Restore from './ListElements/Restore/Restore';
import NewGame from './ListElements/NewGame/NewGame';
import RemoveTile from './ListElements/RemoveTile/RemoveTile';
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
                <Restore restore = {props.restore} 
                         restoreAttmpt = {props.restoreAttmpt} />
                <Resize resizeMatrix = {(i) => props.resizeMatrix(i)} />
                <RemoveTile removeMode = {props.removeMode} 
                            removeModeState = {props.removeModeState}
                            removTilAttmpt = {props.removTilAttmpt} />
                

        </ul>

</div>

    );
}
export default gameMenu;