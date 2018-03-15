import React, {Component} from 'react';
import style from './Grids.css';

class Grids extends Component {
    
    shouldComponentUpdate(nextProps,nextState){
        if ( nextProps.gridNumbers === this.props.gridNumbers ) {
            return false;
        }
        return true;
    }
    render(){
        const gridNumbers = this.props.gridNumbers;
        const gridSize = this.props.gridSize;
        const  gridCells = Array(this.props.gridNumbers).fill()
                    .map( (_,i) => <div key = {i}
                                        className={style.GridCell} 
                                        style = {{width: gridSize, height: gridSize, 
                                                  marginRight: (i===gridNumbers-1)? 0:this.props.gridMargin}} >
                                    </div>);
    return (
         <div className={style.GridContainer}>
            {Array(this.props.gridNumbers).fill()
                    .map( (_,i) => <div  key = {i}
                                         className={style.GridRow} 
                                         style = {{marginBottom: (i===gridNumbers-1)? 0:this.props.gridMargin }}>
                                    {gridCells}
                                   </div>)}
         </div>
           );
    }
   
}

export default Grids;