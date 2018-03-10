import print from './Print';

const addingNewTile = (matrix, idStore) => {
    print('addingNewTile',3);
    let emptytiles =  matrix.map( // collect positions of Empty tiles in a matrix form
            (matrixRow,row) => matrixRow.reduce(  
            (list,tile,col) => !tile.normal.val? list.concat([ [row,col] ]):list, []));
    // transform 'emptyTiles' from a matrix form to an array
    emptytiles = emptytiles.reduce( (array,rowOfEmptytiles) => array.concat(rowOfEmptytiles),[]);
    // pick a randomcountEmptyTile position from emptyTiles
    const randomEmptyTile = emptytiles[Math.floor(emptytiles.length*Math.random())] ;
    const row0 = randomEmptyTile[0], col0 = randomEmptyTile[1];
    //const M =  Array(4).fill(0).map( (_,row) => Array(4).fill(0).map( (_,col) => Object.assign({}, matrix[row][col]))); 
    matrix[row0][col0].normal.val = 2;
    matrix[row0][col0].normal.newTile = 1;
     // add the tile id to idStore and take a new one
    matrix[row0][col0].normal.id = idStore.splice(idStore.length-1, 1, matrix[row0][col0].normal.id)[0];
    return matrix;
 }

export default addingNewTile;
