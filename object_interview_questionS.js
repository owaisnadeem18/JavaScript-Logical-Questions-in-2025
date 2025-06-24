let obj = [
    {id: "1"  , name : "hamza" , dept: "bscs" , niche: "Devops"},
    {id: "2"  , name : "hammad" , dept: "bsai" , niche: "AI"},
    {id: "3"  , name : "ali" , dept: "bscy" , niche: "Devops"},
    {id: "4"  , name : "owais" , dept: "" , niche: "Devops"},
]

let func = (array_of_obj) => {
    let arr = []

    arr = array_of_obj.map((item) => item["name"][0].toUpperCase() + item["name"].slice(1) )

    return arr

}

console.log(func(obj))