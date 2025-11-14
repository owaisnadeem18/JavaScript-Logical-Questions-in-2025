// Find the longest word in a sentence

// Input: "I am a JavaScript developer"
// Expected: "JavaScript"

let sentence = "I am a JavaScript developer"

const findLongestWord = (sent) => {
    let longestWord = ""

    let sentenceArray = sent.split(" ")  

    for (let i = 0 ; i<sentenceArray.length ; i++ ) {

        if (sentenceArray[i].length > longestWord.length) {
            longestWord = sentenceArray[i]
        }

    }

    return longestWord

}

console.log(findLongestWord(sentence))