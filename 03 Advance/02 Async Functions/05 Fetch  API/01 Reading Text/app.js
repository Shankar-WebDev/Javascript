// console.log(fetch('text.txt'));

//callback

//New Promises

// async/await

//text method returns promise
//if resolved will return thext representation of  body

// fetch('text.txt')
//   .then((res) => res.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//fetch APi promise only rejects when we have network error (not in other case)

const result = document.querySelector('.results');

// fetch('text.txt')
//   .then((res) => {
//     if (!res.ok) throw Error(res.statusText)
//         return  res.text()
//   })

//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

async function renderData() {
  const response = await fetch('text.txt');
  if (!response.ok) throw Error(response.statusText);
  const data = await response.text();
  result.textContent = data;
}

renderData();

