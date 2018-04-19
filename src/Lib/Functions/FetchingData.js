import print from './Print';
import normaltileObject from './NormaltileObject';

const OLD = 0;
 // fetching needed data from the matrix, add ids to idStore
const fetchingData = (matrix, oldIdStore) => {
    print('fetchingData',3);
    let idStore = [...oldIdStore];
    const N = matrix.length;
    let blockerListC = Array(N).fill().map(e=>[]), blockerListR =  Array(N).fill().map(e=>[]);   
    const clearedMatrix = Array(N).fill(0).map( (_,row) => Array(N).fill(0)); 

    // Clear the matrix (change merged tiles vals *2 and clear their merge object)
    // & Update the IdSore : 
    for (let r = 0; r < N; r++){
        for (let c = 0; c < N; c++){
            const tn = matrix[r][c].normal, tm = matrix[r][c].merged; 
            // pick available ids from old virtual tiles from the merge object
            if (tm) {  idStore.splice(0, 0, tm.id);  } // add ids to idStore       
            // put blocker Tiles Positions in blockerListRow / blockerListCol
            if (tn.val < 1 && tn.val > 0) { blockerListC[r].push(tn.col);  
                                blockerListR[c].push(tn.row); }
            if( r === N-1 && blockerListR[c].length === 0){  blockerListR[c] = 0}                    
            // this will delete the tile's merge object and returning a normal tile
            clearedMatrix[r][c] = normaltileObject(tn.id,tm? tn.val*2:tn.val,tn.col,tn.row,OLD);
        }
        if ( blockerListC[r].length === 0){  blockerListC[r] = 0}
    }
    return {matrix:clearedMatrix, updatedIdStore:idStore, blockerList:{cols:blockerListC, rows:blockerListR}}
};

export default fetchingData;

        // const clearedMatrix = matrix.map( 
        //                         (matrixRow,r) => {
        //                             const blockerListRow = [];
        //                             const newMatrixRow =  matrixRow.map( (tile,c) => {  
        //                                         const tn = tile.normal, tm = tile.merged; 
        //                                         if (tm) { // pick available ids from old virtual tiles from the merge object
        //                                             const id = tm.id;
        //                                             idStore.splice(0, 0, id); // add ids to idStore
        //                                         }
        //                                         if (tn.val === 1) {
        //                                             blockerListRow.push([tn.row,tn.col]);
        //                                         }
        //                                         // this will delete the tile's merge object and returning a normal tile
        //                                         return normaltileObject(tn.id,tm? tn.val*2:tn.val,tn.col,tn.row,OLD)
        //                             })
        //                             blockerList.push(blockerListRow.length?blockerListRow:0);
        //                             return newMatrixRow;
        //                         }
        //                     );


