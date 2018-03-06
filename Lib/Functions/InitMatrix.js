import normaltileObject from './NormaltileObject';
import print from './Print';

const NEW = 1;
const OLD = 0;
const N = 4; // the size of the matrix :D
const matrixPositionsList = (size) => Array(size*size).fill().map((_,i)=>[Math.floor(i/size),i%size]);
const initMatrix = () => {
    print('initMatrix',3);
    const matrix = Array(N).fill(0).map( (_,row) => Array(N).fill(0).map( (_,col) => {
                   return  normaltileObject(N * row + col, 0, col, row, OLD); }));
    const posList = matrixPositionsList(N); // All Possible Tile Position, List of [row,col]
    let randIndx = Math.floor(posList.length*Math.random()); // choose random index from 0 to 15
    let randPos = [posList.splice(randIndx,1)[0] , 0]; // Pick the correspondant element of the chosen index i.e. choose a tile position randomly
    randIndx = Math.floor(posList.length*Math.random()); // choose random index from 0 to 14
    randPos[1] = posList[randIndx];// Pick the correspondant element of the chosen index i.e. choose a tile position randomly
    /// initiate the matrix with tow tiles of the chosen random positions
    const tile1 = matrix[randPos[0][0]][randPos[0][1]];
    const tile2 = matrix[randPos[1][0]][randPos[1][1]];
    tile1.normal.newTile = NEW; tile1.normal.val = 2; 
    tile2.normal.newTile = NEW; tile2.normal.val = Math.floor(4*Math.random()/2)*2+2;
    return matrix;
 }
 export default initMatrix;