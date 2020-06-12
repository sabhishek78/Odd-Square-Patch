// Odd Square Patch


// Create a function that takes an array of array of numbers, and returns the size of the biggest square patch of odd numbers. See 
// examples for better understanding.

// Examples
// oddSquarePatch([
//   [1, 2, 4, 9],
//   [4, 5, 5, 7],
//   [3, 6, 1, 7]
// ]); // should return 2

// // The 2x2 square at the lower right
// // ([5, 7] on the 2nd row, [1, 7] on the third).

// oddSquarePatch([[1, 2, 4, 9]]); // should return 1

// // An array with a single row can only have a square patch of
// // maximum size 1x1 containing a single odd element.

// oddSquarePatch([[2, 4, 6]]); // should return 0

function oddSquarePatch(matrix){
 let maxPatchSize=Math.min(matrix.length,matrix[0].length);
 for(let patchSize=maxPatchSize;patchSize>0;patchSize--){
    if(detectOddPatch(patchSize,matrix)){
      return patchSize;
    }
  }
  return 0;
}
function detectOddPatch(patchSize,matrix){
   let rowSize=matrix.length;
   let colSize=matrix[0].length;
  for(let i=0;i<=rowSize-patchSize;i++){
     for(let j=0;j<=colSize-patchSize;j++){
     if(checkIfOddPatch(i,j,matrix,patchSize)){
       return true;
     }
   } 
   }
   return false;
  }
function checkIfOddPatch(startRow,startCol,matrix,patchSize){
  if(patchSize===1){
    return !(matrix[startRow][startCol]%2===0);
  }
 for(let currRow=startRow;currRow<patchSize+startRow;currRow++){
     for(let currCol=startCol;currCol<patchSize+startCol;currCol++){
       if(matrix[currRow][currCol]%2===0){
        return false;
       }
     }
   }
   return true;
}
console.log(oddSquarePatch([
  [1,1,1,1,1,1],
  [1,1,1,2,1,1],
  [1,1,2,2,1,1],
  [1,1,2,2,1,1],
  [1,1,1,1,1,1],
  [1,1,1,1,1,1]
]));
console.log(oddSquarePatch([
  [1, 2, 4, 9],
  [4, 5, 5, 7],
  [3, 6, 1, 7]
]));
console.log(oddSquarePatch([[1, 2, 4, 9]]));
console.log(oddSquarePatch([[2,4,6]]));


