import React from 'react';
import styles from './TopButton.css';
import TopSVG from '../TopSVG/TopSVG';

const top = (props) => {
	return(
        <div className={styles.TopButton}>
            <TopSVG />
        </div> 
            );
}
export default top;