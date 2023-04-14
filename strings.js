// Write a function that takes a string as input and returns the length of the string in javascript

function findlength(stri){
  return stri.length
}
 let myname = "Nyeliep"
 let findLengthName = findlength(myname)
 console.log(findLengthName)

//  Write a function that takes a string as input and returns the string in uppercase letters.
 function striUppercase (stri){
  return stri.toUpperCase()
 }
  let myName = "Giel"
  let caps = striUppercase(myName)
  console.log(caps); 

  // Write a function that takes a string as input and returns the first character of the string.

  function firstCharacter(text){
    return text[0]
  }

  let mytext = "I love the beach"
  let findfirst = firstCharacter(mytext)
  console.log(findfirst)

  // Write a function that takes two strings as input and concatenates them together.
  function striconcat(str1,str2){
   return str1 + str2
  }

  let myword = "salad"
  let myword3 = "is not tasty"
  let wordconcat = striconcat(myword,myword3)
  console.log(wordconcat);

  // Write a function that takes two strings as input and checks if they are equal.
  function compareStri(txt1,txt2){
    return txt1===txt2
  }
   
  let string1 = "my name is Nyeliep"
  let string2 = "MY NAME IS NYELIEP"
  let compare = compareStri(string1,string2)
  console.log(compare);
 
  // Write a function that takes two strings as input and returns the index of the first occurrence of the second string in the first string.
  // If the second string does not occur in the first string, the function should return -1.
  function twoStri(str1,str2){
    if(str1.includes(str2)){
      return str1.indexOf(str2);
    }
    else{
      return -1;
    }
  }

   let str = "Raph the wrecker"
   let str1 = "the wrecker"
   let findSub = twoStri(str,str1)
   console.log(findSub);