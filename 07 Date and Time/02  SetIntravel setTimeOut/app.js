// setInterval

//  setInterval(() => {
//     console.log(` This is excicuted every 2 second`),2000
//  });

// SetTimeOut

setTimeout(function () {
  console.log(`this fucntion will be executed after 3 seconds`), 3000;
});

const interalId = setInterval(function () {
  console.log(` This Function is being executed at the interval`);
},1000);


//stop the interval


setTimeout(function(){
    clearInterval()
    console.log(`intervel stop`)
},10000)