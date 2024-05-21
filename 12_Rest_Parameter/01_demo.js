/**
 * Rest operator allows a function to accepts any   number of arguments a an array
 */

function main(...num) {
  return num;
}
let numbers = main(1, 2, 4);
console.log(numbers);
