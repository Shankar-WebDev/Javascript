// Symbols

const mySymbol = Symbol('mY COUSTOM');
console.log(mySymbol);

const mySymbol1 = Symbol('name');
const mySymbol2 = Symbol('name');

console.log(mySymbol1== mySymbol2)

const obj = {
    mySymbol1
}

obj[mySymbol1] = "value 1"
obj[mySymbol2] = "value 2"
console.log(obj)

const shankar = {};

shankar.age = 19;
shankar['gender'] = 'male';
shankar['symbol1'] = 'john';
shankar['symbol2'] = 'alex';
console.log(shankar)



//-----------------ex


let sum = Symbol();
console.log(typeof sum)


let obj  ={
    firstName :' shankar',
    lastName : "WebDev"
}


// obj[Symbol('foo')] = 'some value for foo';
console.log(obj)

// for(let i in obj){
//     console.log(i)
// }