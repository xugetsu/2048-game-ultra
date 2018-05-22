import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const _setBestScore_ = (score) => {
    return { type : actionTypes.SET_BESTSCORE, score: score };
};

export const _fetchBestScoreFailed_ = (score) => {
    return { type : actionTypes.FETCH_BESTSCORE_FAILED };
};

export const _fetchBestScore_ = () => {
    return (dispatch, getState) => {
        const size = getState().matrixSize;
        console.log('fetching best score');
        axios.get('https://my-2048-game-with-react.firebaseio.com/bestScore/m'+size+'x'+size+'.json')
             .then( response => dispatch(_setBestScore_(response.data)))
             .catch( err => dispatch(_fetchBestScoreFailed_()) ); 
        
    };
};

