import print from './Print';

const pickVirtualTiles = (matrix) => { 
    print('pickVirtualTiles',3);
    return matrix.map( 
    (matrixRow,r) => matrixRow.reduce((list, tile) => tile.merged? list.concat({normal:tile.merged}) : list, []))
    .reduce( (list,listRow) => listRow[0]? list.concat(listRow) : list, [])};

 export default pickVirtualTiles;