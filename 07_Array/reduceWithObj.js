let users = [
    {firstName : "Chhaya", lastName : "Gupta", age : 2},   //users[0]
    {firstName : "MS", lastName : "Shanaya", age : 2},   //users[1]
    {firstName : "Chulbul", lastName : "Pandey", age : 33} //users[2]
]

const output = users.reduce(function(acc,curr){
    if(acc[curr.age]) acc[curr.age] = ++acc[curr.age]
    else acc[curr.age] = 1;
    return acc;
}, {})

console.log(output);