// Default Parameter

/**
*Introduced in JavaScript ES-6 Version 
       - Default parameter is a parameter inside function prototype.
       - Actual parameter with default value is known as default parameter
 */

let a = 10;
let b = 20;

function add(n1 = 1, n2 = 2) {
  let result = n1 + n2;
  return result;
}
let res = add();
console.log(res);
