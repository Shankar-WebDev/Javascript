// the map() methods ncrates a new array populated with the results of calling a provided fucntions an every elements in the calling array





let numbers= [1,2,3,4,5]

let double = numbers.map(num =>num * 17.3)

console.log(double)



let peoples = [
    {firstName: 'Macom',lastName: 'hello'},
    {firstName: 'Kaylee',lastName: 'Gunner'},
    {firstName: 'kendra',lastName: 'sounderland'}
]

const results = peoples.map(person =>{
    return[person.firstName, person.lastName]
})

console.log(results)



/// ---eexercise 


let arrays = [22,33,44,55,66]


let element = arrays.map(array =>
    array *10
)

console.log(element)