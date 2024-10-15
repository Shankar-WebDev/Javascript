//fucntion is block of code that performs a sepecific task

//Function makes the code reUsabel. You can declare it once and use it multiple times.

//Function make the Program easiar as each small task is  divided into a function

// Function increase readability

// Dry - Don't Repet Yourself

//functions name (parametersIfAny){......}

//function declaratin
function greet() {
  console.log('hello from a function');
}

//call , run , excute the  function

greet();
greet();

function sayHello(name) {
  console.log(`hello ${name}`);
}

sayHello('shankar');

//return --> fucntion

function add(x, y) {
  // console.log()
  return x + y;
}

const res1 = add(10, 20);
const res2 = add(100, 200);
const res3 = add(1000, 2000);

console.log(res1);
console.log(res2);
console.log(res3);




//------------------------------------------


//excerice

function myFunction(x,y){
        return x*y
}
console.log(myFunction(10, 20))

