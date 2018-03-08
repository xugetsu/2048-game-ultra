import print from './Print';
const N = 4;

const checkForUpdate = (matrix, direction) => {
    print('checkForUpdate',3); 
    const tilesAreMovable = (matrixRow, direction) => {
        const notMergeable = () => {
            const fullNumsInRow = valsInRow.filter( el => el !== 0 );
            for(let i = 0; i < fullNumsInRow.length - 1; i++) { if(fullNumsInRow[i]===fullNumsInRow[i+1]){return false} }
            return true;};  
        const inv = (direction === 'right' ||  direction === 'down')? 1 : 0;
        let valsInRow = matrixRow.map( el => el.merged? el.normal.val*2: el.normal.val);
        valsInRow = inv? valsInRow : valsInRow.reverse();
        const arrangmentCode = parseInt(valsInRow.reduce( (str,el) => str += el? '1': '0' ,''),2); // example : '0101' '1111' '0000' 0010'
        const OTIRACL = [1,2,4,8,16,32,64,128,256,512,1024,2048,4096]; // OTIRACL = One Tile In Row Arrangment Code List  example: '0100' '0001' '1000' ...
        const notMovable = OTIRACL.includes(arrangmentCode + 1);  // example : 0111 + 1 = 1000 OTIRACL
        if (arrangmentCode <= 1){ return false};   // the row is empty Or has one tile  i.e. immovable + not mergeable
        if (arrangmentCode > 1 && notMovable && notMergeable()){return false}
        else return true
     }
    let update = false;
    const arrangmentCodeMatrix = matrix.map( matRow => parseInt(matRow.reduce( (str,tile)=>str += tile.normal.val? '1': '0' ,''),2) );
    // arrangmentCodeMatrix is a data in matrix form that discribes how tiles are placed in the matrix. 
    // If a tile exist, then place '1' in its position in the matrix. If not, place '0' in its potition.
    const OTIRACL = [1,2,4,8,16,32,64,128,256,512,1024,2048,4096]; // OTIRACL = One Tile In Row Arrangment Code List  example: '0100' '0001' '1000' ...
    let movable = false, notMovable = !movable;
    for( let r = 0; r < N; r++ ){ // checking if there is, at least, one tile that can move in the arrangmentCodeMatrix data
        if(!OTIRACL.includes(arrangmentCodeMatrix[r] + 1)){  // if (movable) example : 0111 + 1 = 1000 OTIRACL => movable = true;
            movable = true; break; // need to be fixed
        } 
    }
    if (notMovable) { // check if not movable
        for( let r = 0; r < N; r++ ){ 
            const fullNumsInMatrix = matrix.map( matRow => matRow.filter( el => el.normal.val !== 0 ) );
            for(let i = 0; i < fullNumsInRow.length - 1; i++) { if(fullNumsInRow[i]===fullNumsInRow[i+1]){return false} }
            return true;};  
        } // need to be fixed
    
    switch (direction) {
        case 'right': case 'left' :
            for( let r = 0; r < N; r++ ){
                if(tilesAreMovable(matrix[r], direction)) {update = true;}
                if (update) {break;}    }break;
        case 'up': case 'down':
            for( let c = 0; c < N; c++ ){
                if( tilesAreMovable(Array(N).fill().map( (_,i) => matrix[i][c] ) , direction)) {update = true;}
                if (update) {break;}    }break;
        default : break;
    }
    return update;
 };

export default checkForUpdate;