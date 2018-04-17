 
 export default (N) => {
     const  gridSizes   = [80,72,60,53,48,43], 
            gridMargins = [13,12,10,7.5,5.5,5],
            fontSizes   = [45,40,35,33,28,25],
            lineHeight  = [80,70,58,52,50,40];
            
    return {    gridSize: gridSizes[N-4],
                gridMargins: gridMargins[N-4],
                fontSizes: fontSizes[N-4],
                lineHeight: lineHeight[N-4],
                matrixSize: gridSizes[N-4]*N + gridMargins[N-4]*(N + 1)           
            }
}