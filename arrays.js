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

