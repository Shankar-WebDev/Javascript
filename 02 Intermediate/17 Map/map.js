// Map is built-in-data structure introduced in (ES6) that allows you to store key- vlue pairs whre both the keys and values can be data type. it is similator to an object, but with a few key difference

// -> keys can be of any data type: unlike objects, where keys are limited to strings and symbols, Map allows you to use data type as keys includes number boolens objects, where keys are limited to strings and symbols, Map allows you to use any data type as s keys, including numbers, boolean ,objects and even other Map instances.

// -> Maintance insertion order: Map preserves the order of keys-value pairs as they were inserted, while objects keys  may not be gruduated to be in spedeifc order.

// -> Iteration: Maps provides built-in methods for easy iteration over its elements

const map = new Map();

const keyOne = 'shankar';
const keyTwo = {};
const keyThree = function () {};

map.set(keyOne, 'value of key one');
map.set(keyTwo, 'value of key Two');
map.set(keyThree, 'value of key Three');

// console.log(map.keys());
// console.log(map.values());
// // console.log(map.delete(keyThree))
// console.log(map.size);

// console.log(map);

// for (let [key, value] of map) {
//   console.log(`${key} -- ${value}`);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

for (let value of map.values()) {
  console.log(value);
}

//////--------------ex

const map1 = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log(map1.get('a'));
