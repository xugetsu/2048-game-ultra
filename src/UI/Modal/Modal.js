import React from 'react';
import styles from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import A from '../../hoc/A/A';

class Modal extends React.Component{
    shouldComponentUpdate(nextProps, nextState){
        return this.props.showModal !== nextProps.showModal || 
               this.props.children !== nextProps.children
    }
    render(){
        return (
            <A>
                <Backdrop show = {this.props.show} clicked = {this.props.exit}/>
                <div className = {styles.Modal}
                    style = {{
                        transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)' ,
                        opacity: this.props.show ?  '1':'0' 
                    }}> 
                    <div className = {styles.ExitBtn}  onClick = {this.props.exit}>
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

