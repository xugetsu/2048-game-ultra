import * as actionTypes from './actionTypes';
import {checkIfCanMerge} from '../../Lib/Functions/functions';

export const _keyDown_ = (key) => {
    return (dispatch, getState) => {
        const matrix = getState().matrix;
        if (checkIfCanMerge(matrix, key)) { 
           dispatch(_move_(key));
        }
    }
};

export const _checkForUpdate_ = () => {
    return { type : actionTypes.CHECKFORUPDATE};  
};

export const _moveTiles_ = (key) => {
    return { type : actionTypes.MOVE, key:key };
};

export const _move_ = (key) => {
        return dispatch => {
            dispatch(_moveTiles_(key));         
            dispatch(_checkForUpdate_());   
        }
    };