import print from './Print';
import mergedtileObject from './MergedtileObject';
import normaltileObject from './NormaltileObject';

const moveTiles = (matrix,direction) => {
    print('moveTiles',3);
     const newMatrix = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    switch (direction) {
        case 'left':   
            for( let r = 0; r < 4; r++ ){
                let j = 0, k = 3;
                for( let c = 0; c < 4; c++ ){
                    const tn = matrix[r][c].normal;
                    if ( tn.val ){  const tm = matrix[r][c].merged;
                    newMatrix[r][j] = tm ? mergedtileObject(tn.id ,tn.val, j ,tn.row,tn.newTile, tm.id,tm.val, j ,tm.row)
                                         : normaltileObject(tn.id ,tn.val, j ,tn.row,tn.newTile);
                    j++;    
                    }else{ newMatrix[r][k] = normaltileObject(tn.id ,0, k ,tn.row,tn.newTile);
                    k--;}
            }}
         
        return newMatrix;
        case 'right':
            for( let r = 0; r < 4; r++ ){
                let j = 0, k = 3;
                for( let c = 3; c > -1 ; c-- ){
                    const tn = matrix[r][c].normal;
                    if ( tn.val ){  const tm = matrix[r][c].merged;
                    newMatrix[r][k] = tm ? mergedtileObject(tn.id ,tn.val, k , r ,tn.newTile, tm.id,tm.val, k , r )
                                         : normaltileObject(tn.id ,tn.val, k , r ,tn.newTile);
                    k--;    
                    }else{ newMatrix[r][j] = normaltileObject(tn.id , 0 , j ,tn.row,tn.newTile);
                    j++;}
            }}
        return newMatrix;
        case 'down': 
            for( let c = 0; c < 4; c++ ){
                let j = 0, k =3;
                for( let r = 3; r > -1; r-- ){
                    const tn = matrix[r][c].normal;
                    if ( tn.val ){  const tm = matrix[r][c].merged;
                    newMatrix[k][c] = tm ? mergedtileObject(tn.id ,tn.val, c , k ,tn.newTile, tm.id,tm.val, c , k )
                                         : normaltileObject(tn.id ,tn.val, c , k ,tn.newTile);
                    k--;  
                    }else{ newMatrix[j][c] = normaltileObject(tn.id ,0, c , j,tn.newTile);
                    j++;}
            }}
        return newMatrix;
        case 'up':  
            for( let c = 0; c < 4; c++ ){
                let j = 0, k = 3;
                for( let r = 0; r < 4; r++ ){
                    const tn = matrix[r][c].normal;
                    if ( tn.val ){  const tm = matrix[r][c].merged;
                    newMatrix[j][c] = tm ? mergedtileObject(tn.id ,tn.val, c , j ,tn.newTile, tm.id,tm.val, c , j )
                                         : normaltileObject(tn.id ,tn.val, c , j,tn.newTile);
                    j++;    
                    }else{ newMatrix[ k][c] = normaltileObject(tn.id ,0, c , k  ,tn.newTile);
                    k--;}
            }}
        return newMatrix;                   
        default: break;
     }
 };
 
export default moveTiles;
