// 2. Count vowels in a string

// Input: "javascript"
// Expected: 3

const vowels = ["a" , "e" , "i" , "o" , "u"]
const word = "javaScript"

const countVowels = (vowelsArr , word) => {
    let number_of_vowels = 0

    let wordsArr = word.split("")

    for (let i = 0 ; i < wordsArr.length ; i++) {
      
      if ( vowels.includes(wordsArr[i]) )  {
        number_of_vowels++
      }

    } 

    return number_of_vowels

}

console.log(countVowels(vowels , word))