main();

function main(){
    console.log(add(1,2));
    console.log(add(1,2,3));
    console.log(add(1,2,4));
}


function add(...num){
    let numLength = num.length;
    let sum = 0;
    for(let i=0; i<numLength; i++)  sum=sum + num[i]; 
} 
// console.log("Sum:", sum); return sum