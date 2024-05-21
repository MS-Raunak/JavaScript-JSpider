// Remove duplicate Using Filter Method
let arr = [1,1,2,3,4,5,5];
let res = [];
let a = arr.filter((ele) => {
    if(res.indexOf(ele)==-1) res.push(ele)
})
console.log(res);

