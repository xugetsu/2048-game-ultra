import React from 'react';
import style from './GameMenu.css'
import Resize from './ListElements/Resize/Resize';
import Restore from './ListElements/Restore/Restore';
import NewGame from './ListElements/NewGame/NewGame';
import RemoveTile from './ListElements/RemoveTile/RemoveTile';
import Help from './ListElements/Help/Help.js';

const gameMenu = (props) => {
    return (
            <div className={style.GameMenu}>
                <ul>
                    <NewGame newGame = {props.newGame} />
                    <Resize 
                        matrixSize = {props.matrixSize} 
                        resizeMatrix = {(i) => props.resizeMatrix(i)} />
                    <Restore 
                        restore = {props.restore} 
                        remind = {props.remind}
                        restoreAttmpt = {props.restoreAttmpt}
                        disableRestore = {props.disableRestore}  />
                    <RemoveTile 
                        remind = {props.remind}
                        removeMode = {props.removeMode} 
                        removeModeState = {props.removeModeState}
                        removTilAttmpt = {props.removTilAttmpt} 
                        enableremovTil = {props.enableremovTil}/>
                    <Help />
                </ul>
            </div>
    );
}
export default gameMenu;