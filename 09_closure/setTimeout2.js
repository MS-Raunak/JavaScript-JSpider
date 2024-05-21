function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i); //6 five times because single copy of i varible will be created and var has function scope
    }, i * 1000);
  }

  console.log("First executed!");
}

//x()

/**
 * OUTPUT
 * ------
 * First executed!
 * 6 6 6 6 6
 *
 * expl: var has functional scope so and varibale i ties with refrence of i varibale so it will print 6 five times instead to printing 1 to 5
 * If we use let instead of var then it will print 1-5 bkg let has block level scope, See the next example
 */

function letX() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i); //1 to 5
    }, i * 1000);
  }
  console.log("First executed!");
}
//letX()

//we can print 1 to 5 using var through function
function varX() {
  for (var i = 1; i <= 5; i++) {
    function y(i) {
      setTimeout(() => {
        console.log(i); //1 to 5 because each time new copy of i varibale is created
      }, i * 1000);
    }
    y(i);
  }

  console.log("First executed!");
}
varX();
