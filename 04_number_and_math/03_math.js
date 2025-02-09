let bal = 42.2;

let ceilVal = Math.ceil(bal); // return max value
let floorVal = Math.floor(bal); // return min value
let roundVal = Math.round(bal); // return max value if decimal value(0.1-0.5) and minVal(0.6-0.9)

console.log(ceilVal); // 43
console.log(floorVal); // 42
console.log(roundVal); // 42

bal = 42.6;
let roundVal2 = Math.round(bal);

console.log(roundVal2); // 43

let c = -400;
console.log(Math.abs(c));
400;

console.log(Math.min(4, 5, 8, 2, 45)); // 2
console.log(Math.max(4, 5, 8, 2, 45)); // 45

let randomVal = Math.random(); // return random val between 0 to 1
console.log(randomVal);
console.log(Math.floor(randomVal * 10));
