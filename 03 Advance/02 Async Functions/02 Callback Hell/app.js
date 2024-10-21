// callback functions

function callbackHell(callback) {
  setTimeout(() => {
    const data = 'Inside (CallbackHell) function';
    console.log(data);
    callback(data);
  }, 2000);
}

function firstFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data} - Processed First`;
    console.log(`Inside (firstFunc) Fucntion`);
    callback(processedData);
  }, 1000);
}

function secondFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data} -Processed Second`;
    console.log(`Inside (secondFunc) Function`);
    callback(processedData);
  }, 1500);
}

// callback Hell

callbackHell((data) => {
  firstFunc(data, (processedData1) => {
    secondFunc(processedData1, (processedData2) => {
      console.log(`Final result of  functions: ${processedData2}`);
    });
  });
});

//callback is not always asyncrnous

console.log('start');

const number = [1, 2, 3, 4, 5, 6, 7, 8];

number.forEach((n) => console.log(n));

console.log('End');

//-----------------------exercise

// 1. At the middle of Start and End do this 👇

// -> Create a function name (getUserDataFromDB) which will take name and callback as parameters
// --> use setTimeout() & print "Getting User Name" & then pass your name as an argument to callback parameter.
// --> this process should take 2s

// -> Create a function name (getUserHobbies) which will take name and callback as parameters
// --> use setTimeout() & print "Getting User hobbies" & then pass your your hobbies array as an argument to callback parameter.
// --> this process should also take 2s

// -> Execute getUserDataFromDB function & pass your name for the first parameter & callback function for the second argument and this callback function should also take a (data) parameter.
// --> In that callback function log (data) to the console
// --> execute getUserHobbies function and pass your data param and also pass another callback function which will take
// ---> hobby as parameter and just log that parameter to the console, run the code and see the result.

// Your code should look something like this 👇
// getUserDataFromDB("HuXn", (data) => {
//   console.log(data);
//   getUserHobbies(data, (hobby) => {
//     console.log(hobby);
//   });
// });

console.log('Start');

function getUserDataFromDB(name, callback) {
  setTimeout(() => {
    console.log('Getting user Name.......');
  }, 2000);
}

function getUserHobbies(name, callback) {
  setTimeout(() => {
    console.log('Getting user Hobbies..................');
    callback([['footaball', 'Riding']]);
  });
}

getUserDataFromDB('shankar', (data) => {
  console.log(data);
  getUserDataFromDB(data, (hobby) => {
    console.log(hobby);
  },2000);
});

console.log('End');
