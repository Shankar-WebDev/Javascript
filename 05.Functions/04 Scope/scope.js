// scope in Javascript refers to the current context of code, which determines the aceessibility of variables to Javascript

// There are two type of scopes in Javasscript

// Global Scope variables are those declared outside of a block

//Local scope variables are those declared inside of a block

let textMessage = 'hi'; // Global vaiable

function showMessage() {
  let textMessage = 'hello';
  console.log(textMessage);
}

console.log(textMessage)

showMessage();

i=10

for (let i =0; i<5; i++){
   console.log(i)
}
console.log(i)