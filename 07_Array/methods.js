
    let myArray = [0];

    // Push method: used to insert value at the ending of an array
    myArray.push(10)
    myArray.push(20)
    myArray.push(30)
    myArray.push(40)
    myArray.push(50)

    console.log(myArray);

    // unshift method: used to insert value at the beginining of an array
    myArray.unshift(60)
    myArray.unshift(70)
    myArray.unshift(80)

    console.log(myArray);


    // shift method: used to delete value at the beginining of an array

    console.log(myArray.shift()); // 80 deleted

    // pop method: used to delete value at the ending of an array

    console.log(myArray.pop()); // 50 deleted


    // include method: return boolean value

    console.log(myArray.includes(10)); //true
    console.log(myArray.includes(109)); //false

    // indexOf method: return indexNum if element is available in given array otherwise return -1

    console.log(myArray.indexOf(109)); // -1
    console.log(myArray.indexOf(10)); // 3


    // join method: convert array to string
    console.log(myArray.join())
    console.log(typeof myArray.join())  // string

    // slice() method: 
    //case1: call by value
    let num = [1, 2, 3, 4, 5]
    let res = num.slice(1);
    console.log(res); // [1,2,3,4,5]
    res[1] = 100
    console.log(res); //  [1,100,3,4,5]
    console.log(num); // [1,2,3,4,5]  : original array
    console.log(num == res); //false

    //case2: call by reference
    let number = [1, 2, 3, 4, 5]
    let number1 = number;
    console.log(number1); // [1,2,3,4,5]
    number1[1] = 100;
    console.log(number1); // [1,100,3,4,5]
    console.log(number); // [1,2,3,4,5]
    console.log(number == number1) // true bkg comparing reference address

    // case3: With 1 argument
    let nums = [1, 2, 3, 4, 5]
    let ress = nums.slice(1) // start copying item from index value 1 from beginning
    console.log(ress); // [2,3,4,5]
    console.log(nums);
    console.log(nums == ress); // false

    // case 4: with 2 arguments
    let n = [10, 20, 30, 40, 50]
    let r = n.slice(1, 3)
    console.log(r);  // [20,30]
    let r1 = n.slice(1, 4)// start copying item from index value 1 from beginnig and index val 3 from ending
    console.log(r1); // [20, 30, 40]

    // splice method()

    //case:1 With 0 Argument
    let arr = [1, 2, 3, 4, 5]
    let resArr = arr.splice()
    console.log(resArr);  // []
    console.log(arr); // [1, 2, 3, 4, 5]

    //case:2 With 1 Argument
    let arr1 = [10, 20, 30, 40, 50]
    let resArr1 = arr1.splice(2);  // delete items till index value 2.
    console.log(resArr1); // [30,40,50]
    console.log(arr1);  //  [10,20] => return deleted item as array

    // case-3 : With 2 argument
    let arr2 = [100, 90, 80, 70, 60]
    let resArr2 = arr2.splice(2, 1) // delete item till 2 and print print total next item after delted items
    console.log(resArr2); // [80]
    console.log(arr2); // [100, 90, 70, 60] => delted items

    // case-3 : with 3 arguments
    // let arr3 = [10,20,30,40,50]
    // let resArr3 = arr3.splice(1,2,3,10,5)
    // console.log(resArr3);
    let numb = [1, 2, 3, 4, 5];
    let rest = numb.splice(2, 1, 50, 60, 70);
    console.log(rest); //[3]
    console.log(numb); //[1, 2, 50, 60, 70, 4, 5]

    let numb1 = [1, 2, 3, 4, 5];
    let rest1 = numb1.splice(2, 0, 50, 60, 70);
    console.log(rest1); //[]
    console.log(numb1); //[1, 2, 50, 60, 70, 3, 4, 5]
