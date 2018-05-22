import * as actionTypes from './actionTypes';

export const _continue_ = () => {
    return { type : actionTypes.CONTINUE };
};
export const _restart_ = () => {
    return { type : actionTypes.RESTART  };
};
export const _removeTile_ = (i,j) => {
    return { type : actionTypes.REMOVETILE, position:{i:i,j:j}};
};
