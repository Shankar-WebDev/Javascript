// call back Function
// When we provide funtion as an (argument ) to other function that function is know as callback function

function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});

function greeet(name, cb) {
  console.log(`hello ${name}`);
  cb();
}

function callme() {
  console.log('Iam callBack Function');
}

greeet('John', function cb() {
  console.log(`Iam call back function`);
});

///-----------------------------------------------------------------------------
//execrice

function showCallFunc(fn) {
  const Num = 89;
  fn(Num);
}
showCallFunc(function (Num) {
  console.log(Num);
});
