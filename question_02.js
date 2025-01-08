// Problem: FizzBuzz (Part 02)

// You have an empty array , you have to use it and push the numbers from 1 to n numbers But for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

let arr = []
let n = 39

let problemSolver = (array , a) => {    

    for (let i = 1 ; i<= a ; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            array.push("FizzBuzz")
        }
        else if (i % 3 == 0) {
            array.push("Fizz")
        }
        else if (i % 5 == 0) {
            array.push("Buzz")
        }
        else {
            array.push(i)
        }
    }

    return array

}

console.log(problemSolver(arr , n ))