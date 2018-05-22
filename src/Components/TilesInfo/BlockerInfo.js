import React from 'react';
import style from './BlockerInfo.css';
import { connect } from 'react-redux';

const blockerInfo = (props) => {
    const total = 30 * (10 - props.matrixSize );
    return (
            <div className={style.BlockerInfo} >
                <span style={{color:'hsl('+(props.blockerTimer/total*200)+', 100%, 50%)'}}>
                    {props.blockerTimer}
                </span>
            </div>
    );
};

const mapStateToProps = (state) => {
    return {
        matrixSize : state.matrixSize,
        movesCount : state.movesCount,
        blockerTimer : state.blockerTimer
    }
}

export default connect(mapStateToProps)(blockerInfo);
