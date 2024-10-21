// function fetchDataFromServer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('user data retraived from the serrver.');
//     }, 4000);
//   });
// }

// async function getUserData() {
//   try {
//     const data = await fetchDataFromServer();
//     console.log(data);
//     console.log('remaining task can be executed here.');
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUserData().then().catch();

//---------------------------------------------------------------------\

function callbackHell() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = `Inside (callbackHell) FUnction`;
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data}- Processed First`;
      console.log('Inside (firstFunc) Function');
      resolve(processedData);
    });
  });
}

function secondFunction(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed Second`;
      console.log('Inside (secondFunc) Function');
      resolve(processedData);
    }, 2500);
  });
}

async function processedDataWithAsyncAwiat() {
  try {
    const data = await callbackHell();
    const processedData1 = await firstFunc(data);
    const processedData2 = await secondFunction(processedData1);
    console.log(
      `final return of all function with async/await: ${processedData2}`
    );
  } catch (error) {
    console.log(`Error:${error}`);
  }
}

processedDataWithAsyncAwiat();

///----------------------exercise

//Refactor this code to use async/await

console.log('start ');

function getUserDataFromDB(name) {
  return new Promise(
    (resolve,
    (reject) => {
      setTimeout(() => {
        console.log('valied Name');
        resolve(name);
      }, 2000);
    })
  );
}


function getUserHobbies (){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("getting use Hobbiess.............")
            resolve(['football',"riding"])
        }, 2000);
    })
}


async function asyncUserHobbies() {
    try{
        const name = await getUserDataFromDB('shankar')
        const hobby = await getUserHobbies(name);
        console.log(hobby)
    }catch(error){
        console.log(error)
    }
    
}
