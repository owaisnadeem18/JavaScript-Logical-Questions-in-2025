// 🧠 Question 8: Count the Number of Words in a String
// 📌 Problem Statement:
// Write a JavaScript function that takes a string and returns the number of words in it.

// 👉 Example:

// countWords("I am learning JavaScript"); // Output: 4
// countWords("Hello World!");             // Output: 2

const CountWords = (sent) => {
    let splitted_sentence = sent.trim().split(/\s+/)
    console.log(splitted_sentence)
    return splitted_sentence.length

}

console.log(CountWords("My Name is Owais Nadeem"))