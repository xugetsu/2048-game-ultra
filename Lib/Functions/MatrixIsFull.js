import print from './Print';

const matrixIsFull = (matrix) => {
    print('matrixIsFull',0); 
    return [...matrix[0],...matrix[1],...matrix[2],...matrix[3]].reduce( (sum,el) => el.normal.val? sum += 1: sum, 0) === 16                 
 };

 export default matrixIsFull;
