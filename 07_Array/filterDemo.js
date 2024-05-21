let arr = [5,10,15,20,25,30];
console.log(arr);

//Filter odd number from given array
function odd(ele){
    return ele%2
}
let output = arr.filter(odd)
// console.log(output);

//filter even number from given array
 output = arr.filter((ele) => {
    return ele%2==0
})
// console.log(output);

//filter elements which are divisible by 10
output = arr.filter(ele => ele%10==0)
console.log(output);

