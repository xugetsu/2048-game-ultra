export const setLocalStorageData  = (state) => {
    const stateToStore = {...state, bestScore: null};
    localStorage.setItem("2048GameState" + state.matrixSize, JSON.stringify(stateToStore));
    localStorage.setItem("lastMatrixSize", JSON.stringify(state.matrixSize));
   }

export const getState = (size) => {   
    let matrixSize = size;
    if(size === undefined){ // if size is undefined, get last matrix size from localStorage
        matrixSize =  Number(localStorage.getItem("lastMatrixSize"));
        if (![4,5,6,7,8,9].includes(matrixSize)){ // if failed set it to default: 4   
            matrixSize = 4;
        }                  
    }
    return JSON.parse(localStorage.getItem("2048GameState" + matrixSize));    
}

export const removeLocalStorageData = (matrixSize) => {  
    localStorage.removeItem("2048GameState" + matrixSize);  
   }