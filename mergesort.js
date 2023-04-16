function divideArray(arr){
  if(arr.length <=1){
    return arr;
  }
  let middle = Math.floor(arr.length/2);
  let left = arr.slice(0,middle);
  let right = arr.slice(middle);
  return sortedArray(divideArray(left),divideArray(right));

}
function sortedArray(left,right){
  let emptyArr = []
  while(left.length && right.length){
    if(left[0]<right[0]){
      emptyArr.push(left.shift());
    }
    else{
      emptyArr.push(right.shift());
    }
  }

  return [...emptyArr,...left,...right];
}

let arr = [2,13,32,50,11,5,6];
console.log(divideArray(arr));