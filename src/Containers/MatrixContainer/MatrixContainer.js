import React, {Component} from 'react';
import style from './MatrixContainer.css';
import Grids from '../../Components/Grids/Grids';
import Tiles from '../../Components/Tiles/Tiles';
import Backdrop from '../../Components/UI/Backdrop/Backdrop';
import sizes_ from '../../Lib/Data/inlineStyles';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/actions/index';


class MatrixContainer extends Component {
    state = {
        lastMove: ' start '
    }
    // componentDidUpdate(){
    //     if (this.props.lastMove !== this.state.lastMove){
    //         this.props.onCheckForUpdate();
    //     }
    // }
    render(){
        const N = this.props.matrix.length;
        const sizes = sizes_(N);
        const backdrop = this.props.gameOver || this.props.gamePaused ? 
                            <Backdrop newGame    = {this.props.onRestart} 
                                        continue   = {this.props.onContinue}
                                        score      = {this.props.score}
                                        gameOver   = {this.props.gameOver}
                                        gamePaused = {this.props.gamePaused}  /> 
                            :  null;
        return (
            <div className = {style.MatrixContainer} > 

            {backdrop}

            <Grids  gridSize    = {sizes.gridSize+'px'} 
                    gridMargin  = {sizes.gridMargins+'px'} 
                    gridNumbers = {N} />

            <Tiles  matrix       = {this.props.matrix} 
                    virtualTiles = {this.props.virtualTiles} 
                    tileSize     = {sizes.gridSize} 
                    gridMargin   = {sizes.gridMargins}
                    fontSize     = {sizes.fontSizes}                            
                    lineHeight   = {sizes.lineHeight}
                    removeTile   = {this.props.removeMode ? this.props.onRemoveTile : () => null}
                    removeMode = {this.props.removeMode} />
            </div> 
        );
    }
} 
          
const mapStateToprops = (state) => {
    return {
        matrix     : state.matrix,
        matrixSize : state.matrixSize,
        score      : state.score,
        gamePaused : state.gamePaused,
        gameOver   : state.gameOver,
        removeMode : state.removeMode,
        virtualTiles : state.virtualTiles,
        lastMove  : state.lastMove
    }
};
const mapDispatchToprops = dispatch => {
    return {
        onContinue : () => dispatch(actionCreator._continue_()),
        onRestart  : () => dispatch(actionCreator._restart_()),
        onRemoveTile : (i,j) => dispatch(actionCreator._removeTile_(i,j)),
        onCheckForUpdate  : () => dispatch(actionCreator._checkForUpdate_())
    };
};
export default connect(mapStateToprops, mapDispatchToprops)(MatrixContainer);