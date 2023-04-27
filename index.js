console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Jamal Dunn",
    hometown: "Brooklyn, New York",
    favoriteColors: ["Black ","Purple ","Orange ","blue "]
}


function introduceMe (personObj){
    console.log(`Hi, my name is ${personObj.name}, and I'm from ${personObj.hometown}`)

    console.log(`My favorite colors are ${personObj.favoriteColors}`)
}
console.log(introduceMe(meObj))
