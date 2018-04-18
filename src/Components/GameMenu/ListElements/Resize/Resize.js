
import React from 'react';
import style from './Resize.css'

const resize = (props) => {
        const matrixSize = props.matrixSize;
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
        <svg viewBox="-175 -185 800 800">
                <path d="M0   32v128h128V32H0zm120 
                                120H8V40h112v112zm40-120v128h128V32H160zm120 
                                120H168V40h112v112zm40-120v128h128V32H320zm120 
                                120H328V40h112v112zM0 192v128h128V192H0zm120 
                                120H8V200h112v112zm40-120v128h128V192H160zm120 
                                120H168V200h112v112zm40-120v128h128V192H320zm120 
                                120H328V200h112v112zM0 352v128h128V352H0zm120 
                                120H8V360h112v112zm40-120v128h128V352H160zm120 
                                120H168V360h112v112zm40-120v128h128V352H320z"
                /> 
        </svg>  
</li>
	);

}

export default resize;
