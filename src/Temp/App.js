    //  // normaltileObject = (id,val,col,row,nT) => {
        //     print('normaltileObject',6);
        //     return {
        //             normal: {id:id , val:val, col:col, row:row, newTile:nT},
        //             merged: null
        //            }
        //  }
        // mergedtileObject = (id,val,col,row,nT,  mTI,mTV,mTC,mTR) => {
        //     print('normaltileObject',6);
        //     return {
        //             normal: {id:id , val:val, col:col, row:row, newTile:nT},
        //             merged: {id:mTI, val:mTV, col:mTC, row:mTR}
        //            }
        //  }
        // displayTiles = (matrix) => Array(4).fill(0).map( (_,row) => Array(4).fill(0).map( (_,col) => matrix[row][col].normal.val))
    

        // mergeAndShift = (matrix, d, idstore) => { 
        //     print('mergeAndShift',3);
        //     let idStore = [...idstore];
        //     let addToScore = 0;
        //     const M = this.cloneMatrix(matrix);
        //     const mergeTiles = (tile, nextTile) => {
        //         const virtualTile = nextTile, mergedTile = tile;
        //         mergedTile.merged= {id  : virtualTile.normal.id,
        //                             val : virtualTile.normal.val, 
        //                             col :  mergedTile.normal.col,
        //                             row :  mergedTile.normal.row};
        //         virtualTile.normal.val = 0; // vanished tile
        //         virtualTile.normal.id = idStore[0]; // the vanished tile picks a new id from the idStore
        //         idStore = idStore.slice(1); // update the idStore
        //         addToScore += mergedTile.normal.val *2;
        //      }
        //     switch (d) {
        //         case 'left':
        //             for (let r = 0; r < 4; r++ ){ // left
        //                 for (let c = 0; c < 3; c++ ){
        //                     const tile = M[r][c], nextTile = M[r][c + 1];
        //                     if( tile.normal.val && nextTile.normal.val === tile.normal.val ){
        //                         mergeTiles(tile, nextTile);
        //                         c++;
        //                     }
        //                 }
        //             }                    
        //             break;
        //         case 'right':
        //             for (let r = 0; r < 4; r++ ){ // right
        //                 for (let c = 3; c > 0; c-- ){
        //                     const tile = M[r][c], nextTile = M[r][c - 1];
        //                     if( tile.normal.val && nextTile.normal.val === tile.normal.val ){
        //                         mergeTiles(tile, nextTile);
        //                         c--;
        //                     }
        //                 }
        //             }                   
        //             break;   
        //         case 'down':
        //             for(let c = 0; c < 4; c++ ){ 
        //                 for(let r = 3; r > 0; r-- ){
        //                     const  tile = M[r][c], nextTile = M[r - 1][c]
        //                     if( tile.normal.val && nextTile.normal.val === tile.normal.val ){
        //                         mergeTiles(tile, nextTile);
        //                         r--;
        //                     }
        //                 }
        //             }  
        //             break;      
        //         case 'up':
        //             for(let c = 0; c < 4; c++ ){ 
        //                 for(let r = 0; r < 3; r++ ){
        //                     const  tile = M[r][c], nextTile = M[r + 1][c];
        //                     if( tile.normal.val && nextTile.normal.val === tile.normal.val ){
        //                         mergeTiles(tile, nextTile);
        //                         r++;
        //                     }
        //                 }
        //             }    
        //             break;
        //         default:
        //             break;
        //      }
        //     return { matrix : this.moveTiles(M,d) , newIdStore:idStore, addToScore: addToScore} ;
        //  }
        // moveTiles = (matrix,direction) => {
        //     print('moveTiles',3);
        //      const newMatrix = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
        //     switch (direction) {
        //         case 'left':   
        //             for( let r = 0; r < 4; r++ ){
        //                 let j = 0, k = 3;
        //                 for( let c = 0; c < 4; c++ ){
        //                     const tn = matrix[r][c].normal;
        //                     if ( tn.val ){  const tm = matrix[r][c].merged;
        //                     newMatrix[r][j] = tm ? this.mergedtileObject(tn.id ,tn.val, j ,tn.row,tn.newTile, tm.id,tm.val, j ,tm.row)
        //                                          : this.normaltileObject(tn.id ,tn.val, j ,tn.row,tn.newTile);
        //                     j++;    
        //                     }else{ newMatrix[r][k] = this.normaltileObject(tn.id ,0, k ,tn.row,tn.newTile);
        //                     k--;}
        //             }}
                
        //         return newMatrix;
        //         case 'right':
        //             for( let r = 0; r < 4; r++ ){
        //                 let j = 0, k = 3;
        //                 for( let c = 3; c > -1 ; c-- ){
        //                     const tn = matrix[r][c].normal;
        //                     if ( tn.val ){  const tm = matrix[r][c].merged;
        //                     newMatrix[r][k] = tm ? this.mergedtileObject(tn.id ,tn.val, k , r ,tn.newTile, tm.id,tm.val, k , r )
        //                                          : this.normaltileObject(tn.id ,tn.val, k , r ,tn.newTile);
        //                     k--;    
        //                     }else{ newMatrix[r][j] = this.normaltileObject(tn.id , 0 , j ,tn.row,tn.newTile);
        //                     j++;}
        //             }}
        //         return newMatrix;
        //         case 'down': 
        //             for( let c = 0; c < 4; c++ ){
        //                 let j = 0, k =3;
        //                 for( let r = 3; r > -1; r-- ){
        //                     const tn = matrix[r][c].normal;
        //                     if ( tn.val ){  const tm = matrix[r][c].merged;
        //                     newMatrix[k][c] = tm ? this.mergedtileObject(tn.id ,tn.val, c , k ,tn.newTile, tm.id,tm.val, c , k )
        //                                          : this.normaltileObject(tn.id ,tn.val, c , k ,tn.newTile);
        //                     k--;  
        //                     }else{ newMatrix[j][c] = this.normaltileObject(tn.id ,0, c , j,tn.newTile);
        //                     j++;}
        //             }}
        //         return newMatrix;
        //         case 'up':  
        //             for( let c = 0; c < 4; c++ ){
        //                 let j = 0, k = 3;
        //                 for( let r = 0; r < 4; r++ ){
        //                     const tn = matrix[r][c].normal;
        //                     if ( tn.val ){  const tm = matrix[r][c].merged;
        //                     newMatrix[j][c] = tm ? this.mergedtileObject(tn.id ,tn.val, c , j ,tn.newTile, tm.id,tm.val, c , j )
        //                                          : this.normaltileObject(tn.id ,tn.val, c , j,tn.newTile);
        //                     j++;    
        //                     }else{ newMatrix[ k][c] = this.normaltileObject(tn.id ,0, c , k  ,tn.newTile);
        //                     k--;}
        //             }}
        //         return newMatrix;                   
        //         default: break;
        //      }
        //  }
        

                    
        // addingNewTile = (matrix, idStore) => {
        //     print('addingNewTile',3);
        //     let emptytiles =  matrix.map( // collect positions ofcountEmpty tiles in a matrix form
        //             (matrixRow,row) => matrixRow.reduce(  
        //             (list,tile,col) => !tile.normal.val? list.concat([ [row,col] ]):list, []));
        //     // transformcountEmptyTiles from a matrix form to an array
        //     emptytiles = [...emptytiles[0],...emptytiles[1],...emptytiles[2],...emptytiles[3]];
        //     // pick a randomcountEmptyTile position from emptiTiles
        //     const randomEmptyTile = emptytiles[Math.floor(emptytiles.length*Math.random())] ;
        //     const row0 = randomEmptyTile[0], col0 = randomEmptyTile[1];
        //     //const M =  Array(4).fill(0).map( (_,row) => Array(4).fill(0).map( (_,col) => Object.assign({}, matrix[row][col]))); 
        //     matrix[row0][col0].normal.val = 2;
        //     matrix[row0][col0].normal.newTile = 1;
        //      // add the tile id to idStore and take a new one
        //     matrix[row0][col0].normal.id = idStore.splice(idStore.length-1, 1, matrix[row0][col0].normal.id)[0];
        //     return matrix;
    

        //  }

        // pickVirtualTiles = (matrix) => { 
        //     print('pickVirtualTiles',3);
        //     return matrix.map( 
        //     (matrixRow,r) => matrixRow.reduce((list, tile) => tile.merged? list.concat({normal:tile.merged}) : list, []))
        //     .reduce( (list,listRow) => listRow[0]? list.concat(listRow) : list, [])}


        // fetchingData = (matrix) => { 
        //     print('fetchingData',3);
        //     let idStore = [...this.state.idStore];
        //     const clearedMatrix = matrix.map( (matrixRow,r) => matrixRow.map( (tile,c) => {   
        //                                         const tn = tile.normal, tm = tile.merged; 
        //                                         if (tm) { // pick available ids from old virtual tiles
        //                                             const id = tm.id;
        //                                             idStore.splice(0, 0, id); // add ids to idStore
        //                                         }
        //                                         return this.normaltileObject(tn.id,tm? tn.val*2:tn.val,tn.col,tn.row,OLD)} ));
        //  return {matrix:clearedMatrix, updatedIdStore:idStore}
        //  }
        // cloneMatrix = (matrix) => {
        //     print('cloneMatrix',6);
        //     return matrix.map( (matrixRow,r) => matrixRow.map( (tile,c) => 
        //         { const tn = tile.normal, tm = tile.merged;
        //             return tm ? this.mergedtileObject(tn.id ,tn.val,tn.col,tn.row,tn.newTile, tm.id,tm.val,tm.col,tm.row)
        //                     : this.normaltileObject(tn.id ,tn.val,tn.col ,tn.row,tn.newTile)}))}
        // matrixIsFull = (matrix) => {
        //     print('matrixIsFull',0); 
        //     return [...matrix[0],...matrix[1],...matrix[2],...matrix[3]].reduce( (sum,el) => el.normal.val? sum += 1: sum, 0) === 16                 
        //  }
        // checkForUpdate = (matrix, direction) => {
        //     print('checkForUpdate',3); 
        //     const tilesAreMovable = (matrixRow, direction) => {
        //         const inv = (direction === 'right' ||  direction === 'down')? 1 : 0;
        //         const l = matrixRow.map( el => el.merged? el.normal.val*2: el.normal.val);
        //         const a = inv? l[0]:l[3], b = inv? l[1]:l[2], 
        //               c = inv? l[2]:l[1], d = inv? l[3]:l[0];
        //         const count = l.reduce( (sum,el) => el? sum += 1: sum ,0),
        //               movable = (a && !b) || (b && !c) || (c && !d);
        //         if (!count)  { return false};   
        //         if ( !movable && count < 2) { 
        //             return false;
        //         } else if ( !movable && count > 1) {
        //             const lastTiles     = a === b, 
        //                   centeredTiles = b === c, 
        //                   firstTiles    = c === d; 
        //             switch (count){
        //                 case 2 : return  firstTiles? true:false;
        //                 case 3 : return  (centeredTiles || firstTiles)? true:false;
        //                 case 4 : return (lastTiles || centeredTiles || firstTiles )? true:false;
        //                 default : return false;
        //             }
        //         } else {
        //             return true;
        //         }
        //      }
        //     let update = false;
        //     switch (direction) {
        //         case 'right': case 'left' :
        //             for( let r = 0; r < 4; r++ ){
        //             if(tilesAreMovable(matrix[r], direction)) { 
        //                 update = true;
        //             }
        //             if (update) {break;}
        //             }
        //         break;
        //         case 'up': case 'down':
        //             for( let c = 0; c < 4; c++ ){
        //                 if(tilesAreMovable([matrix[0][c],
        //                                     matrix[1][c],
        //                                     matrix[2][c],
        //                                     matrix[3][c]], direction)) { 
        //                 update = true;
        //                 }
        //                 if (update) {break;}
        //             }
        //         break;
        //         default : break;
        //     }
        //     return update;
        //  } 
