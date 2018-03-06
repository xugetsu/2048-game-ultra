import print from './Print';
import normaltileObject from './NormaltileObject';

const OLD = 0;
 // f[fetchingData] : fetching needed data from the matrix, add ids to idStore
const fetchingData = (matrix, oldIdStore) => {
    print('fetchingData',3);
    let idStore = [...oldIdStore];
    const clearedMatrix = matrix.map( (matrixRow,r) => matrixRow.map( (tile,c) => {   
                                        const tn = tile.normal, tm = tile.merged; 
                                        if (tm) { // pick available ids from old virtual tiles
                                            const id = tm.id;
                                            idStore.splice(0, 0, id); // add ids to idStore
                                        }
                                        return normaltileObject(tn.id,tm? tn.val*2:tn.val,tn.col,tn.row,OLD)} ));
 return {matrix:clearedMatrix, updatedIdStore:idStore}
 };

export default fetchingData;

