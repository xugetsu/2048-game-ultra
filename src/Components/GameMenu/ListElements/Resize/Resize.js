
import React from 'react';
import style from './Resize.css'

const resize = (props) => {
        const matrixSize = props.matrixSize;
        const d2 = " M0,102h102V0H0V102z M153,408h102V306H153V408z M0,408h102V306H0V408z M0,255h102V153H0V255z M153,255h102V153H153V255z M306,0v102h102V0H306z M153,102h102V0H153V102z M306,255h102V153H306V255z M306,408h102V306H306V408z";
	return(
    <li className = {style.Size}> 
      <div className = {style.SizeDetails}> 
        <p>Matrix size</p>
        <div className = {(matrixSize === 4 ? style.Current : '')}
              onClick = {() => props.resizeMatrix(4)} > <p>4<span>x</span>4</p> </div>
        <div className = {(matrixSize === 5 ? style.Current : '')}
              onClick = {() => props.resizeMatrix(5)} > <p>5<span>x</span>5</p> </div>
        <div className = {(matrixSize === 6 ? style.Current : '')}
              onClick = {() => props.resizeMatrix(6)} > <p>6<span>x</span>6</p> </div>
        <div className = {(matrixSize === 7 ? style.Current : '')}
              onClick = {() => props.resizeMatrix(7)} > <p>7<span>x</span>7</p> </div>
        <div className = {(matrixSize === 8 ? style.Current : '')}
              onClick = {() => props.resizeMatrix(8)} > <p>8<span>x</span>8</p> </div>
        <div className = {(matrixSize === 9 ? style.Current : '')}
              onClick = {() => props.resizeMatrix(9)} > <p>9<span>x</span>9</p> </div>   
      </div>
      <svg viewBox="-190 -230 800 800">
        <path d= {d2}  /> 
      </svg>  
    </li>
	);

}

export default resize;
