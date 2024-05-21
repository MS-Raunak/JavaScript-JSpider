function x(){
    var a=9;
    function y(){
        console.log(a);
    }
    a=900;
    return y;
}
var z = x();
z() //900


//varibale a associated with reference but not value