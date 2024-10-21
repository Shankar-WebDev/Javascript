// Modifiers
// private
// public
// protected

function myClass(publicField, privateField, protectedField) {
  //Public FIeld
  this.publicField = publicField;

  //PrivateField (closure)
  const _privateField = privateField;

  //ProtectedField
  const _protectedFiled = protectedField;

  // Public Method

  this.publicMethod = function () {
    return `Public Method ${this.publicField}`;
  };

  //Protcted Method(closure)
  function _protectedMethod() {
    return `Protected Method: ${_protectedFiled}`;
  }

  //Method to access protected method
  this.accessProtectedMethod = function () {
    return _privateMethod();
  };
}

const myObject = new myClass('Public Data', 'Private Data', 'prtected data');

console.log(myObject.publicField);
console.log(myObject._privateField)
console.log(myObject._protectedFiled)


console.log(myObject.publicMethod())
// console.log(myObject._protectedMethod())
console.log(myObject._privateMethod())