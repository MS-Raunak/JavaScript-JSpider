// Without Using filter() method
let arr = [1,2,3,4,5,5]
let res = [];

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]===arr[j]) arr[i]=' ';
    }
    if(arr[i]!=' ') res.push(arr[i])
}

console.log(res);