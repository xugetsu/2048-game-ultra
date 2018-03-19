
import React from 'react';
import style from './Resize.css'

const resize = (props) => {
	return(
<li className = {style.Size}> 
        <div className = {style.SizeDetails}> 
                <p>Matrix size</p>
                <div onClick = {() => props.resizeMatrix(4)} > <p>4x4</p> </div>
                <div onClick = {() => props.resizeMatrix(5)} > <p>5x5</p> </div>
                <div onClick = {() => props.resizeMatrix(6)} > <p>6x6</p> </div>
                <div onClick = {() => props.resizeMatrix(7)} > <p>7x7</p> </div>
                <div onClick = {() => props.resizeMatrix(8)} > <p>8x8</p> </div>
                <div onClick = {() => props.resizeMatrix(9)} > <p>9x9</p> </div>
        </div>
        <svg viewBox="-150 -170 800 800">
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
