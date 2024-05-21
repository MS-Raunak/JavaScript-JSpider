// Filter prime number in array
const arr = [1,2,11,13,14,19,7];

function isPrime(ele){
    for(let i=2; i<=i/2; i++){
        if(ele%2===0) return false;
    }
    return ele > 1
}

let res = arr.filter(isPrime);
console.log(res);