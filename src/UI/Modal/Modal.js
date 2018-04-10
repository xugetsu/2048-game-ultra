import React from 'react';
import styles from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import A from '../../hoc/A/A';

const modal = (props) => {
    return (
        <A>
            <Backdrop />
            <div className = {styles.Modal} >
                <div className = {styles.ExitBtn} >
                    <div className = {styles.A}></div>
                    <div className = {styles.B}></div>
                </div>
                {props.children}
            </div>
        </A>

    );
};

export default modal;

