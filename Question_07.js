// Question_07

// JavaScript Logical Question 

// Remove Duplicates from an array without using sets

let arr = [ 4 , 9 , 2 ,2 , 9 ,5 , 3 , 5 , 2 ,1 , 89 , 94 , 21 ,1]

let removeDuplicates = (array) => {
    let uniqueElem = []

    array.map((x) => {
        if (!(uniqueElem.includes(x))) {
            uniqueElem.push(x) 
        }
    })

    return uniqueElem
}

console.log(removeDuplicates(arr))