// Finding the factorial of a number using regression 

let number = 5

let FindFact = (number) => {
    
    if (number == 0 || number == 1 ) 
    {
        return 1
    }
    else {
        return number * FindFact(number-1)
    }

}

console.log(FindFact(number))