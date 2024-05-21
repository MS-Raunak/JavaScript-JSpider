let users = [
    {firstName : "Chhaya", lastName : "Gupta", age : 2},   //users[0]
    {firstName : "MS", lastName : "Shanaya", age : 2.5},   //users[1]
    {firstName : "Chulbul", lastName : "Pandey", age : 33} //users[2]
]

//Regular way to find firstName along with lastName
//for(let i=0; i<users.length; i++) console.log(users[i].firstName + " " + users[i].lastName);


//Getting array of names : using regular function
function names(n) {
    return n.firstName + " " + n.lastName
}

let output = users.map(names)
//console.log(output);

//Getting array of names: using arrow function
let fullName = users.map((name) => name.firstName + " " + name.lastName )
console.log(fullName);