import print from './Print';

// "map" function has been used a lot here 
// to generalize the use of checkForUpdate function for any matrix size. 


const checkForUpdate = (matrix, direction) => {
    print('checkForUpdate',3); 
//// 0) preparing variable for check proccess :
    // Size of 'matrix':
    const N = matrix.length;
    // Create a matrix 'M' of tile vals from the matrix 'matrix' :
    let M = matrix.map( matRow => matRow.map( (tile,c) => tile.merged? tile.normal.val*2 : tile.normal.val ));  
    // FTACL : cases of Fixed (immovable) Tiles Arrangment Code List in base 10 ('0000' '0001' '0011' '0111')
    const FTACL = [0,1,3,7,15,31,63,127,255,511,1023,2047,4095];

    // Modify the position of tiles in M according to 'direction' so that we can always compare tiles values
    // to arrangement codes later
    switch (direction) {
        case 'right': 
            break;
        case 'left': 
            M = M.map( M_row => M_row.map( (_,c) => M_row[(N-1) - c] ));  
            break;
        case 'down': 
            M = Array(N).fill().map( (_,c) => Array(N).fill().map( (_,r) => M[r][c] ));
            break;
        case 'up': 
            M = Array(N).fill().map( (_,c) => Array(N).fill().map( (_,r) => M[N-1-r][c] ));
            break;
        default: break;
    }
    // creating "arrangmentCodeMatrix" :
     // 'arrangmentCodeMatrix' is a data in a matrix form that discribes how tiles are placed in each row of the matrix. 
     // If a tile exist, then place '1' in its position in the matrix. If not, place '0' instead. 
     // Consequently, each array/row in the matrix will have a binary code based on tiles positions in it (ex '1010'), 
     // The parseInt function will then convert each code to base 10 ( example '1010' becomes '10')
     // so that we can compare them to arrangement codes.
    const arrangmentCodeMatrix = M.map( matRow => matRow.reduce( (str,tileVal) => {
                    return str += (tileVal > 1 ? '1': tileVal > 0 ? ' ' : '0')} ,''));
    let arrangmentCodeList= arrangmentCodeMatrix.reduce( (l,e) => l + ' ' + e, '').split(' ').slice(1);
    arrangmentCodeList = arrangmentCodeList.map( e => e === '' ? 0 : parseInt(e,2));
//// 1) Checking if there is at least one tile that can move in the arrangmentCodeMatrix data :
    for( let i = 0; i < arrangmentCodeList.length; i++ ){
        // if the arrangment Code in the actual array/row is not one of the FTACL list codes
        // then there is at least one tile that can move
        // 'checkForUpdate' returns true, the rest of the code/loop will not be executed. 
        if( !FTACL.includes(arrangmentCodeList[i]) ){
            return true}
    };

//// 2) Checking if there is at least one merging case for the fixed tiles :
    // fullNumsInMatrix : remove tiles with val = 0 from each array/row in 'M' matrix
    // exemple : [0,2,4,4] becomes [2,4,4] etc.
    const fullNumsInMatrix = M.map( matRow => matRow.filter( tileVal => tileVal!== 0 ) );
    // begin check for merge cases process:
    for( let r = 0; r < N; r++ ){
        const fullNumsInRow = fullNumsInMatrix[r];
        for(let c = 0; c < fullNumsInRow.length - 1; c++) {
            if(fullNumsInRow[c] === fullNumsInRow[c+1]){ return true}  // A merging case
            // 'checkForUpdate' returns true, the rest of the code/loop will not be executed. 
            }
    };    
//// 3) 'checkForUpdate' returns false if there is no movable or mergeable tiles :
    return false; 
 };

export default checkForUpdate;