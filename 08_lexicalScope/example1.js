/**
 * Accessing the property from outside function inside the nested function  is called lexical scoping.
 */

function x(){
    let a=10;
    function y(){
        console.log(a);
    }
    y()
}

x()

