// Capitalize the first letter of Each String.  

let str = "My name is owais Nadeem"

const MyFunc = (string) => {

    return string.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")

}

console.log(MyFunc(str))