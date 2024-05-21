let users = [
    {firstName : "Chhaya", lastName : "Gupta", age : 2},   //users[0]
    {firstName : "MS", lastName : "Shanaya", age : 2.5},   //users[1]
    {firstName : "Chulbul", lastName : "Pandey", age : 33} //users[2]
]


//Print first name of a user whose age is less than 30
let fName = users.filter((x) => {
    return x.age < 30
}).map((x) => x.firstName + " " + x.lastName)

console.log(fName);
 

