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



function merge(num){
  if(num.length <= 1){
    return num;
  }
  let middle = Math.floor(num.length/2);
  let start = num.slice(0, middle);
  let end = num.slice(middle);
  return sort(merge(start),merge(end))
}

function sort(start, end){
  let emptyNum = []
  while(start.length && end.length){
    if(start[0] < end[0]){
      emptyNum.push(start.shift());
    }
    else{
      emptyNum.push(end.shift())
    }
  }
  return [...emptyNum,...start,...end]

}

let num =  [34,56,12,8,9,23,41,4,36,17]
console.log(merge(num));