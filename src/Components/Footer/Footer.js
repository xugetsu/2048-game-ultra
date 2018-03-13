
import React from 'react';
import Logo from './Svgs/MyLogo';
import style from './Footer.css';
import LinkedIn from './Svgs/LinkedIn';
import Github from './Svgs/Github';

const footer = (props) => {
    return (
        <footer>
            <div>
                This project is made by 
                <a href="https://www.linkedin.com/in/ali-othmani-11873707" 
                target="_blank" 
                rel="noopener noreferrer"
                > Ali Othmani</a>
            </div>
            
            <div className = {style.Logos}> <LinkedIn /></div>
            <div className = {style.Logos}> <Github /></div>
            <div className = {style.Logos}> <Logo logoHeight = {120}/> </div>
            <div className = {style.FollowMe}><h1>Follow me</h1></div>
        </footer>
            );
}
export default footer;