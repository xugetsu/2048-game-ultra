import {initMatrix} from '../../Lib/Functions/functions';
import * as localStorage from '../localStorage';

export const initState = (matrixSize = 4) => {
    const matrix = initMatrix(matrixSize);
    const idStore = Array.from({
        length: 15
    }, (x, i) => i + matrixSize * matrixSize);
    const state = {
        matrixSize: matrixSize,
        matrix: matrix,
        virtualTiles: [],
        score: 0,
        movesCount: 0,
        lastMove: ' start ',
        history: [{
            matrix: matrix,
            virtualTiles: [],
            score: 0,
            movesCount: 0,
            lastMove: ' start ',
            idStore: idStore
        }],
        idStore: idStore,
        gameOver: false,
        gamePaused: false,
        removeMode: false,
        removTilAttmpt: 3,
        restoreAttmpt: 3,
        disableRestore: true,
        disableRemovTil: true,
        remind: false,
        fetchBestScoreFail:false
    }
    return state;
}

export const generateState = (matrixSize) => {   
    const localStateData = localStorage.getState(matrixSize);
    if (localStateData === null) { // There is no data in the localStorage, let's make a new state :/
        return initState(matrixSize);
    } else { // Yay! data is available :)
        const didGameStart = Boolean(localStateData.lastMove !== ' start '); // true is the default
        return { ...localStateData,  gamePaused: didGameStart };
    }  
}
