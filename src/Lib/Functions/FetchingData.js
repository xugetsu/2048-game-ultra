import print from './Print';
import normaltileObject from './NormaltileObject';

const OLD = 0;
 // fetching needed data from the matrix, add ids to idStore
const fetchingData = (matrix, oldIdStore) => {
    print('fetchingData',3);
    let idStore = [...oldIdStore];
    // Clear the matrix (change merged tiles vals *2 and clear their merge object)
    // & Update the IdSore :
    const clearedMatrix = matrix.map( (matrixRow,r) =>
                          matrixRow.map( (tile,c) => {   
                            const tn = tile.normal, tm = tile.merged; 
                            if (tm) { // pick available ids from old virtual tiles from the merge object
                                const id = tm.id;
                                idStore.splice(0, 0, id); // add ids to idStore
                            }
                            // this will delete the tile's merge object and returning a normal tile
                            return normaltileObject(tn.id,tm? tn.val*2:tn.val,tn.col,tn.row,OLD)} ));
 return {matrix:clearedMatrix, updatedIdStore:idStore}
 };

export default fetchingData;

