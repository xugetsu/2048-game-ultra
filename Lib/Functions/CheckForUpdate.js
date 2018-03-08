import print from './Print';
const N = 4;

const checkForUpdate = (matrix, direction) => {
    print('checkForUpdate',3); 
    let M = matrix.map( matRow => matRow.map( (tile,c) => tile.merged? tile.normal.val*2 : tile.normal.val ));  
    const FTACL = [0,1,3,7,15,31,63,127,255,511,1023,2047,4095]; // FTACL : cases of Fixed (inmovable) Tiles Arrangment Code List '0000' '0001' '0011' '0111'
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
    const arrangmentCodeMatrix = M.map( matRow => parseInt(matRow.reduce( (str,tileVal)=>str += tileVal? '1': '0' ,''),2) );
    // 'arrangmentCodeMatrix' is a data in a matrix form that discribes how tiles are placed in the tiles matrix. 
     // If a tile exist, then place '1' in its position in the matrix. If not, place '0' instead. 
     // Consequently, each array in the matrix will have a binary code (ex '1010'), 
     // The parseInt function will then convert each code to base 10. example '1010' becomes '10'
    //console.log('arrangmentCodeMatrix',M.map(matRow =>matRow.reduce( (str,tileVal)=>str += tileVal? '1': '0' ,'')));

    // 1) Checking if there is at least one tile that can move in the arrangmentCodeMatrix data :
        for( let r = 0; r < N; r++ ){
            if(!FTACL.includes(arrangmentCodeMatrix[r])){
                //console.log('==> move case');
                return true}
                // if arrangment Code in the array is not one of the FTACL list codes
                // then there is at least one tile that can move
                // 'checkForUpdate' returns true, the rest of the code/loop will not be executed. 
        };
    // 2) Checking if there is at least one merging case for the fixed tiles :
        const fullNumsInMatrix = M.map( matRow => matRow.filter( tileVal => tileVal!== 0 ) );
            // fullNumsInMatrix : [0,2,4,4] becomes [2,4,4] etc..(filter val = 0)
        for( let r = 0; r < N; r++ ){
            const fullNumsInRow = fullNumsInMatrix[r];
            for(let c = 0; c < fullNumsInRow.length - 1; c++) {
                if(fullNumsInRow[c] === fullNumsInRow[c+1]){
                    //console.log('===> merge case in fullNumsInRow',fullNumsInRow); 
                    return true} // A merging case
                // 'checkForUpdate' returns true, the rest of the code/loop will not be executed. 
                }
        };    
    // 3) 'checkForUpdate' returns false if there is no movable or mergeable tiles :
       return false; 
 };

export default checkForUpdate;