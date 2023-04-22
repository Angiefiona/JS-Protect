// // Write a function that takes a string as input and returns the length of the string.
function take(str){
    return str.length
 }
 let myString = "Ivy Aming'a";
 let inString = take (myString);
 console.log(inString);

// Write a function that takes a string as input and returns the string in uppercase letters.

function toUpperCase(str) { 
    return str.toUpperCase();
  }
  let topUpper = "Ivy Aming'a";
let upperCaseString = toUpperCase(topUpper);
console.log(upperCaseString);
  

// Write a function that takes a string as input and returns the string in lowercase letters.
function toLowerCase(str){
  return str.toLowerCase();
}
let toLower = "IVY AMING'A";
let loweCasesString = toLowerCase(toLower);
console.log(loweCasesString);
// Write a function that takes a string as input and returns the first character of the string.
function firstChar(str) {
  return str.charAt(0);
}
console.log(firstChar("Aming'a")); 

// Write a function that takes a string as input and returns the last character of the string.
function lastIndexOf(str){
  return str.charAt(str.length -1);
}
console.log(lastIndexOf("Aming'a"));

// Write a function that takes two strings as input and concatenates them together.
function concatenateStrings(str1, str2) {
  return str1 + str2;
}
let str1 = "Ivy";
let str2 ="Aming'a";
console.log(str1, str2);
// Write a function that takes two strings as input and checks if they are equal.

function equalSrtrings(str1, str2) {
  return str1 === str2;
}
let string1 = 'Ivy';
let string2 = "AMing'a";


console.log(equalSrtrings(string1, string2)); 


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

// Write a function that takes a string as input 
// and returns a new string with the words in reverse order.

function reverseWords(str) {
  let words = str.split(" ");
  let reversedWords = words.reverse();
  let reversedString = reversedWords.join(" ");
  return reversedString;
}
let inputString = "Ivy Aming'a";
let reversedString = reverseWords(inputString);
console.log(reversedString);

// Write a function that takes a string as input 
// and returns a new string with the words sorted alphabetically.

function sortWords(str) {
  let words = str.split(" ");
  let sortedWords = words.sort();
  let sortedString = sortedWords.join(" ");
  return sortedString;
}
const putString = "Ivy Aming'a";
const sortedString = sortWords(putString);
console.log(sortedString); 

// Write a function that takes a string as input 
// and returns a new string with the words sorted by length.

function sortByLength(str) {
  let words = str.split(" ");
  let sortedWords = words.sort((a, b) => a.length - b.length);
  let sortedString = sortedWords.join(" ");
  return sortedString;
}
const spString = "apples,peas,melon";
const lenString = sortByLength(spString);
console.log(lenString); 

// Write a function that takes a string as input
//  and returns a new string with the characters sorted alphabetically.

function sortCharacters(str) {
  let characters = str.split("");
  let sortedCharacters = characters.sort();
  let sortedString = sortedCharacters.join("");
  return sortedString;
}
const wordsString = "Ivy Aming'a";
const charString = sortCharacters(wordsString);
console.log(charString);

// Write a function that takes a string as input 
// and returns the character that appears the most frequently in the string.


// Write a function that takes a string as input
//  and returns the number of times each character appears in the string.


// Write a function that takes a string as input
//  and returns a new string with the first letter of each word in uppercase
//   and the remaining letters in lowercase.
