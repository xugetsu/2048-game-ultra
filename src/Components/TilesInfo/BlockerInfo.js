import React from 'react';
import style from './BlockerInfo.css';
import { connect } from 'react-redux';

const blockerInfo = (props) => {
        const timer = (30*(10 - props.matrixSize)) - props.movesCount % (30*(10- props.matrixSize) + 1);
    return (
            <div className={style.BlockerInfo} >
                {/* Next<p>Blocker</p> */}
                <span style={{color:'hsl('+(timer/(30*(10-props.matrixSize))*200)+', 100%, 50%)'}}>
                    {props.timer}
                </span>
            </div>
    );
};

const mapStateToProps = (state) => {
    return {
        matrixSize : state.remind,
        movesCount : state.movesCount
    }
}

export default connect(mapStateToProps)(blockerInfo);
