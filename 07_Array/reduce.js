
        let num =[1,2,3]
       let val = num.reduce((acc,curVal) => {
            return acc+curVal   // by default accumulator=0;
        })
        console.log(val)  // 0 + 1 + 2 + 3 = 6

        let val1 = num.reduce((acc,curVal) => {
            return acc+curVal
        }, 3)                   // accumulater value change from 0 to 3
        console.log(val1); // 3 + 1 + 2 + 3 =9

        let obj = [
            {name: "chhaya", age:2, Gender:"F"},
            {name: "Kavya", age:32, Gender: "F"},
            {name: "Ravi", age:25, Gender: "M",},
            {name:"Kali Mai", age:36, Gender: "F"}]
        
        
    obj.forEach((ele) =>{
        console.log(ele);
        
    })
 





/*
Using JavaScript Filter() to Find All Prime Numbers
The following is code that filters all the prime numbers from an array and creates a new array with only the prime numbers. The steps to use the filter() are:

Define the array of numbers.
Call the filter() method on array and return the new array that contains only the prime numbers.
Console the new array to check the output.
Here is an example code snippet that demonstrates the example.

JavaScript filter() method used to return an array for prime numbers.
JavaScript filter() method used to return an array for prime numbers. | Image: Akshay Kumar
In the above code, we defined an array of numbers array. We used the filter() method on arrayand passed a function isPrime that checks if each element is prime. If the number is prime, the function returns true, and the element is included in a new array. If it doesn’t match, the function returns false, and the object is excluded from the new array. The search criteria surfaced a new array with the numbers [2, 3, 5, 7, 11, 13].
*/