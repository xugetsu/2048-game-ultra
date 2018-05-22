import * as $ from '../../Lib/Functions/functions';
import * as actionTypes from '../actions/actionTypes';
import {generateState, initState} from './stateGenerator';
import * as localStorage from '../localStorage';


export const reducer = (state = generateState(), action) => {
    let data = null, idStore = null, clearedMatrix = null, newHistory = null;
    switch (action.type) {
        case actionTypes.CONTINUE: return {...state, gamePaused: false}
        case actionTypes.STOREDATA: 
            localStorage.setLocalStorageData(state);
            return state;
        case actionTypes.SET_BESTSCORE: return {...state, bestScore: action.score}
        case actionTypes.FETCH_BESTSCORE_FAILED: return {...state, fetchBestScoreFail: true}
        case actionTypes.CHECKFORUPDATE: 
            if(!state.gameOver && $.matrixIsFull(state.matrix) && !$.checkIfCanMerge(state.matrix, 'left') && !$.checkIfCanMerge(state.matrix, 'up')){
                if (!state.restoreAttmpt && !state.removTilAttmpt){ return {...state, gameOver:true};}
                else if (!state.remind){ return {...state, remind: true}; } // this case has been added to remind the player of the available tools that can be used in the game menu
            }
            return state;
        case actionTypes.MOVE:  // move and merge tiles 
            // addBlocker logic :
            const movesCount = state.movesCount + 1;
            const total = 30 * (10 - state.matrixSize ); 
            const blockerTimer = total - movesCount % (total + 1);
            const addBlocker = ( blockerTimer === 0) ? true : false;
            // move and merge tiles 
            const oldMatrix = state.matrix;
            const direction = action.key;
            let newScore = state.score;
            let removTilAttmpts = state.removTilAttmpt;
            data   = $.fetchingData(oldMatrix,state.idStore); // fetching needed data from the oldMatrix
            idStore  = [...data.updatedIdStore];  // oldIdStore + available Ids from oldMatrix's old virtual Tiles    
            const blockerList = {...data.blockerList}; // prepare blockers list for moveTiles function
            clearedMatrix = data.matrix; // oldMatrix cleared from old virtual Tiles & old merged tiles vals has been fixed
            const matrixAfterMovingTiles  = $.moveTiles(clearedMatrix,direction,blockerList);
            const mergingTiles = $.mergeAndShift(matrixAfterMovingTiles,direction,idStore,blockerList,removTilAttmpts); 
            const newMatrix = mergingTiles.matrix;
            removTilAttmpts = mergingTiles.removTilAttmptCnt;
            const virtualTiles = $.pickVirtualTiles(newMatrix);
            newScore += mergingTiles.addToScore;
            idStore = [...mergingTiles.newIdStore]; // some ids have been used from idstore when merging tiles
        
            $.addingNewTile(newMatrix, idStore, addBlocker); // -1- blocker tile is added
        
            newHistory = $.addToHistory(state.history , newMatrix, virtualTiles, newScore, 
                                              state.movesCount, direction, idStore);
            return {...state,
                    matrix: newMatrix,
                    virtualTiles: virtualTiles,
                    score : newScore,
                    blockerTimer:blockerTimer,
                    movesCount: movesCount,
                    history: newHistory,
                    idStore: idStore,
                    lastMove: direction,
                    removTilAttmpt: removTilAttmpts,
                    disableRestore:  !state.restoreAttmpt  || (state.movesCount < 4) ? true : false,
                    disableRemovTil: !~~removTilAttmpts || (state.movesCount < 4) ? true : false,
                    };  
        case actionTypes.RESTART : 
            localStorage.removeLocalStorageData(state.matrixSize);
            return {...initState(state.matrixSize), bestScore:state.bestScore}
        case actionTypes.RESTORE : 
            const oldHistory = [...state.history];
            newHistory = state.history.slice(0, oldHistory.length - 1);
            const newData = newHistory[newHistory.length - 1];
            return{     
                ...state,
                remind: false,
                history: newHistory,
                matrix: newData.matrix,
                virtualTiles: newData.virtualTiles, 
                score: newData.score, 
                movesCount: newData.movesCount, 
                lastMove: newData.lastMove, 
                idStore: newData.idStore,
                restoreAttmpt: state.restoreAttmpt - 1,
                disableRestore: (state.restoreAttmpt === 1) ? true : false,
            };
        case actionTypes.RESIZEMATRIX : 
            localStorage.setLocalStorageData(state); // Save previous Data before switching to a new matrix size 
            return generateState(action.size); //this.bestScore(matrixSize);  }return {...initState(state.matrixSize)}
        case actionTypes.ENABLE_RMOVE_MODE : 
            data   = $.fetchingData(state.matrix, state.idStore); // fetching needed data from the oldMatrix
            idStore  = [...data.updatedIdStore];  // oldIdStore + available Ids from oldMatrix's old virtual Tiles       
            clearedMatrix = data.matrix; // oldMatrix cleared from old virtual Tiles & old merged tiles vals has been fixed
            return {
                ...state,
                removeMode: true,
                idStore: idStore,
                matrix: clearedMatrix,
                virtualTiles: []
            };
        case actionTypes.REMOVETILE : 
            const i = action.position.i;
            const j = action.position.j;
            const matrix = $.cloneMatrix(state.matrix);
            let val = matrix[i][j].normal.val;
            matrix[i][j].normal.val = 0;
            let discount = 2;
            while (val >= 4) { discount += val; val /= 2; }
            return {
                ...state,
                remind: false,
                removeMode: false,
                matrix: matrix,
                score: state.score - discount,
                removTilAttmpt: state.removTilAttmpt - 1,
                disableRemovTil: (state.removTilAttmpt === 1) ? true : false,
            };
        default: return state;
    }
}





// const bestScore = (size) => {
//     axios.get('https://my-2048-game-with-react.firebaseio.com/bestScore/m' + size + 'x' + size + '.json')
//         .then(response => this.setState({
//             bestScore: resLib
//         }))
//         .catch(err => err);
// };
