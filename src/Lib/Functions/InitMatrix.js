import normaltileObject from './NormaltileObject';
import print from './Print';
import pickRandomItems from './pickRandomItems';

const NEW = 1;
const OLD = 0;
 
const matrixPositionsList = (size) => Array(size*size).fill().map((_,i)=>[Math.floor(i/size),i%size]);
const initMatrix = (matrixSize) => {
    print('initMatrix',3);
    const matrix = Array(matrixSize).fill(0).map( (_,row) => Array(matrixSize).fill(0).map( (_,col) => {
                   return  normaltileObject(matrixSize * row + col, 0, col, row, OLD); }));
    const posList = matrixPositionsList(matrixSize); // All Possible Tile Position, List of [row,col]
    const randPos = pickRandomItems(posList, 2);
    /// initiate the matrix with tow tiles of the chosen random positions
    const tile1 = matrix[randPos[0][0]][randPos[0][1]];
    const tile2 = matrix[randPos[1][0]][randPos[1][1]];
    tile1.normal.newTile = NEW; tile1.normal.val = 2; 
    tile2.normal.newTile = NEW; tile2.normal.val = Math.floor(4*Math.random()/2)*2+2;
    return matrix;
 }
 export default initMatrix;