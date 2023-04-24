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
target = 23
console.log( array(num , target))

  
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

// You are managing a hardware store and need to keep track of the inventory of various tools and equipment.
//  You will use arrays to store the data and various functions to manipulate and analyze the data.
// a. Create an array containing the names of all tools and equipment in the inventory.
// b. Create a separate array with the corresponding prices of each tool and equipment.
// c. Write a function to add a new tool or equipment to the inventory, updating both arrays.
// d. Write a function to update the price of an existing tool or equipment.
// e. Write a function to calculate the total value of the inventory.
// f. Write a function to find the tool or equipment with the highest price.

let inventory = ["hammer","scissors","saw","nails","pliers","tape","locks"]
let prices = [250,300,500,20,200,150,50]

let tools = {}
inventory.forEach((item,index) => {
  tools[item] = prices[index];
})
console.log(tools);

function addtool(tool,price){
  if(inventory.length){
    inventory.push(tool)
    prices.push(price)
    tools[tool] = price
  }
  else{
    console.log("${tool} is not added to inventory");
  }

}
addtool("hinges",100)
console.log(tools);

function updatetool(tool, price){
  let i = inventory.indexOf(tool)
  if(i !== -1){
    prices[i] = price;
    tools[tool] = price;
  }
  else{
    console.log("item not updated");
  }
}
updatetool("nails", 30);
console.log(tools);

function totalprice() {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
  }
  return sum;
}
console.log(totalprice());


function highestPriceTool() {
    let highPrice = 0 ;
    let highestPrice = -Infinity;
  
    for (let i = 0; i < inventory.length; i++) {
      if (prices[i] > highestPrice) {
        highestPrice = prices[i];
        highPrice = inventory[i];
      }
    }
  return highPrice;
  }
  
  console.log(highestPriceTool());
  


// You are managing a pet store and need to keep track of the inventory of various pet supplies. 
// You will use arrays to store the data and various functions to manipulate and analyze the data.
// a. Create an array containing the names of all pet supplies in the inventory.
// b. Create a separate array with the corresponding stock quantities of each pet supply.
// c. Write a function to add a new pet supply to the inventory, updating both arrays.
// d. Write a function to update the stock quantity of an existing pet supply.
// e. Write a function to calculate the total number of pet supplies in the inventory.
// f. Write a function to find the pet supply with the highest stock quantity.
let petSupplies = ["food", "bed", "toys", "treats", "collar"];
let stock = [100, 50, 150, 55, 45];

let petInventory = {};
petSupplies.forEach((supply, index) => {
  petInventory[supply] = stock[index];
});
console.log(petInventory);

function addsupply(supply, quantity) {
  petSupplies.push(supply);
  stock.push(quantity);
  petInventory[supply] = quantity;
}
addsupply("tag", 20);
console.log(petInventory);

function updateSupplies(supply, quantity) {
  let i = petSupplies.indexOf(supply);

  if (i !== -1) {
    stock[i] = quantity;
    petInventory[supply] = quantity;
  } else {
    console.log("stock not updated");
  }
}
updateSupplies("tag", 35);
console.log(petInventory);

function totalSupply() {
  let sum = 0;
  for (const stockQuantity of stock) {
    sum += stockQuantity;
  }
  console.log(sum);
}
totalSupply();

function highestPetStock() {
  let highStock = "";
  let highestStock = 0;

  for (let i = 0; i < petSupplies.length; i++) {
    if (stock[i] > highestStock) {
      highestStock = stock[i];
      highStock = petSupplies[i];
    }
  }
  return highStock;
}
console.log(highestPetStock());

// You are managing a music store and need to keep track of the inventory of various musical instruments.
//  You will use arrays to store the data and various functions to manipulate and analyze the data.
// a. Create an array containing the names of all musical instruments in the inventory.
// b. Create a separate array with the corresponding prices of each musical instrument.
// c. Write a function to add a new musical instrument to the inventory, updating both arrays.
// d. Write a function to update the price of an existing musical instrument.
// e. Write a function to calculate the total value of the inventory.
// f. Write a function to find the musical instrument with the lowest price.

let instruments = ["violin", "cello", "guitar", "flute", "drum", "piano", "saxophone", "clarinet", "trumpet"];
let instrumentPrices = [1500, 3500, 2500, 1500, 5400, 7000, 4500, 3500, 5600];

let musicalInstruments = [];
instruments.forEach((instrument, index) => {
  musicalInstruments.push({name: instrument, price: instrumentPrices[index]});
});

console.log(musicalInstruments);

function addInstrument(instrument, instrumentPrice) {
  if (instruments.length < 10) {
    instruments.push(instrument);
    instrumentPrices.push(instrumentPrice);
    musicalInstruments.push({name: instrument, price: instrumentPrice});
    console.log("Instrument has been added.");
  } else {
    console.log("Music instrument storage is full.");
  }
}

addInstrument("trombone", 4500);
console.log(musicalInstruments);

function updateInstrument() {
  for (let instrument of musicalInstruments) {
    if (instrument.name === "piano") {
      instrument.price = 8000;
    }
  }
}

updateInstrument();
console.log(musicalInstruments);

function calculateInventoryTotal() {
  const total = musicalInstruments.reduce((accumulator, instrument) => {
    return accumulator + instrument.price;
  }, 0);

  return total;
}

console.log(calculateInventoryTotal());

function findInstrumentWithLowestPrice() {
  const lowestPriceInstrument = musicalInstruments.reduce((lowestPriceInstrument, instrument) => {
    if (instrument.price < lowestPriceInstrument.price) {
      return instrument;
    } else {
      return lowestPriceInstrument;
    }
  });

  return lowestPriceInstrument;
}

console.log(findInstrumentWithLowestPrice());




