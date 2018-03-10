import print from './Print';
import mergedtileObject from './MergedtileObject';
import normaltileObject from './NormaltileObject';

const cloneMatrix = (matrix) => {
    print('cloneMatrix',6);
    return matrix.map( (matrixRow,r) => matrixRow.map( (tile,c) => 
        { const tn = tile.normal, tm = tile.merged;
            return tm ? mergedtileObject(tn.id ,tn.val,tn.col,tn.row,tn.newTile, tm.id,tm.val,tm.col,tm.row)
                    : normaltileObject(tn.id ,tn.val,tn.col ,tn.row,tn.newTile)}))};

 export default cloneMatrix;

