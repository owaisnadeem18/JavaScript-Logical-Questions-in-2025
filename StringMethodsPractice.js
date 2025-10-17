// 1. Reverse Each Word Without Changing Sentence Order

// Input: "JavaScript is powerful"
// Output: "tpircSavaJ si lufrewop"

const sententece = "JavaScript is powerful"

const ReverseEachWord = (sent) => { 
    return sent.split(" ").map(item => item.split("").reverse("").join(""))
}

console.log(ReverseEachWord(sententece))