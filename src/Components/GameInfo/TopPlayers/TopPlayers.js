import React from 'react';
import styles from './TopPlayers.css';
import TopSVG from './TopSVG/TopSVG';

const topPlayers = (props) => {
    return (
            <div className = {styles.TopPlayers} >
                <div className={styles.TopSVG}><TopSVG /></div>
            </div>
    );
};

export default topPlayers;
