// set is built-in data structure introduces in(es6) that represts a collections of Unique vlaues, Unlike arrays, set allows you to store only Unique values, which means duplicate values are automatically removed. Each value can occur only once within a Set

// Set objects are usefull when need the store a list of unique elemts and quickly check for the existance of seecific value

const mySet = new Set();

mySet.add('apple');
mySet.add('orange');
mySet.add('banana');
mySet.add('lime');
mySet.add('apple');

console.log(mySet.has('WebDEv'));
mySet.delete('banana');
console.log(mySet);

for (let item of mySet) {
  console.log(item);
}

//-----
const letter = new Set();

letter.add('a', 'a');
letter.add('b', 'b');
letter.add('c', 'c');

// console.log(letter)

for (let value of letter) {
  console.log(value);
}
