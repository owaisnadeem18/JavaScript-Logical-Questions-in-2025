const arr = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Doe", age: 35}
];

// for map: 

const mapping_arr = arr.map(item => item.age < 30)

const filtering_arr = arr.filter(item => item.age > 30)

console.log(mapping_arr) // will print (either true or not in a new array)

console.log(filtering_arr) // will return the objects , which meet the condition.

