import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const _restore_ = () => {
    return { type : actionTypes.RESTORE};
};

export const _enableRemoveMode_ = () => {
    return { type : actionTypes.ENABLE_RMOVE_MODE };
};

export const _setBestScore_ = (score) => {
    return { type : actionTypes.SET_BESTSCORE, score: score };
};

export const _fetchBestScoreFailed_ = (score) => {
    return { type : actionTypes.FETCH_BESTSCORE_FAILED };
};
export const _setMatrix_ = (size) => {
    return { type : actionTypes.RESIZEMATRIX, size: size };
};


export const _resizeMatrix_ = (size) => {
    return (dispatch, getState) => {
        axios.get('https://my-2048-game-with-react.firebaseio.com/bestScore/m'+size+'x'+size+'.json')
             .then( response => dispatch(_setBestScore_(response.data)))
             .catch( err => dispatch(_fetchBestScoreFailed_()) ); 
        dispatch(_setMatrix_(size)) ;
        }
};