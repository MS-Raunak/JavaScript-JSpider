let arr = [1,2,3,4,5];

//Approach For printing elements in a single-line
let str="";
arr.forEach((ele) => {
   str = str+  ele + " "
    
})
console.log(str);

//Approach for printing elements along with index number
arr.forEach((ele,index) => {
   console.log(ele, index);
 })


 //Approach for printing elements along with index and corresponding array
 arr.forEach((ele,index,arr) => {
    console.log(ele, index, arr); 
 })
