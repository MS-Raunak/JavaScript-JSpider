function main(...n) {
  let sum = 0;
  let i;
  for (i = 0; i < n.length; i++);
  {
    sum += n;
    console.log(n[i]);
  }
  return sum;
}
console.log(main(1, 2, 3));
