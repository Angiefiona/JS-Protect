function divideArray(arr){
  if(arr.length <=1){
    return arr;
  }
  let middle = Math.floor(arr.length/2);
  let left = arr.slice(0,middle);
  let right = arr.slice(middle);
  console.log({left});
  console.log({right});
  return sortedArray(divideArray(left),divideArray(right));

}
function sortedArray(left,right){
  console.log("hey i am here");
  let emptyArr = []
  console.log("empty2",emptyArr);
  console.log("left2",left);
  console.log("right2",right);
  while(left.length && right.length){
    if(left[0]<right[0]){
      emptyArr.push(left.shift());
    }
    else{
      emptyArr.push(right.shift());
    }
  }
  console.log({emptyArr});
  console.log({check:[...emptyArr,...left,...right]});
  return [...emptyArr,...left,...right];
}

let arr = [3,10,2,50,1,4,6];
console.log(divideArray(arr));