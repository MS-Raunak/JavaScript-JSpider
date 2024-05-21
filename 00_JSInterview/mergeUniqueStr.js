let arr1 = ["red", "yellow", "blue"];
let arr2 = ["green", "white", "yellow"];
let arr3 = ["violet", "red", "yellow"];

let merge = [...arr1,...arr2,...arr3] //spread array
let mergeUnique = new Set(merge) //it will return object => Set does not take duplicate
// let's convert object to array
console.log([...mergeUnique]);
