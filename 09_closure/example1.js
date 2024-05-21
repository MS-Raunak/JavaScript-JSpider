function x(){
    var a=9;
    function y(){
        console.log(a);
    }
    return y;
}

var z = x();
//console.log(z); print y() function
z()

/**
 * function along with lexical scope bundelled together is called closure.
 */

