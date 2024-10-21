function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is an even Number`);
    } else {
      reject(`${number} is an Odd Number`);
    }
  });
}

const numberToCheck = 6; // odd

checkNumber(numberToCheck)
  .then((message) => {
    console.log(`sucess: ${message}`);
  })

  .catch((error) => {
    console.log(`Error: ${error}`);
  });

//refectring code

function callbackHell(callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'indside (callBackHell) FUnction';
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed Data`;
      console.log('inside (firstFunc) Function');
      resolve(processedData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed Data`;
      console.log('inside (secondFunc) Function');
      resolve(processedData);
    }, 1500);
  });
}

callbackHell()
  .then((data) => firstFunc(data))
  .then((processedData1) => secondFunc(processedData1))
  .then((processedData2) =>
    console.log(`final result of all func with Promise: ${processedData2}`)
  )
  .catch((error) => console.log(`Error:${error}`));
