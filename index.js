// PROBLEM: Create a function to find the index of the random value

var stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514];

var random_value = stuff[Math.floor(Math.random() * 14)];

// SOLUTION:

function findRandom() {
  for (let i = 0; i < stuff.length; i++) {
    if (stuff[i] === random_value) {
      console.log(i);
    }
  }
}

findRandom();

// EXPLANATION: Linear Search

// ========================================================================= //

// PROBLEM: REVERSE A STRING. Ex:  reverse("apple") === "elppa"

// SOLUTION: 1
function reverse(str) {
  return str.split("").reverse().join("");
}

// EXPLANATION: split turns it into an array, reverse reverses the content of the array, join turns it back into a string

// SOLUTION: 2

function reverse(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// SOLUTION: 3

function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

// EXPLANATION: .reduce() takes all the content of an array and reduces it to one singular value

// ====================================================================== //

// PROBLEM: Palindrome. Find out if a string is a palindrome or not.

// SOLUTION # 1:
function palindrome(str) {
  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}
// manually reversed the string and compare it to the original string

// SOLUTION #2:

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// .every() allows you to check every element in an array and make it pass a test
// not an ideal solution because you are doing my checks that

// ================================================================== //

// PROBLEM: Reversing an Integer. Ex: reverseInt(15) === 51

// SOLUTION:

function reverseInt(n) {
   
  
  const reversed = n.toString().split("").reverse().join("");


  return parseInt(reversed) * Math.sign(n);
}

// toString() turns an integer to a string, parseInt() turns string to integer
// Math.sign() indicates whether is positive (1) or negative (-1)

// ====================================================================//

// PROBLEM: MAX CHAR. Ex: maxChar("abccccccccd") === "c". Return the character used most inside the string

// SOLUTION 1: 

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = ''; 

    for (let char of str) {
        if (charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
     console.log(charMap);

     for (let char in  charMap){
         if (charMap[char] > max){
             max = charMap[char];
             maxChar = char;
         }
     }
 return maxChar;
}

// EXPLANATION: Convert string into an object

// other variations: 
// 1. What is the most common character in a string?
// 2. Does string A hae the same cahracters as String B (anagram)?
// 3. Does the given string have any repeated characters?

// ========================================================================= //

// PROBLEM: Fizz Buzz. Ex: fizzBuzz(5); 1 2 fizz 4 buzz. Print out fizz for multiples of 3, buzz for multiples of 5, fizzbuzz for multiples of both


// SOLUTION:

function fizzBuzz(n) {
 for (let i = 1; i <= n; i++) {
     // Is the number a multiple of 3 and 5? Can also be a multiple of 15 
     if (i%3 === 0 && i%5 === 0 ){
         console.log("fizzbuzz");
    
     } else if (i%3 === 0) {
        // Is the number a multiple of 3?
        console.log("fizz");
     } else if (i%5 === 0){
        //  Is the number a multiple of 5?
         console.log("buzz")
     } else {
         console.log(i);
     }
 }
}

// modulo operator: determine a reminder 9%3 = 0

// ======================================================================= //

// PROBLEM: Array Chunking. Given an array and chunk size, divide the array into many subarrays where each subarray is of length size

// Ex: chunk([1,2,3,4], 2) ----> [[1,2], [3,4]]
// Ex: chunk([1,2,3,4,5], 4) ----> [[1,2,3,4], [5]]

// SOLUTION:

function chunk(array, size) {
const chunked = [];

for (let element of array) {
    const last = chunked[chunked.length -1];

    if (!last || last.length === size) {
        chunked.push([element]);

    } else {
        last.push(element);
    }

    return chunked; 
}

}

// EXPLANATION: 

// Create an array to hold chunks called "chunked"
// For each element in the "unchunked" array
// retrieve the last element in the 'chunked'
// if the last element does not exist, or if it's length is equal to chunk size -- push a new chunk into 'chunked' with the current element
// Else add the current element into the chunk

// SOLUTION # 2

function chunk(array, size){

    const chunked = [];
    let index = 0; 

    while (index < array.length) {
        chunked.push(array.slice(index, index + size))
        index += size;
    }

    return chunked;


}

// EXPLANATION: 

// .slice(0, 3) -- starting at element 0, give me a copy of everything from 0 up to 3 but not including 3
// create an empty chunked array
// create index and start at 0
// while index is less than the array.length
    // push a slice of length 'size' from array into 'chunked'
    // add 'size' to index
