// Write a function that takes an array of numbers as input and returns the sum of all the numbers.
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
let numbers = [10, 20, 30, 40, 50];
console.log(sumArray(numbers));

// Write a function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 5.
function filterByLength(strings) {
  let filteredStrings = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > 5) {
      filteredStrings.push(strings[i]);
    }
  }
  return filteredStrings;
}
let strings = ["apple", "banana", "carrot", "dragonfruit", "egg plant"];
console.log(filterByLength(strings)); 

// Write a function that takes two arrays as input and returns a new array with the elements that are common to both arrays.
function findCommonElements(arr1, arr2) {
  let commonElements = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonElements.push(arr1[i]);
    }
  }
  return commonElements;
}
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];
console.log(findCommonElements(array1, array2));

// Write a function that takes an array of objects as input and returns a new array with only the objects that have a property called "name".
function filterByName(objects) {
  let filteredObjects = [];
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].hasOwnProperty("name")) {
      filteredObjects.push(objects[i]);
    }
  }
  return filteredObjects;
}
let objects = [
  { name: "Job", age: 19 },
  {hobbie:"pottery"},
  { name: "Tek", age: 17 },
  { occupation: "teacher" }
];
let filteredObjects = filterByName(objects);
console.log(filteredObjects); 

// Write a function that takes an array of numbers as input and returns a new array with only the even numbers.
function filterByEven(numbers) {
  let filteredNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      filteredNumbers.push(numbers[i]);
    }
  }
  return filteredNumbers;
}
let nums = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredNumbers = filterByEven(nums);
console.log(filteredNumbers);

// built in functions
// Array.findlast()
const arry = [5,12,50,130,44]
const found = arry.findLast((element => element >45))
console.log(found)

// find last prime number in an array
function isPrime(element){
  if(element % 2 === 0 || element < 2){
    return false
  }

for (let factor = 3; factor <= Math.sqrt(element); factor += 2){
  if (element % factor === 0){
    return false;
  }
}
return true;
}

console.log([4,6,8,12].findLast(isPrime));
console.log([4,5,7,8,9,11,12].findLast(isPrime));

// print unique numbers
function getUniqueValue(arr){
  let uniqueValue = [];
  for(i = 0; i < arr.length; i++){
    if(!uniqueValue.includes(arr[i])){
       uniqueValue.push(arr[i]);
    }
  }
  return uniqueValue;
} 
let arr = [1,2,3,3,4,4,5,5,6,7,7,8,8,9,9,];
console.log(getUniqueValue(arr));

// 02
function removeDup(arr){
  return Array.from(new Set(arr))
}
let arr3 = [6,13,12,12,6,7]
console.log(removeDup(arr3));

// 03
function getValues(arr){
  return [...new Set(arr)]
}
let arr4 = [1,2,3,3,4,4,5,6,13,12,12,6,7];
console.log(removeDup(arr4));

// 04
function removeDuplicates(arr){
  let uniqueNums = [];
  for( i = 0; i < arr.length; i++) {
    if(uniqueNums.indexOf(arr[i])=== -1){
      uniqueNums.push(arr[i]);
    }
  }
  return uniqueNums;
}
let arr5 = [7,10,10,24,24,23,12,12,5,6,13,13,18,18,19,123];
console.log(removeDup(arr5));

