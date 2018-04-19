import React from 'react';
import styles from './TopPlayers.css';
//import TopSVG from './TopSVG/TopSVG';
import UnderConstruction from '../../../Assets/PNGs/under-construction.png';
//<div className={styles.TopSVG}><TopSVG /></div>
const topPlayers = (props) => {
    return (
            <div className = {styles.TopPlayers} >
                <div className={styles.UnderConstruction}><img src={UnderConstruction} alt='under constructio' width='200px'/></div>
                <h3>This section is currently under construction</h3>
            </div>
    );
};

export default topPlayers;
