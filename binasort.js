// Given the following array [3,6,12,89,45,1,23] ..find 12 ..If not found return null

let arr1 = [3, 6, 12, 89, 45, 1, 23];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === 12) {
    console.log(arr1[i]); 
    break;
  }
}

console.log(null); 

let arr3 = [3, 6, 12, 89, 45, 1, 23];
for (let i = 0; i < arr3.length; i++){
  if (arr3[i] === 1){
    console.log(arr3[i]);
    break
  }
}

console.log(null);

// Sort the following array -[87,12,46,22,9,31,3]

let arr2 = [87, 12, 46, 22, 9, 31, 3];
arr2.sort((a, b) => a - b);
console.log(arr2); 
