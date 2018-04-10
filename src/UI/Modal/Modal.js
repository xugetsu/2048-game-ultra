import React from 'react';
import styles from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import A from '../../hoc/A/A';

class Modal extends React.Component{
    state = {
        
    }

    render(){
        return (
            <A>
                <Backdrop/>
                <div className = {styles.Modal}>
                    <div className = {styles.ExitBtn} >
                        <div className = {styles.A}></div>
                        <div className = {styles.B}></div>
                    </div>
                    {this.props.children}
                </div>
            </A>
    
        );        
    }
}

export default Modal;

