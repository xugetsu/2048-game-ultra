const displayTiles = (matrix) => Array(4).fill(0).map( (_,row) => Array(4).fill(0).map( (_,col) => matrix[row][col].normal.val));
export default displayTiles;