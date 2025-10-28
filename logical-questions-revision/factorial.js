    // finding the factorial of any number with the help of resursion

    const num = 5

    const findFactorial = (number) => {
        
        if (number == 0 || number == 1) return 1

        return number * findFactorial(number - 1)

    }

    console.log(findFactorial(num))