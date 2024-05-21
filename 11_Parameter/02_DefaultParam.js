function add(n1 = 1, n2) {
  let result = n1 + n2;
  return result;
}
let res = add();
console.log(res); // undefined (number+undefined = NaN)

function add1(n1 = 1, n2 = 2) {
  let result = n1 + n2;
  console.log(result);
}
add1(2);
