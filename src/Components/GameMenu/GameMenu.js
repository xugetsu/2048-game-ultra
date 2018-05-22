import React from 'react';
import style from './GameMenu.css'
import Resize from './ListElements/Resize/Resize';
import Restore from './ListElements/Restore/Restore';
import NewGame from './ListElements/NewGame/NewGame';
import RemoveTile from './ListElements/RemoveTile/RemoveTile';
import Help from './ListElements/Help/Help.js';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/actions/index';

const gameMenu = (props) => {
    return (
            <div className={style.GameMenu}>
                <ul>
                    <NewGame newGame = {props.onRestart} />
                    <Resize 
                        matrixSize = {props.matrixSize} 
                        resizeMatrix = {props.onResizeMatrix} />
                    <Restore 
                        restore = {props.onRestore} 
                        remind = {props.remind}
                        gamePaused  = {props.gamePaused}
                        restoreAttmpt = {props.restoreAttmpt}
                        disableRestore = {props.disableRestore}  />
                    <RemoveTile 
                        remind = {props.remind}
                        matrixSize = {props.matrixSize} 
                        removeMode = {props.onEnableRemoveMode} 
                        gamePaused  = {props.gamePaused}
                        removeModeState = {props.removeModeState}
                        removTilAttmpt = {props.removTilAttmpt} 
                        disableRemovTil = {props.disableRemovTil}/>
                    <Help />
                </ul>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        remind          : state.remind,
        matrixSize      : state.matrixSize,
        removeModeState : state.removeMode,
        gamePaused      : state.gamePaused,
        restoreAttmpt   : state.restoreAttmpt,
        removTilAttmpt  : state.removTilAttmpt,
        disableRestore  : state.disableRestore,
        disableRemovTil : state.disableRemovTil
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onEnableRemoveMode : () => dispatch(actionCreator._enableRemoveMode_()),
        onRestart  : () => dispatch(actionCreator._restart_()),
        onResizeMatrix : (size) => dispatch(actionCreator._resizeMatrix_(size)),
        onRestore : () => dispatch(actionCreator._restore_()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(gameMenu);