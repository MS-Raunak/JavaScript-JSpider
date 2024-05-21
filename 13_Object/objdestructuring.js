let names = {
    name : "Chhaya",
    age : 2,
    adress : "Banglore"
}

// console.log(names.adress);

//let's destructure
const {name, age, adress : ad} = names;
console.log(name);
console.log(age);
console.log(ad);

/**
 * If we destrucctured to an object, then while accessing we no need to call like objRefVar. property
 */