// Defult functrion parameter, introduced in ECMAScript 6(es6), allow when a function is called, and an argumen is not provided for a parameter, when a fucntion is called and argument is not provided for a parameter, the defult value will be used insted. This feature makes it easiar to handle caseds where argumets mights be missing or undefined

function countTo5(count) {
  if (count === true) {
    for (let i = 1; i < 5; i++) {
      console.log(`Count: ${i}`);
    }
  }
}

countTo5(true);

function ratings(rate) {
  if (rate === 5) {
    console.log(`High Ratings :)`);
  } else if (rate === 0) {
    console.log(`Low ratings :)`);
  } else {
    console.log(`Ratings`);
  }
}

ratings(0);



//----------------------- exercise -----------------------------


function multiply (a,b=1){
    return a*b

}

console.log(multiply(5))