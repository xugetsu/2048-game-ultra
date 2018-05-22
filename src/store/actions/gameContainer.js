import * as actionTypes from './actionTypes';

export const _checkForUpdate_ = () => {
    return { type : actionTypes.CHECKFORUPDATE};  
};
export const _setLocalStorageData_ = () => {
    return { type : actionTypes.STOREDATA};  
};
