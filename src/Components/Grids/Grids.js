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
        console.log('[inside Grids]');
        const size = {  width: this.props.gridSize, 
            height: this.props.gridSize, 
            marginRight: this.props.gridMargin
         };
        const  gridCells = Array(this.props.gridNumbers).fill()
                    .map( (_,i) => <div key = {i}
                                        className={style.GridCell} 
                                        style = {size} >;
                                    </div>);
    return (
         <div className={style.GridContainer}>
            {Array(this.props.gridNumbers).fill()
                    .map( (_,i) => <div  key = {i}
                                         className={style.GridRow} 
                                         style = {{marginBottom: this.props.gridMargin }}>
                                    {gridCells}
                                   </div>)}
         </div>
           );
    }
   
}

export default Grids;