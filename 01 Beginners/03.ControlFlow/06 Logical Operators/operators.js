// 1 . ---> Logical And (&&)
//--> true if both the operators/boolean values are true, else evaluate to FALSE

const a = false;
const b = false;
const c = 4;

console.log(c > 2 && c < 2);
//false;
// 2. -> Logical OR ( || )

// --> TURE if either of the operands / boolean value is true. evaluate to flase if both are false

console.log(a || b);
console.log(b || b);
console.log(c > 2 || c < 2);

// 3. -> Logical Not (!)
// True if the operands is flase vice-versa

console.log(!b);

///-------------

let passowrd = 'shankar-WebDev';

if (passowrd.length >= 200 && passowrd.includes('Web')) {
  console.log('valid Password');
} else {
  console.log('Invalied Password');
}

//////////-------------------------------

let isTrue = true;

console.log(isTrue);
