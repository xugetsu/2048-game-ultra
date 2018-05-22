import * as actionTypes from './actionTypes';
import {checkForUpdate} from '../../Lib/Functions/functions';

export const _keyDown_ = (key) => {
    return (dispatch, getState) => {
        const matrix = getState().matrix;
        if (checkForUpdate(matrix, key)) { 
           dispatch(_move_(key));
        }
    }
};
export const _move_ = (key) => {
    return { type : actionTypes.MOVE, key:key };
};