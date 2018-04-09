import React from 'react';
import styles from './GameTitle.css';

const gameTitle = (props) => {
  const pathData = "M436.76,247H274.541c-4.543,0-8.828,1.112-12.609,3.068c1.956-3.781,3.068-8.066,3.068-12.609V75.242"  
                    +"c0-15.187-12.354-27.541-27.541-27.541H75.242c-15.187,0-27.541,12.354-27.541,27.541v162.217c0,7.135,2.728,13.644,7.194,18.541   "
                    +"c-4.467,4.897-7.194,11.406-7.194,18.541v162.217c0,15.187,12.354,27.541,27.541,27.541h162.217c7.135,0,13.644-2.728,18.541-7.194  " 
                    +"c4.897,4.467,11.406,7.194,18.541,7.194H436.76c15.186,0,27.539-12.354,27.539-27.541V274.541   "
                    +"C464.299,259.354,451.945,247,436.76,247z M194.88,446.299h-36.339L247,357.842v36.289l-51.653,51.651   "
                    +"C195.181,445.948,195.03,446.123,194.88,446.299z M84.883,446.299L247,284.182v48.203L133.084,446.299H84.883z M75.242,265h34.953   "
                    +"l-44.494,44.494v-34.953C65.701,269.28,69.981,265,75.242,265z M65.701,334.203c0.904-0.43,1.756-1.008,2.505-1.757L135.652,265   "
                    +"h41.545L65.701,376.496V334.203z M65.701,436.758v-34.805L202.654,265h34.805c0.987,0,1.939,0.15,2.836,0.43L66.131,439.594   "
                    +"C65.852,438.697,65.701,437.744,65.701,436.758z M65.701,75.242c0-5.261,4.28-9.541,9.541-9.541h162.217"   
                    +"c5.261,0,9.541,4.28,9.541,9.541v162.217c0,5.261-4.28,9.541-9.541,9.541H75.242c-5.261,0-9.541-4.28-9.541-9.541V75.242z"
                    +"M237.459,446.299h-17.172L247,419.588v17.17C247,442.019,242.72,446.299,237.459,446.299z M446.299,436.758" 
                    +"c0,5.261-4.279,9.541-9.539,9.541H274.541c-5.261,0-9.541-4.28-9.541-9.541V274.541c0-5.261,4.28-9.541,9.541-9.541H436.76"   
                    +"c5.26,0,9.539,4.28,9.539,9.541V436.758z";

  return (
            <div className={styles.LogoTitle}>
              <svg  viewBox="0 0 1500 500"> 
                  <title>A 2048 Tile !</title>
                  <g>	<path d = {pathData}/> </g>
                  <text className = {styles.LogoText1} x="100" y="230">
                     2048
                  </text>
                  <text className = {styles.LogoText2} x="550" y="470">
                     Game
                  </text>
                  <text className = {styles.LogoText3} x="850" y="200">
                  UltrA!
                  </text>                 
              </svg>
            </div>
        );
    }
export default gameTitle;