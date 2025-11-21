// ⭐ 3. Find the largest number (max value)
// Question:

let arr = [34 , 76 , 34 ,13 ,75 ,24 ,79 ,21]

const findMaxNumber = (array) => {
    let maximum = 0

    for (let number of array) {

        if (number > maximum) {
            maximum = number
        }

    }

    return maximum

}

console.log(findMaxNumber(arr))