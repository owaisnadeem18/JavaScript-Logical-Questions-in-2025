let AnagramChecker = (a,b) => {

    if (a.length == b.length) {    
        
        let sorted_x = a.split("").sort().join("")
        let sorted_y = b.split("").reverse().sort().join("")
        
        if (sorted_x == sorted_y) 

            return `Both of the words ${a} and ${b} are anagrams`
    
    }

    return "Non anagrams"

}

console.log(AnagramChecker("listen" , "silent" ))