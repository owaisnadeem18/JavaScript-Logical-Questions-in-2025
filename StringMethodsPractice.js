// 1. Reverse Each Word Without Changing Sentence Order

// Input: "JavaScript is powerful"
// Output: "tpircSavaJ si lufrewop"

// const sententece = "JavaScript is powerful"

// const ReverseEachWord = (sent) => sent.split(" ").map(item => item.split("").reverse("").join("")).join(" ")


// console.log(ReverseEachWord(sententece))

// 2. Check if Two Strings are Anagrams (Ignore Case & Spaces) 

// Input: "listen", "Silent"
// Input: "hello", "Olelh"

const str1 = "hello";
const str2 = "Olelh";

const CheckAnagrams = (string1 , string2) => {

    const s1 = string1.toLowerCase()
    const s2 = string2.toLowerCase()


    if (s1.length == s2.length) {
        const sorted_str_1 = s1.split("").sort().join("")
        const sorted_str_2 = s2.split("").sort().join("")
        
        // compare and return boolean
        if (sorted_str_1 == sorted_str_2) {
            return `The both strings , '${string1}' and '${string2}' are anagrams`
        }
    }
    else {
        return `Non Anagrams`
    }
}

console.log(CheckAnagrams(str1 , str2))