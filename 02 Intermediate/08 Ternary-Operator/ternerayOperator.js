// The ternery operator in Javascript is a consie way of writting conditioan; expressions. It is the only Javascript operator that takes three operands: a condtions followd by a questioin  mark (?), an expression to execute if the condtions is true, followed by a colon and an expresssion to executte if the condtion is false

// condtion ? exprIfTrue : expreIfFalse;

let password = 10;

function passwordChecker(ps) {
  //   if (ps === 8) {
  //     return `strong Password`;
  //   } else {
  //     return 'Password should be a character';
  //   }
  return ps === 8 ? `strong Password` : 'passwoed shuld be 8';
}

const res = passwordChecker(password);
console.log(res);





const age = 1

const isAdult = age >= 18 ? "Adult" : "Not an adult"
console.log(isAdult)




//____________________exerise



let  personMoney = false

let haveNotmoney = personMoney === true ? "buy Products": "Not buying the products"


console.log(haveNotmoney)