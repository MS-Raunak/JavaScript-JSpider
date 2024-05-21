// Remove duplicate Using Set & Spread Operator
let arr = [5,1,3,2,4,5,3];

let set = new Set(arr) 
//console.log(set); //print object
console.log([...set]); //print in form of array
