// the filler() methoda is built-in array method in javaScript that allows you to create a new array containing elements that pass certain, it provides a clean and concise way to filer out elemts from an array on specified criteria

const songs = [
  { name: 'luckeyYou', duration: 4.34 },
  { name: 'Just like you', duration: 4.14 },
  { name: 'The Search', duration: 2.44 },
  { name: 'The Box', duration: 5.23 },
  { name: 'Old Town Road ', duration: 1.23 },
];

console.log(songs.filter((songs) => songs.duration > 3));

const computer = [
  { ram: 4, had: 100 },
  { ram: 8, had: 200 },
  { ram: 16, had: 300 },
  { ram: 32, had: 400 }, 
];

console.log(computer.filter((com) => com.ram < 32));

// exersie

const ages = [32, 33, 16, 40];

function checkAdults(age) {
  return age >= 40;
}

const res = ages.filter(checkAdults);
console.log(res);

const words = [
  'spary',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];


const results = words.filter(word => word.length >4)
console.log(results)