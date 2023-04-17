// Write a for loop that logs the elements of an array to the console.
const arr = ["Tek", "Job", "Nyeliep", "Giel"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Write a for loop that logs the sum of all the numbers in an array.
const nums = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log("The sum is:", sum);

// Write a for...of loop that logs each element of an array to the console.
const arr1 = ["mango", "banana", "passion", "grape"];
for (let element of arr1) {
  console.log(element);
}

// write a code to find the number of digits in a number
function digits(num){
  let count = 0;
  while(num !== 0){
    num = Math.floor(num/10);
    count ++;
  }
  return count;
}
console.log(digits(1843));

// find the largest number in an array
let numbers = [34,76,92,45,89,123,65,7658,93,345];
var large = numbers[0];
for (i = 0; i<numbers.length; i++){
  large = numbers[i]>large ? numbers[i]: large;
}
console.log(large);