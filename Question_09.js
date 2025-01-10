// Sort the array elements

let arr = [6 , 32 , 90 ,43, 13 ,53 , 64 , 24]

let SortArr = (array) => {
    return array.sort((a,b) => a - b )
} 

console.log(SortArr(arr))