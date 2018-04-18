import print from './Print';
import mergedtileObject from './MergedtileObject';
import normaltileObject from './NormaltileObject';

const moveTiles = (matrix,direction,blockerList) => {
    print('moveTiles',3);
    const N = matrix.length;
    const newMatrix = Array(N).fill(0).map( (_,row) => Array(N).fill(0)); 
    switch (direction) {
        case 'left':   
               for( let r = 0; r < N; r++ ){
                if( blockerList.cols && blockerList.cols[r] !== 0){
                    const bl_c = [...blockerList.cols[r]];
                    let bl = bl_c
                    if ( bl[0] !== 0 ){  bl = [-1,...bl]  }
                    if ( bl[bl.length-1] !== N-1 ){  bl = [...bl, N]  }
                    for (let i = 0; i < bl.length-1; i++){
                        let j = bl[i] + 1, k = bl[i + 1] - 1;
                        for( let c = bl[i] + 1; c < bl[i + 1] ; c++ ){
                            const tn = matrix[r][c].normal;
                            if ( tn.val ){  const tm = matrix[r][c].merged;
                            newMatrix[r][j] = tm ? mergedtileObject(tn.id ,tn.val, j ,tn.row,tn.newTile, tm.id,tm.val, j ,tm.row)
                                                : normaltileObject(tn.id ,tn.val, j ,tn.row,tn.newTile);
                            j++;    
                            }else{ newMatrix[r][k] = normaltileObject(tn.id ,0, k ,tn.row,tn.newTile);
                            k--;}
                        }
                    }
                    for(let i = 0; i < bl_c.length; i++){
                        const tn = matrix[r][bl_c[i]].normal;
                        newMatrix[r][bl_c[i]] = normaltileObject(tn.id ,tn.val, bl_c[i] ,tn.row,tn.newTile);
                    }
                }else{
                        let j = 0, k =  N-1;
                        for( let c = 0; c < N; c++ ){
                            const tn = matrix[r][c].normal;
                            if ( tn.val ){  const tm = matrix[r][c].merged;
                            newMatrix[r][j] = tm ? mergedtileObject(tn.id ,tn.val, j ,tn.row,tn.newTile, tm.id,tm.val, j ,tm.row)
                                                : normaltileObject(tn.id ,tn.val, j ,tn.row,tn.newTile);
                            j++;    
                            }else{ newMatrix[r][k] = normaltileObject(tn.id ,0, k ,tn.row,tn.newTile);
                            k--;}
                        }
               }
            }
        return newMatrix;
        case 'right': 
               for( let r = 0; r < N; r++ ){
                if( blockerList.cols && blockerList.cols[r] !== 0){
                    const bl_c = [...blockerList.cols[r]];
                    let bl = bl_c
                    if ( bl[0] !== 0 ){  bl = [-1,...bl]  }
                    if ( bl[bl.length-1] !== N-1 ){  bl = [...bl, N]  }           
                    for (let i = 0; i < bl.length-1; i++){
                        let j = bl[i] + 1, k = bl[i + 1] - 1;
                        for( let c = bl[i + 1] - 1 ; c > bl[i] ; c-- ){
                            const tn = matrix[r][c].normal;
                            if ( tn.val ){  const tm = matrix[r][c].merged;
                            newMatrix[r][k] = tm ? mergedtileObject(tn.id ,tn.val, k , r ,tn.newTile, tm.id,tm.val, k , r )
                                                : normaltileObject(tn.id ,tn.val, k , r ,tn.newTile);
                            k--;   
                            }else{ newMatrix[r][j] = normaltileObject(tn.id ,0, j ,tn.row,tn.newTile);
                            j++;}
                        }
                    }
                    for(let i = 0; i < bl_c.length; i++){
                        const tn = matrix[r][bl_c[i]].normal;
                        newMatrix[r][bl_c[i]] = normaltileObject(tn.id ,tn.val, bl_c[i] ,tn.row,tn.newTile);
                    }
                }else{
                        let j = 0, k =  N-1;
                        for( let c = N-1; c > -1 ; c-- ){
                            const tn = matrix[r][c].normal;
                            if ( tn.val ){  const tm = matrix[r][c].merged;
                            newMatrix[r][k] = tm ? mergedtileObject(tn.id ,tn.val, k , r ,tn.newTile, tm.id,tm.val, k , r )
                                                 : normaltileObject(tn.id ,tn.val, k , r ,tn.newTile);
                            k--;    
                            }else{ newMatrix[r][j] = normaltileObject(tn.id , 0 , j ,tn.row,tn.newTile);
                            j++;}
                        }
               }
            }
        return newMatrix;
        case 'down': 
            for( let c = 0; c < N; c++ ){
                if(blockerList.rows && blockerList.rows[c] !== 0){
                    const bl_r = [...blockerList.rows[c]];
                    let bl = bl_r;
                    if ( bl[0] !== 0 ){  bl = [-1,...bl]  }
                    if ( bl[bl.length-1] !== N-1 ){  bl = [...bl, N]  }               
                    for (let i = 0; i < bl.length-1; i++){
                        let j = bl[i] + 1, k = bl[i + 1] - 1;  
                        for( let r =  bl[i + 1] - 1; r > bl[i] ; r-- ){
                            const tn = matrix[r][c].normal;
                            if ( tn.val ){  const tm = matrix[r][c].merged;
                            newMatrix[k][c] = tm ? mergedtileObject(tn.id ,tn.val, c , k ,tn.newTile, tm.id,tm.val, c , k )
                                                : normaltileObject(tn.id ,tn.val, c , k ,tn.newTile);
                            k--;  
                            }else{ newMatrix[j][c] = normaltileObject(tn.id ,0, c , j,tn.newTile);
                            j++;}
                        }
                    }            
                    for(let i = 0; i < bl_r.length; i++){
                        const tn = matrix[bl_r[i]][c].normal;
                        newMatrix[bl_r[i]][c] = normaltileObject(tn.id ,tn.val, tn.col ,bl_r[i],tn.newTile);
                    }        
                }else{
                    let j = 0, k =N-1;
                    for( let r = N-1; r > -1; r-- ){
                        const tn = matrix[r][c].normal;
                        if ( tn.val ){  const tm = matrix[r][c].merged;
                        newMatrix[k][c] = tm ? mergedtileObject(tn.id ,tn.val, c , k ,tn.newTile, tm.id,tm.val, c , k )
                                            : normaltileObject(tn.id ,tn.val, c , k ,tn.newTile);
                        k--;  
                        }else{ newMatrix[j][c] = normaltileObject(tn.id ,0, c , j,tn.newTile);
                        j++;}
                    }
                }   
        }
        return newMatrix;
        case 'up':  
            for( let c = 0; c < N; c++ ){
                if(blockerList.rows && blockerList.rows[c] !== 0){
                    const bl_r = [...blockerList.rows[c]];
                    let bl = bl_r;
                    if ( bl[0] !== 0 ){  bl = [-1,...bl]  }
                    if ( bl[bl.length-1] !== N-1 ){  bl = [...bl, N]  }               
                    for (let i = 0; i < bl.length-1; i++){
                        let j = bl[i] + 1, k = bl[i + 1] - 1;  
                        for( let r = bl[i] + 1 ; r < bl[i + 1]; r++ ){
                            const tn = matrix[r][c].normal;
                            if ( tn.val ){  const tm = matrix[r][c].merged;
                            newMatrix[j][c] = tm ? mergedtileObject(tn.id ,tn.val, c , j ,tn.newTile, tm.id,tm.val, c , j )
                                                : normaltileObject(tn.id ,tn.val, c , j ,tn.newTile);
                            j++;  
                            }else{ newMatrix[k][c] = normaltileObject(tn.id ,0, c , k,tn.newTile);
                            k--;}
                        }
                    }     
                    for(let i = 0; i < bl_r.length; i++){
                        const tn = matrix[bl_r[i]][c].normal;
                        newMatrix[bl_r[i]][c] = normaltileObject(tn.id ,tn.val, tn.col ,bl_r[i],tn.newTile);
                    }                      
                }else{
                    let j = 0, k = N-1;
                    for( let r = 0; r < N; r++ ){
                        const tn = matrix[r][c].normal;
                        if ( tn.val ){  const tm = matrix[r][c].merged;
                        newMatrix[j][c] = tm ? mergedtileObject(tn.id ,tn.val, c , j ,tn.newTile, tm.id,tm.val, c , j )
                                            : normaltileObject(tn.id ,tn.val, c , j,tn.newTile);
                        j++;    
                        }else{ newMatrix[k][c] = normaltileObject(tn.id ,0, c , k  ,tn.newTile);
                        k--;}
                    }
                }      
            }
        return newMatrix;                   
        default: break;
     }
 };
 
export default moveTiles;
