


let row = 4;
let col = 5;

const getTable = (row, col) => {
    let arr= [];
    let sum = 0;
    for (let i=0; i < row; i++) {
    arr.push([]);

    for (let j=0; j< col; j++) {
      arr[i][j] = sum++;
        if(i != 0){
        arr[i].sort((a,b)=>b-a)
        }
      }
    }
  return arr
}
console.log(getTable(col, row));