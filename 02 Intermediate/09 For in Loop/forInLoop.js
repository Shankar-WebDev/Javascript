// The "For ........ in " loop javascript is used to iterate over the enumerable properties of an object its a way to loop[ thriugh the keys (property names ) of an 




// for(let key in object ){......}




let person = {
    name:'shankar',
    age:19,
    gender:'male'
}


for(let keys in person ){
    console.log(keys, person[keys])
}






let list = ['one','two','three', 'four']


for (let i in list){
    console.log(`${i}:${list[i]}`)
}



// exerise



const object = {a:1, b:2, c:3};

for(let j in object){
    // console.log(`${object}:${list[object]}`)
    console.log(j,object[j])
}