import print from './Print';

const mergedtileObject = (id,val,col,row,nT,  mTI,mTV,mTC,mTR) => {
    print('normaltileObject',6);
    return {
            normal: {id:id , val:val, col:col, row:row, newTile:nT},
            merged: {id:mTI, val:mTV, col:mTC, row:mTR}
           }
  };
  export default mergedtileObject;