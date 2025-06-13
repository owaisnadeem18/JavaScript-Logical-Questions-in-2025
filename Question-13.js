// Find the second highest number in an array without any built in method 

let arr = [34, 24 ,52 ,13 ,64 , 34]

let FindSecondHighestNum = (array) => {

    let sorted_Arr = array.sort((a,b) => a-b)

    return sorted_Arr[array.length-2]

}

console.log(`The highest number in an array is => ${FindSecondHighestNum(arr)}`)
 