//
    // import React, {Component} from 'react';
    // import style from './CSS/App.css';
    // import ControlKeys from './Components/ControlKeys/ControlKeys';
    // import GameInfo from './Components/GameInfo/GameInfo';
    // import GameContainer from './Containers/GameContainer/GameContainer';

    // const NEW = 1;
    // const OLD = 0;
    // const N = 4;
    // class App extends Component{
        
    //     normaltileObject = (id,val,col,row,nT) => {
    //         return {
    //                 normal: {id:id , val:val, col:col, row:row, newTile:nT},
    //                 merged: null
    //                }
    //      }
    //     mergedtileObject = (id,val,col,row,nT,  mTI,mTV,mTC,mTR) => {
    //         return {
    //                 normal: {id:id , val:val, col:col, row:row, newTile:nT},
    //                 merged: {id:mTI, val:mTV, col:mTC, row:mTR}
    //                }
    //      }
    //     displayTiles = (matrix) => Array(4).fill(0).map( (_,row) => Array(4).fill(0).map( (_,col) => matrix[row][col].normal.val))
    //     newGame = (clicked) => { 
    //         const M = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];//[[128,0,0,512],[4,8,16,2048],[32,2048,8,2],[2,4,2,2048]]; //[[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,0]];/
    //         const posList = Array(16).fill(0).map((_,i)=>[Math.floor(i/4),i%4]); // All Possible Tile Position, List of [row,col]
    //         let randomIndex = Math.floor(posList.length*Math.random()); // choose random index from 0 to 15
    //         let randomPos = posList.splice(randomIndex,1)[0]; // Pick the correspondant element of the chosen index i.e. choose a tile position randomly
    //        M[randomPos[0]][randomPos[1]] = 2; // set the tile value of this position to 2
    //         randomIndex = Math.floor(posList.length*Math.random()); // choose random index from 0 to 14
    //         randomPos = posList[randomIndex];// Pick the correspondant element of the chosen index i.e. choose a tile position randomly
    //        M[randomPos[0]][randomPos[1]] = 2;// set the tile value of this position to 2
    //         // initiate the matrix with tow tiles of the chosen positions 
    //         const newMatrix = Array(4).fill(0).map( (_,row) => Array(4).fill(0).map( (_,col) => {
    //             return   this.normaltileObject(4*row+col, M[row][col], col, row, M[row][col] ? NEW:OLD);
    //         }));
    //         if(clicked){ // if the callBack of this function is invoked by clicking on the newGame button 
    //             this.setState({
    //                 matrix: newMatrix,
    //                 virtualTiles: [],
    //                 score:0,
    //                 history:[newMatrix],
    //                 step:0,
    //                 lastMove:' start ',
    //                 idStore: Array.from({length: 5}, (x,i) => i + 16),
    //                 gameOver:false
    //             })
    //         }else{ // if the callBack of this function is invoked by the state of this class automatically at the start of the game
    //             return newMatrix;}        
    //      }

    //     mergeAndShift = (matrix, d, idstore) => { 
    //         let idStore = [...idstore];
    //         let addToScore = 0;
    //         const M = this.cloneMatrix(matrix);
    //         const mergeTiles = (tile, nextTile) => {
    //             const virtualTile = nextTile, mergedTile = tile;
    //             mergedTile.merged= {
    //                                 id  : virtualTile.normal.id,
    //                                 val : virtualTile.normal.val, 
    //                                 col :  mergedTile.normal.col,
    //                                 row :  mergedTile.normal.row};
    //             virtualTile.normal.val = 0; // vanished tile
    //             virtualTile.normal.id = idStore[0]; // the vanished tile picks a new id from the idStore
    //             idStore = idStore.slice(1); // update the idStore
    //             addToScore += mergedTile.normal.val *2;
    //          }
    //         switch (d) {
    //             case 'left':
    //                 for (let r = 0; r < 4; r++ ){ // left
    //                     for (let c = 0; c < N - 1; c++ ){
    //                         const tile = M[r][c], nextTile = M[r][c + 1];
    //                         if( tile.normal.val && nextTile.normal.val === tile.normal.val ){
    //                             mergeTiles(tile, nextTile);
    //                             c++;
    //                         }
    //                     }
    //                 }                    
    //                 break;
    //             case 'right':
    //                 for (let r = 0; r < 4; r++ ){ // right
    //                     for (let c = N - 1; c > 0; c-- ){
    //                         const tile = M[r][c], nextTile = M[r][c - 1];
    //                         if( tile.normal.val && nextTile.normal.val === tile.normal.val ){
    //                             mergeTiles(tile, nextTile);
    //                             c--;
    //                         }
    //                     }
    //                 }                   
    //                 break;   
    //             case 'down':
    //                 for(let c = 0; c < 4; c++ ){ 
    //                     for(let r = N - 1; r > 0; r-- ){
    //                         const  tile = M[r][c], nextTile = M[r - 1][c]
    //                         if( tile.normal.val && nextTile.normal.val === tile.normal.val ){
    //                             mergeTiles(tile, nextTile);
    //                             r--;
    //                         }
    //                     }
    //                 }  
    //                 break;      
    //             case 'up':
    //                 for(let c = 0; c < 4; c++ ){ 
    //                     for(let r = 0; r < N - 1; r++ ){
    //                         const  tile = M[r][c], nextTile = M[r + 1][c];
    //                         if( tile.normal.val && nextTile.normal.val === tile.normal.val ){
    //                             mergeTiles(tile, nextTile);
    //                             r++;
    //                         }
    //                     }
    //                 }    
    //                 break;
    //             default:
    //                 break;
    //          }
    //         return { matrix : this.moveTiles(M,d) , newIdStore:idStore, addToScore: addToScore} ;
    //      }
    //     moveTiles = (matrix,direction) => {
    //          const newMatrix = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    //         switch (direction) {
    //             case 'left':   
    //                 for( let r = 0; r < 4; r++ ){
    //                     let j = 0, k = N - 1;
    //                     for( let c = 0; c < 4; c++ ){
    //                         const tn = matrix[r][c].normal;
    //                         if ( tn.val ){  const tm = matrix[r][c].merged;
    //                         newMatrix[r][j] = tm ? this.mergedtileObject(tn.id ,tn.val, j ,tn.row,tn.newTile, tm.id,tm.val, j ,tm.row)
    //                                              : this.normaltileObject(tn.id ,tn.val, j ,tn.row,tn.newTile);
    //                         j++;    
    //                         }else{ newMatrix[r][k] = this.normaltileObject(tn.id ,0, k ,tn.row,tn.newTile);
    //                         k--;}
    //                 }}
                
    //             return newMatrix;
    //             case 'right':
    //                 for( let r = 0; r < 4; r++ ){
    //                     let j = 0, k = N - 1;
    //                     for( let c = N - 1; c > -1 ; c-- ){
    //                         const tn = matrix[r][c].normal;
    //                         if ( tn.val ){  const tm = matrix[r][c].merged;
    //                         newMatrix[r][k] = tm ? this.mergedtileObject(tn.id ,tn.val, k , r ,tn.newTile, tm.id,tm.val, k , r )
    //                                              : this.normaltileObject(tn.id ,tn.val, k , r ,tn.newTile);
    //                         k--;    
    //                         }else{ newMatrix[r][j] = this.normaltileObject(tn.id , 0 , j ,tn.row,tn.newTile);
    //                         j++;}
    //                 }}
    //             return newMatrix;
    //             case 'down': 
    //                 for( let c = 0; c < 4; c++ ){
    //                     let j = 0, k =N - 1;
    //                     for( let r = N - 1; r > -1; r-- ){
    //                         const tn = matrix[r][c].normal;
    //                         if ( tn.val ){  const tm = matrix[r][c].merged;
    //                         newMatrix[k][c] = tm ? this.mergedtileObject(tn.id ,tn.val, c , k ,tn.newTile, tm.id,tm.val, c , k )
    //                                              : this.normaltileObject(tn.id ,tn.val, c , k ,tn.newTile);
    //                         k--;  
    //                         }else{ newMatrix[j][c] = this.normaltileObject(tn.id ,0, c , j,tn.newTile);
    //                         j++;}
    //                 }}
    //             return newMatrix;
    //             case 'up':  
    //                 for( let c = 0; c < 4; c++ ){
    //                     let j = 0, k = N - 1;
    //                     for( let r = 0; r < 4; r++ ){
    //                         const tn = matrix[r][c].normal;
    //                         if ( tn.val ){  const tm = matrix[r][c].merged;
    //                         newMatrix[j][c] = tm ? this.mergedtileObject(tn.id ,tn.val, c , j ,tn.newTile, tm.id,tm.val, c , j )
    //                                              : this.normaltileObject(tn.id ,tn.val, c , j,tn.newTile);
    //                         j++;    
    //                         }else{ newMatrix[ k][c] = this.normaltileObject(tn.id ,0, c , k  ,tn.newTile);
    //                         k--;}
    //                 }}
    //             return newMatrix;                   
    //             default: break;
    //          }
    //      }
        

                    
    //     addingNewTile = (matrix, idStore) => {
    //         let emptytilesMatrix =  matrix.map( // collect positions ofcountEmpty tiles in a matrix form
    //                 (matrixRow,row) => matrixRow.reduce(  
    //                 (list,tile,col) => !tile.normal.val? list.concat([ [row,col] ]):list, []));
    //         // transformcountEmptyTiles from a matrix form to an array
    //         let emptytilesArray = this.matrixToArray(emptytilesMatrix, N);
    //        //for( let i = 0; i < N; i++ ) { emptytilesArray.concat([...emptytilesMatrix[i]]) }
    //         console.log('emptytilesArray',emptytilesArray);
    //         //emptytiles = [...emptytiles[0],...emptytiles[1],...emptytiles[2],...emptytiles[3]];
    //         // pick a randomcountEmptyTile position from emptiTiles
    //         const randomEmptyTile = emptytilesArray[Math.floor(emptytilesArray.length*Math.random())] ;
    //         const row0 = randomEmptyTile[0], col0 = randomEmptyTile[1];
    //         //const M =  Array(4).fill(0).map( (_,row) => Array(4).fill(0).map( (_,col) => Object.assign({}, matrix[row][col]))); 
    //         matrix[row0][col0].normal.val = 2;
    //         matrix[row0][col0].normal.newTile = 1;
    //          // add the tile id to idStore and take a new one
    //         matrix[row0][col0].normal.id = idStore.splice(idStore.length-1, 1, matrix[row0][col0].normal.id)[0];
    //         return matrix;
    

    //      }

    //     pickVirtualTiles = (matrix) => matrix.map( 
    //         (matrixRow,r) => matrixRow.reduce((list, tile) => tile.merged? list.concat({normal:tile.merged,virtual:true}) : list, []))
    //         .reduce( (list,listRow) => listRow[0]? list.concat(listRow) : list, [])

    //     move = (oldMatrix, direction) => { // move and merge tiles 
    //         let newScore = this.state.score;
    //         const data   = this.fetchingData(oldMatrix); // fetching needed data from the oldMatrix
    //         let idStore  = [...data.updatedIdStore];  // oldIdStore + available Ids from oldMatrix's old virtual Tiles       
    //         const clearedMatrix = data.matrix; // oldMatrix cleared from old virtual Tiles
    //         const matrixAfterMovingTiles  = this.moveTiles(clearedMatrix,direction);
    //         const mergingTiles = this.mergeAndShift(matrixAfterMovingTiles,direction,idStore); 
    //         const newMatrix = mergingTiles.matrix;
    //         const virtualTiles = this.pickVirtualTiles(newMatrix);
    //         newScore += mergingTiles.addToScore;
    //         idStore = [...mergingTiles.newIdStore]; // some ids have been used from idstore when merging tiles
    //         console.log('idStore',idStore);
    //         this.addingNewTile(newMatrix, idStore); 
    //         console.log('idStore after addingNewTile',idStore);
    //         this.setState({
    //                         matrix:newMatrix,
    //                         virtualTiles:virtualTiles,
    //                         score : newScore,
    //                         history: this.state.history.concat([newMatrix]),
    //                         step:this.state.history.length+1,
    //                         idStore: idStore,
    //                         lastMove:direction,
    //                         });
                        
    //      }
    //     fetchingData = (matrix) => { 
    //         let idStore = [...this.state.idStore];
    //         const clearedMatrix = matrix.map( (matrixRow,r) => matrixRow.map( (tile,c) => {   
    //                                             const tn = tile.normal, tm = tile.merged; 
    //                                             if (tm) { // pick available ids from old virtual tiles
    //                                                 const id = tm.id;
    //                                                 idStore.splice(0, 0, id); // add ids to idStore
    //                                             }
    //                                             return this.normaltileObject(tn.id,tm? tn.val*2:tn.val,tn.col,tn.row,OLD)} ));
    //      return {matrix:clearedMatrix, updatedIdStore:idStore}
    //      }
    //     cloneMatrix = (matrix) =>  matrix.map( (matrixRow,r) => matrixRow.map( (tile,c) => 
    //         { const tn = tile.normal, tm = tile.merged;
    //              return tm ? this.mergedtileObject(tn.id ,tn.val,tn.col,tn.row,tn.newTile, tm.id,tm.val,tm.col,tm.row)
    //                        : this.normaltileObject(tn.id ,tn.val,tn.col ,tn.row,tn.newTile)}))
    //     clickHandler = (direction) => {
    //         if (this.checkForUpdate(this.state.matrix,direction)) { 
    //             this.move(this.state.matrix,direction);
    //         }
    //         }
    //     matrixToArray = (matrix, size) => {
    //         let array = [];
    //         for( let i = 0; i < size; i++ ) {array = array.concat([...matrix[i]]) }
    //         return array;
    //      }
    //     forward = () => this.setState({matrix:this.state.history[this.state.step+1],step:this.state.step+1});
    //     backward = () => this.setState({matrix:this.state.history[this.state.step-1],step:this.state.step-1});
    //     matrixIsFull = (matrix) => /*[...matrix[0],...matrix[1],...matrix[2],...matrix[3]]*/this.matrixToArray(matrix,N).reduce( (sum,el) => el.normal.val? sum += 1: sum, 0) === 16                 
    //     checkForUpdate = (matrix, direction) => {
    //         const tilesAreMovable = (matrixRow, direction) => {
    //             const inv = (direction === 'right' ||  direction === 'down')? 1 : 0;
    //             const l = matrixRow.map( el => el.merged? el.normal.val*2: el.normal.val);
    //             const a = inv? l[0]:l[3], b = inv? l[1]:l[2], 
    //                   c = inv? l[2]:l[1], d = inv? l[3]:l[0];
    //             const count = l.reduce( (sum,el) => el? sum += 1: sum ,0),
    //                   movable = (a && !b) || (b && !c) || (c && !d);
    //             if (!count)  { return false};   
    //             if ( !movable && count < 2) { 
    //                 return false;
    //             } else if ( !movable && count > 1) {
    //                 const lastTiles     = a === b, 
    //                       centeredTiles = b === c, 
    //                       firstTiles    = c === d; 
    //                 switch (count){
    //                     case 2 : return  firstTiles? true:false;
    //                     case 3 : return  (centeredTiles || firstTiles)? true:false;
    //                     case 4 : return (lastTiles || centeredTiles || firstTiles )? true:false;
    //                     default : return false;
    //                 }
    //             } else {
    //                 return true;
    //             }
    //          }
    //         let update = false;
    //         switch (direction) {
    //             case 'right': case 'left' :
    //                 for( let r = 0; r < 4; r++ ){
    //                 if(tilesAreMovable(matrix[r], direction)) { 
    //                     update = true;
    //                 }
    //                 if (update) {break;}
    //                 }
    //             break;
    //             case 'up': case 'down':
    //                 for( let c = 0; c < 4; c++ ){
    //                     if(tilesAreMovable([matrix[0][c],
    //                                         matrix[1][c],
    //                                         matrix[2][c],
    //                                         matrix[3][c]], direction)) { 
    //                     update = true;
    //                     }
    //                     if (update) {break;}
    //                 }
    //             break;
    //             default : break;
    //         }
    //         return update;
    //      }

    //     state = {
    //         matrix:  (this.newGame(false)),
    //         virtualTiles: [],
    //         score: 0,
    //         history:[],
    //         step:0,
    //         lastMove:'Start',
    //         idStore: Array.from({length: 5}, (x,i) => i + 16),
    //         gameOver:false
    //      }   
    //     componentDidUpdate (prevProps, prevState) {
    //         if(this.matrixIsFull(this.state.matrix) && !this.state.gameOver) {
    //             if ( !this.checkForUpdate(this.state.matrix, 'left') && 
    //                  !this.checkForUpdate(this.state.matrix, 'up')){
    //                    this.setState({gameOver:true});
    //             }
    //         }
    //      }
    //     toConsole = (matrix,futureMatrix) => {
    //         console.log('__________',this.state.step,this.state.lastMove,'___________');
    //         console.log('matrix',matrix);
    //         console.log('display',this.displayTiles(matrix));
    //         console.log('virtualTiles',this.state.virtualTiles);
    //         console.log('score',this.state.score);
    //         }

    //     render() {
    //         const matrix = this.state.matrix, virtualTiles = this.state.virtualTiles;
    //         //  <img src={logo} className={style.AppLogo} alt="logo" />
    //         return (
    //             <div className = {style.BigWrapper}>
    //                 <GameInfo 
    //                       score = {this.state.score} 
    //                       newGame = {() => this.newGame(true)} />
    //                 <GameContainer 
    //                       matrix = {matrix} virtualTiles = {virtualTiles} 
    //                       gameOver = {this.state.gameOver} 
    //                       score    = {this.state.score}
    //                       newGame =  {() => this.newGame(true)}/>
    //                 <ControlKeys 
    //                       left  = {() => this.clickHandler('left')} 
    //                       right = {() => this.clickHandler('right')}
    //                       up    = {() => this.clickHandler('up')}   
    //                       down  = {() => this.clickHandler('down')} />
    //             </div>);

    //      }

    // }
    // export default App;