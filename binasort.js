// Given the following array [3,6,12,89,45,1,23] ..find 12 ..If not found return null

// let arr1 = [3, 6, 12, 89, 45, 1, 23];

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] === 12) {
//     console.log(arr1[i]); 
//     break;
//   }
// }

// console.log(null); 

// let arr3 = [3, 6, 12, 89, 45, 1, 23];
// for (let i = 0; i < arr3.length; i++){
//   if (arr3[i] === 1){
//     console.log(arr3[i]);
//     break
//   }
// }

// console.log(null);

// Sort the following array -[87,12,46,22,9,31,3]

// let arr2 = [87, 12, 46, 22, 9, 31, 3];
// arr2.sort((a, b) => a - b);
// console.log(arr2); 



// Implement a function that takes a sorted array of objects with
//  a numeric "value" property and a target value as input, 
//  and returns the object with the closest "value" property 
//  to the target value using binary search.


let arr1= [
  { value: 1 },
  { value: 3 },
  { value: 5 },
  { value: 7 },
  { value: 9 },
];

let target = 6;

let closestObject = findClosest(arr1, target);

console.log(closestObject); // { value: 5 }



function findClosest(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let closest = null;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = arr[mid].value;
    if (midVal === target) {
      return arr[mid];
    } else if (midVal > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    if (!closest || Math.abs(midVal - target) < Math.abs(closest.value - target)) {
      closest = arr[mid];
    }
  }

  return closest;
}


