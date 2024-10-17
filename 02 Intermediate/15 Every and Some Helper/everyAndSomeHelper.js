const people = ['a', 'b', 'c'];

const res1 = people.every((people) => people.length === 4);
const res2 = people.some((people) => people.length < 3);
console.log(res2);

const songs = [
  { name: 'luckeyYou', duration: 4.34 },
  { name: 'Just like you', duration: 4.14 },
  { name: 'The Search', duration: 2.44 },
  { name: 'The Box', duration: 5.23 },
  { name: 'Old Town Road ', duration: 1.23 },
];

const everyRes = songs.every((song) => song.duration > 3);
console.log(everyRes);

const someRes = songs.some((song) => song.duration > 3);
console.log(someRes);

//---------------exe

// Refctor -> use every & soome Helper

let products = [
  { name: 'checkers', category: 'Toys' },
  { name: 'harry Potter', category: 'Books' },
  { name: 'iPhone', category: 'Electronics' },
  { name: 'Learn PHP', category: 'Books' },
];
// do allproducts have  catogoery of bpooks
let allProductsBooks = products.every(
  (product) => product.category === 'Books'
);

let someProductsBooks = products.some(
  (product) => product.category === 'Books'
);
console.log(allProductsBooks);
console.log(someProductsBooks);
