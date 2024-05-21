let arr = [10,20,30,40,50]
console.log(arr);

//Addition : using function expression
let output = arr.map(function(ele) {
    return ele+5
})
//console.log(output);

//Multipication : using regular function
function mul(ele){
    return 2*ele;
}
output = arr.map(mul)
//console.log(output);

//Division : using arrow function
output = arr.map((n) => {
    return n/2;
})
//console.log(output);

//Substraction : using concise arrow function
output = arr.map(ele => ele-5)
console.log(output);


