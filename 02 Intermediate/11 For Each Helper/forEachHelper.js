// when we call the forEach helper we pass in anonymous callback function,

// This function gets called on time for every elemet in the array

// whatever is inside the function that logic happes

const colors = ['teal', 'blue', 'red', 'green'];

// for(var i =0; i<color.length; i++){
//     console.log(color[i])
// }

colors.forEach((color) => console.log(color));

const words = ['hello', 'bird', 'table', 'football', 'pipe'];

const capWord = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
});
console.log(words);

//-------------------exercise

let numbers = [1, 2, 3, 4, 5];

let sum = 0;

function adder(number) {
  sum += number;
}
numbers.forEach(adder);
console.log(sum)