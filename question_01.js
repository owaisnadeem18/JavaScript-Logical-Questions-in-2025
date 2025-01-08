// Problem: FizzBuzz

// Print numbers from 1 to n. But for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

let n = 50

function problemSolver (a) {

    if (a > 0 ) {
        for (let i = 1 ; i<=a ; i++) {     
            if (i % 3 == 0 && i % 5 == 0) {
                console.log("FizzBuzz")
            }
            else if (i % 3 == 0) {
                console.log("Fizz" )
            }
            else if (i% 5 == 0) {
                console.log("Buzz")
            }
            else {
                console.log(i)
            }
        }
    }

    else {
        alert("Please Enter a valid number")
    }

        
}

(problemSolver(n))