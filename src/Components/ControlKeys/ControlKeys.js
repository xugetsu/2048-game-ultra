import React from 'react';
import HotKey from 'react-shortcut';
//import style from './ControlKeys.css';

const controlkeys = (props) => {

    const UP= ['arrowup'], DOWN= ['arrowdown'], LEFT= ['arrowleft'], RIGHT= ['arrowright'];
  

    return (

        <div>   
            <HotKey  keys={UP}     onKeysCoincide={props.up} />        
            <HotKey  keys={RIGHT}  onKeysCoincide={props.right} />  
            <HotKey  keys={LEFT}   onKeysCoincide={props.left} />  
            <HotKey  keys={DOWN}   onKeysCoincide={props.down} /> 
        </div>

    );
}      
export default controlkeys;
/* <div className = {style.Button} onClick = {props.newGame}><p>New Game</p></div> 
<div className = {style.Button} onClick = {props.backward}><p>1</p></div>
<div className = {style.Button} onClick = {props.forward }><p>2</p></div>  */