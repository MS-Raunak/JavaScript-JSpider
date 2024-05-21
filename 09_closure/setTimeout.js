function x(){
    var i=5;
    setTimeout(function y(){
        console.log(i);      
    },300)

    console.log("I will first get executed");
}
x()

//beacuase i is ties with lexical scope so it will printafter the further code