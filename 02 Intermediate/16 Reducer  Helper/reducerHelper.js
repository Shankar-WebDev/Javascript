// the reduce() method  applies the reducer function to each element of an array, accumulating the results into a single value. it is often used to perform  calculations or aggregations an array elements and simplify the array into single value.

['one', 'two', 'three'];

// const numbers = [1, 2, 3, 4, 5, 6];

// const sum = numbers.reduce((p, c) => {
//   console.log(`Previous: ${p}`);
//   console.log(`Current: ${c}`);
//   return p + c;
//   //0 +1 = 1
//   //1+2 =3
//   //3+3 =6
//   //6+4=10
//   //10+5=15
//   //15+6=21
//   //21
// }, 0);

// console.log(sum);

const people = [
  { name: 'shankar', age: 21 },
  { name: 'brain', age: 29 },
  { name: 'aledx', age: 22 },
];

const OldPeople = people.reduce((p, c) => (c.age > p ? c.age : p), 0);

console.log(OldPeople);

const words = [
  'apple',
  'orange',
  'banana',
  'banana',
  'apple',
  'orange',
  'grape',
];

const wordFrequency = words.reduce((frequencyMap, word) => {
  frequencyMap[word] = frequencyMap[word] || 0 + 1;
  return frequencyMap
}, {});

console.log(wordFrequency);


//------ex



function calculateProduct(arr){
    return arr.reduce ((accumulator, currentValue) => accumulator*currentValue);
}

 
const numbers = [120, 20]


const product = calculateProduct(numbers);
console.log(product) //120


