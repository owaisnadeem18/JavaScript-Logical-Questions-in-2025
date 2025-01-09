// There is a question of JavaScript Logic:

// Palindrome Question 

// An array will be given to you , in the array there will be some of the strings written , so you have to find it out by comparing two different strings together with each other . Those array element strings which are palindrome will be printed out in the console as True and those which are not palindrome will be printed out as False.


// Input: ["madam", "hello", "world", "level", "radar"]

// Output: [Yes, No, No, Yes, Yes]

const arr = ["madam", "hello", "maham", "level" , "racecar" ];


const findPalindrome = (array) => {
    
    let reversed_strArr = []
    let result_Arr = []

    for (let i = 0 ; i< array.length ; i++) {
        // reversed_strArr.push(array[i].reverse())
        reversed_strArr.push(array[i].split("").reverse().join(""))

        if (array[i] == reversed_strArr[i]) {
            result_Arr.push(true)
        }
        else {
            result_Arr.push(false)
        }

    }

    // for (let x = 0 ; x < array.length ; x++) {
    //     if (array[x] == reversed_strArr[x]) {
    //         result_Arr.push(true)
    //     }
    //     else {
    //         result_Arr.push(false)
    //     }
    // }

    return result_Arr;

} 

console.log(findPalindrome(arr))