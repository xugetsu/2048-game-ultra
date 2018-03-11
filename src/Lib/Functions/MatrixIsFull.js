import print from './Print';

const matrixIsFull = (matrix) => {
    print('matrixIsFull',0); 
    for ( let r = 0; r < matrix.length; r++){
        for( let c = 0; c < matrix.length; c++){
            if( matrix[r][c].normal.val === 0){
                return false;
            }
        }
    }
    return true;               
 };

 export default matrixIsFull;
