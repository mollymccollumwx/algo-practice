// PROBLEM: Create a function to find the index of the random value 

var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

var random_value = stuff[ Math.floor( Math.random() * 14 ) ];

// SOLUTION:

function findRandom () {

    for(let i = 0; i < stuff.length; i++) {
        if(stuff[i] === random_value){
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
 return str.split('').reverse().join('');
}

// EXPLANATION: split turns it into an array, reverse reverses the content of the array, join turns it back into a string

// SOLUTION: 2

function reverse(str) {
 let reversed = '';

 for (let character of str) {
     reversed = character + reversed;
 }

 return reversed;

}

// SOLUTION: 3 

function reverse(str) {
    return str.split('').reduce((reversed, character)=> {
       return character + reversed;
    }, '');
}

// EXPLANATION: .reduce() takes all the content of an array and reduces it to one singular value

// ====================================================================== //

// PROBLEM: Palindrome. Find out if a string is a palindrome or not. 

function palindrome(str) {

    
}
