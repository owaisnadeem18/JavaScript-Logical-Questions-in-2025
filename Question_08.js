// Find the sum of array elements 

let arr = [2 , 5 , 2 ,8 , 3]

let CountArrElems = (array) => {
    return array.reduce((x,y) => (
        x + y
    ), 0)

}

console.log(CountArrElems(arr))