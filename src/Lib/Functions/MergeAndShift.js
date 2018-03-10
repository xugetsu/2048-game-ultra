import print from './Print';
import cloneMatrix from './CloneMatrix';
import moveTiles from './MoveTiles';

const mergeAndShift = (matrix, d, idstore) => { 
    print('mergeAndShift',3);
    const N = matrix.length;
    let idStore = [...idstore];
    let addToScore = 0;
    const M = cloneMatrix(matrix);
    const mergeTiles = (tile, nextTile) => {
        const virtualTile = nextTile, mergedTile = tile;
        mergedTile.merged= {id  : virtualTile.normal.id,
                            val : virtualTile.normal.val, 
                            col :  mergedTile.normal.col,
                            row :  mergedTile.normal.row};
        virtualTile.normal.val = 0; // vanished tile
        virtualTile.normal.id = idStore[0]; // the vanished tile picks a new id from the idStore
        idStore = idStore.slice(1); // update the idStore
        addToScore += mergedTile.normal.val *2;
     }
    switch (d) {
        case 'left':
            for (let r = 0; r < N; r++ ){ // left
                for (let c = 0; c < N-1; c++ ){
                    const tile = M[r][c], nextTile = M[r][c + 1];
                    if( tile.normal.val && nextTile.normal.val === tile.normal.val ){
                        mergeTiles(tile, nextTile);
                        c++;
                    }
                }
            }                    
            break;
        case 'right':
            for (let r = 0; r < N; r++ ){ // right
                for (let c = N-1; c > 0; c-- ){
                    const tile = M[r][c], nextTile = M[r][c - 1];
                    if( tile.normal.val && nextTile.normal.val === tile.normal.val ){
                        mergeTiles(tile, nextTile);
                        c--;
                    }
                }
            }                   
            break;   
        case 'down':
            for(let c = 0; c < N; c++ ){ 
                for(let r = N-1; r > 0; r-- ){
                    const  tile = M[r][c], nextTile = M[r - 1][c]
                    if( tile.normal.val && nextTile.normal.val === tile.normal.val ){
                        mergeTiles(tile, nextTile);
                        r--;
                    }
                }
            }  
            break;      
        case 'up':
            for(let c = 0; c < N; c++ ){ 
                for(let r = 0; r < N-1; r++ ){
                    const  tile = M[r][c], nextTile = M[r + 1][c];
                    if( tile.normal.val && nextTile.normal.val === tile.normal.val ){
                        mergeTiles(tile, nextTile);
                        r++;
                    }
                }
            }    
            break;
        default:
            break;
     }
    return { matrix : moveTiles(M,d) , newIdStore:idStore, addToScore: addToScore} ;
 };

 export default mergeAndShift;