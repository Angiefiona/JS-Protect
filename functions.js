// 1. Write a function that takes in a string and returns it when reversed
// let food = “eating”
function reversedStr(str){
  return str.split('').reverse().join('')
}
let food = "eating"
let reversedFood = reversedStr(food)
console.log(reversedFood);
// 2. Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function array(num,target){
  let left = 0;
  let right = num.length -1;

  while(left < right){
    let mid = Math.floor((left+right)/2)
    if(num[mid]===target){
      return mid
    }
    else if(num[mid]>right){
      left = mid + 1
    }
    else{
      right= mid - 1
    }
    
  }
  return null
}
let num = [2,8,0,23,5,45,76]
Target = 23
console.log( array(num,target))

  
// 3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
function leapYears(startYear, endYear) {
  for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(year + " is a leap year");
    } else {
      console.log(year + " is not a leap year");
    }
  }
}
leapYears(2000, 2023);
// 4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
function fizzBuzz() {
  for (let num = 0; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
}
fizzBuzz();
// 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function multArry(arr) {
  let multipliedArray = [];
  for (let i = 0; i < arr.length; i++) {
    multipliedArray.push(arr[i] * 4);
  }
  return multipliedArray;
}
let numArray = [12, 87, 45, 75, 23, 64, 73];
let multipliedArray = multArry(numArray);
console.log(multipliedArray);
// 6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
function strToNum(arr) {
  let convertedArray = [];
  for (let i = 0; i < arr.length; i++) {
    convertedArray.push(Number(arr[i]));
  }
  return convertedArray;
}
let nums = ["10", "24", "45", "56", "67"];
console.log(strToNum(nums));