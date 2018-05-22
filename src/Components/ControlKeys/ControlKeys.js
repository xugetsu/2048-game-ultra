import React from 'react';
import HotKey from 'react-shortcut';
import { connect } from 'react-redux';
import {_keyDown_} from '../../store/actions/index';

const controlkeys = (props) => {

    const UP= ['arrowup'], DOWN= ['arrowdown'], LEFT= ['arrowleft'], RIGHT= ['arrowright'];
    const disable = Boolean(props.gamePaused || props.gameOver)
    return (
        <React.Fragment>   
            <HotKey keys={UP}    
                    onKeysCoincide = {() => disable ? null : props.onKeyDown('up')}   />        
            <HotKey keys={RIGHT} 
                    onKeysCoincide = {() => disable ? null : props.onKeyDown('right')}/>  
            <HotKey keys={LEFT}  
                    onKeysCoincide = {() => disable ? null : props.onKeyDown('left')} />  
            <HotKey keys={DOWN}  
                    onKeysCoincide = {() => disable ? null : props.onKeyDown('down')} /> 
        </React.Fragment>

    );
}      

const mapStateToProps = (state) => {
    return {
      gameOver : state.gameOver,
      gamePaused : state.gamePaused,
  
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        onKeyDown : (key) => dispatch(_keyDown_(key)),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(controlkeys);

