//Write a function that takes an array of numbers as input 
//and returns the sum of all the even numbers in the array.

function evenSumNumbers(numbers){
    let evenSum = 0;
    for(let i=0;i<evenSumNumbers.length;i++){
        if(numbers[i] % 2==0){
            evenSum += numbers[i];
        }
        
    }
    return evenSum
}


let numbers = [1, 2, 3, 4, 5, 6];
let evenSum =evenSumNumbers(numbers)
console.log(evenSum);

// let numStr = [1, 2, 3, 4, 5





// const sumEvens = (numStr) => {
//   let sum = 0;
//   for (let i = 0; i < numStr.length; i++) {
//     if (numStr[i] % 2 === 0) {
//     sum = sum + numStr[i];
//     }
//   }
//   return sum;
// }
 
// console.log(sumEvens(numStr));