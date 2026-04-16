const array = [4,5,1,2,0,4]

const firstNonRepeatingElement = (arr) => {

    const count = {}

    for (let i = 0 ; i < arr.length ; i++) {
        
        if (count[arr[i]]) {
            count[arr[i]]++
        }
        else {
            count[arr[i]] = 1
        }

    }

    for (let i = 0 ; i < arr.length ; i++) {
        if (count[arr[i]] === 1) return arr[i]
    }

}


console.log(firstNonRepeatingElement(array))