

// Given a sorted array of integers and a target element,
//  find the index of the first occurrence of the target element in the array. 
// If the target element does not exist in the array, return -1.

// For example, if the array is [2, 3, 5, 5, 7, 8, 9] and the target element is 5, 
// the function should return 2.
function findArry(numArr, target){
  let left = 0;
  let right = numArr.length -1

  while(left <= right){
    let middle = Math.floor((left+right)/2)
    if(numArr[middle]===target){
    return middle
    
  }
  else if (numArr[middle]>target){
    right = middle -1

  }
  else{
    left = middle +1
  }
}
return -1
}

let numArr= [2,3,5,7,9,12,13,15]
target = 9
console.log(findArry(numArr,target))
//Given a sorted array of integers, write a function to return the index of the last occurrence of a given target element.
// If the target element is not found, return 
function findIndex(num1,target){
  let left = 0
  let right = num1.length -1
  let index = -1

  while(left <= right){
    let mid = Math.floor((left+right)/2)
    if(num1[mid]===target){
      return mid
    }
    else if(num1[mid]<target){
      left = mid + 1
    }
    else{
      right = mid - 1
    }

  }
  return -1
}
let num1= [2,3,5,7,9,12,13,15]
target = 13
console.log(findIndex(num1,target))