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
