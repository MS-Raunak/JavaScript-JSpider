function x(){
    var n=10;
    return function y(){
        console.log(n);
    }
}

var z = x();
z();