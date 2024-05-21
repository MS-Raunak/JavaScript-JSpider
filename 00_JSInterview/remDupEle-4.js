let arr = [5,1,3,5,2,1,6,4,3];

let res = [];

for(let i=0; i<arr.length; i++) if(res.indexOf(arr[i])===-1) res.push(arr[i]);
console.log(res);
    
