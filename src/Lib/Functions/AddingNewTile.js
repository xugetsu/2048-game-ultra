import print from './Print';
import pickRandomItems from './pickRandomItems';

const addingNewTile = (matrix, idStore, addBlocker) => {
    print('addingNewTile',3);
    let emptytiles =  matrix.map( // collect positions of Empty tiles in a matrix form
            (matrixRow,row) => matrixRow.reduce(
            (list,tile,col) => !tile.normal.val? list.concat([ [row,col] ]):list, []));
    // transform 'emptyTiles' from a matrix form to an array
    emptytiles = emptytiles.reduce( (array,rowOfEmptytiles) => array.concat(rowOfEmptytiles),[]);
    // pick random empty Tile positions from emptyTiles
    const rand = pickRandomItems(emptytiles, addBlocker ? 2 : 1); // pick two if we need to add a blocker Tile
    const row0 = rand[0][0], col0 = rand[0][1];
    if (addBlocker && emptytiles.length > 1) { // 1 place for the new tile and 1 place for the blocker
        matrix[rand[1][0]][rand[1][1]].normal.val = 0;
        matrix[rand[1][0]][rand[1][1]].normal.blocker = 1;}
    matrix[row0][col0].normal.val = 2;
    matrix[row0][col0].normal.newTile = 1;
    // add the tile id to idStore and take a new one // why?? 
    //matrix[row0][col0].normal.id = idStore.splice(idStore.length-1, 1, matrix[row0][col0].normal.id)[0]; // why ?? 
    return matrix;
 }

export default addingNewTile;
