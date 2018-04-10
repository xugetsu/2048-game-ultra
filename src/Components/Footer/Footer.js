
import React from 'react';
import Logo from './Svgs/MyLogo';
import style from './Footer.css';
import LinkedIn from './Svgs/LinkedIn';
import Github from './Svgs/Github';

const footer = (props) => {
    return (
        <footer>
            <div className = {style.LastWords}  >
               <p> This project is made by 
                    <span> Ali Othmani </span>
                    using the JavaScript Library React 
                </p>
                <a href="https://reactjs.org/" style = {{margin:'10px 0 0 70px ', float:'left'}}
                   target="_blank" 
                   rel="noopener noreferrer">
                  <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" 
                  alt="" height="35" />
                </a>
            </div>
            <div className = {style.FollowMe}>
                <p>Follow me</p>
                <div className = {style.Logos}>
                <a href="https://linkedin.com/in/ali-othmani-11873707/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn />
                </a>
                </div>
                <div className = {style.Logos}>
                <a href="https://github.com/xugetsu" target="_blank" rel="noopener noreferrer">
                        <Github />
                </a>
                </div>            
                <div className = {style.Logos}>
                <a href="/" target="_blank" rel="noopener noreferrer">
                        <Logo  logoHeight = {120}/>
                </a>
                </div>            
                
            </div>
        </footer>
            );
}
export default footer;