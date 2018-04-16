import React from 'react';
import style from './Restore.css';

const  restore = (props) => {
    const pathData1 = "M25.99 6c-9.95 0-17.99 8.06-17.99 18h-6l7.79 7.79.14.29 8.07-8.08h-6c0-7.73 6.27-14 14-14s14 6.27 14 14-6.27 14-14 14c-3.87 0-7.36-1.58-9.89-4.11l-2.83 2.83c3.25 3.26 7.74 5.28 12.71 5.28 9.95 0 18.01-8.06 18.01-18s-8.06-18-18.01-18zm-1.99 10v10l8.56 5.08 1.44-2.43-7-4.15v-8.5h-3z";

    const styles = [ style.Restore,
                     props.remind&&props.restoreAttmpt ? style.Remind : '',
					 style.ToolTip,
					 style['Attempts_' + ( props.disableRestore&&props.restoreAttmpt ? 4 : props.restoreAttmpt)],
					];
		//<path d = {pathData2}/> 						
	return  (
        <li className={styles.join(' ')} onClick = { props.disableRestore?  () => null : () => props.restore()} >
            <svg viewBox=" -10 -10 70 70"> 
                    <g>	
                        <path d = {pathData1}/>
                    </g>
            </svg>
            <span className={style.ToolTipText}>Undo last move</span>
        </li>
            );

}

export default restore;

/*<svg version="1.1" x="0px" y="0px" 
    viewBox="0 0 100 125" enable-background="new 0 0 100 100">
    <g>
        <path d="M50.7,59.2c0.4,0,0.9-0.1,1.2-0.3l16.3-7.7c1.4-0.7,2-2.4,1.3-3.8l-0.7-1.5c-0.5-1-1.5-1.6-2.6-1.6c-0.4,0-0.9,0.1-1.3,0.3   l-12.2,5.7l-5.8-12.1c-0.5-1-1.5-1.6-2.6-1.6c-0.4,0-0.9,0.1-1.3,0.3l-1.5,0.7c-1.4,0.7-2,2.4-1.3,3.8L48,57.6   C48.5,58.5,49.6,59.2,50.7,59.2z"/>
        <path d="M88.7,42.1C86.1,30,73.5,17.5,61.3,14.8c-2.7-0.6-5.4-0.9-8.1-0.9c-0.3,0-0.7,0-1,0c-17.7,0.5-32.8,14.1-34.9,31.8   l-0.1,0.4h-4.5c-0.8,0-1.3,0.5-1.5,1c-0.3,0.6-0.5,1.6,0,2.6l8,9.4c0.9,1,2.1,1.6,3.3,1.6c1.2,0,2.4-0.6,3.3-1.6l7.7-9.2   c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.1-0.1,0.2-0.2c0,0,0.1-0.1,0.1-0.1c0.5-0.9,0.3-1.9,0-2.5c-0.4-0.7-1-1.1-1.6-1.1h-4.9l0.1-0.6   c2.2-12.2,12.3-21,24.7-21.4c0.3,0,0.6,0,1,0h0.4c14,0.2,25.6,11.8,25.8,25.8c0.1,7-2.6,13.7-7.5,18.7c-5,5-11.6,7.8-18.7,7.8h-2.3   c-1.4,0-2.6,1.2-2.6,2.6v5.1c0,1.4,1.2,2.6,2.6,2.6h2.5c11,0,21.3-4.9,28.2-13.4C88.5,64.4,91.1,53.2,88.7,42.1z"/>
    </g>
    <text x="0" y="115" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Luis Rodrigues</text>*/