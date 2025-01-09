// Question_06

// Here you are required to find the factorial of any number given to us 

let num = 8

let findFact = (n) => {
    let factResult = 1
    for (let i = 1 ; i<=n ; i++) {
        factResult = i * factResult 
    }
    return factResult
}

console.log(findFact(num))