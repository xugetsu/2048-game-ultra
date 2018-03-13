
import React from 'react';
import Logo from './MyLogo/MyLogo';
import style from './Footer.css';

const footer = (props) => {
    return (
        <footer>
            <div className = {style.LogoFooter}>
                <Logo logoHeight = {150}/>
            </div>
            This project is made by 
            <a href="https://www.linkedin.com/in/ali-othmani-11873707" 
            target="_blank" 
            rel="noopener noreferrer"
            > Ali Othmani</a>
        </footer>
            );
}
export default footer;