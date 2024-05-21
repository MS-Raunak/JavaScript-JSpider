let s = new String("Chhaya"); // here string s is an object


console.log(s.toLowerCase());  // in lowecase
console.log(s.toUpperCase());  // in uppercase
console.log(s.indexOf('y'));  // return index from beginning
console.log(s.lastIndexOf('a'));  // return index from last

console.log(s.length);

console.log(s.slice(0,4));  //print string from 0th index to 3rd index as end index is excluded
console.log(s.slice(-6,2));  //Negative parameter
console.log(s.substring(0,4)) // Similar to slice but can't take negative value as an argument 


console.log(s.charAt(1)); //print char present on given index value

console.log(s.includes("Chha")); //If given input present then return true otherwise false
console.log(s.includes("shaya")); // return false
console.log(s.endsWith("aya")); //return true if string is found from last

let url = "www.userid?20.com"
console.log(url.replace('20', '-')); //replace 20 with underscore

let word = "Chhaya is Shanaya and she is a baby girl";
console.log(word.split(" ")); // return all the words from given string in the form of array


let name = "Shanaya"
console.log(name.concat(" Gupta")); //return String after appending given string

let remSpace = "  hello "
console.log(remSpace.trim());

