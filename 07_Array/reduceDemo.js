let arr = [5,10,15,20];

//lets do sum of all the elements of given array -> 1st way
function getSum(){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    return sum;
}
console.log(getSum());

//Now lets do same thing using reduce method -> 2nd way
let sum = arr.reduce((accumulator, currentVal) => {
    return accumulator += currentVal
}, 0)
console.log(sum);

//Now lets do same thing using reduce method thru function expression -> 3rd way
sum = arr.reduce(function sum(acc, currentVal){
    return acc+=currentVal
}, 0)
console.log(sum);

//4th way
let sumOfAllEle = arr.reduce((sum, currentVal) => sum+=currentVal, 0)
console.log(sumOfAllEle);