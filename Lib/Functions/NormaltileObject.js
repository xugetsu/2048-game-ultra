import print from './Print';

const normaltileObject = (id,val,col,row,nT) => {
    print('normaltileObject',6);
    return {
            normal: {id:id , val:val, col:col, row:row, newTile:nT},
            merged: null
           }
 };

 export default normaltileObject;