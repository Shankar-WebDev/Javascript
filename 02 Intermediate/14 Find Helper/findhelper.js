// the find () method is another built-in array helper in Js that allows you to find the first element in an that matches a specific conditon it return the  value of the first elements that satisfies the given teasting function, or undefined if no element is found

const people = [
  { name: 'shankar', age: 17 },
  { name: 'alex', age: 18 },
  { name: 'huxn', age: 20 },
  { name: 'alex', age: 30 },
  { name: 'jimmy', age: 30 },
];

const res = people.find((person) => person.name === 'alex');
console.log(res);

const post = [
  { id: 1, content: 'Good Post' },
  { id: 2, content: 'Funny Post' },
  { id: 3, content: 'Sad Post' },
];



const postRes = post.find((post => post.content === 'Sad Post'));
console.log(postRes)




/// --- EX

const ages = [30,40,65,12]


function checkAge (ages) {
    return ages > 18
}

const res1 = ages.find(checkAge)
console.log(res1)