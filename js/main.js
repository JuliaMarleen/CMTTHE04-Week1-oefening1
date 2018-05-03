//
// geef de vis een random positie en een random kleur
//
//let fishes = document.getElementsByTagName("fish")
//let fish = fishes[0]

let fishes = "";
let bubbles = document.createElement("bubble")
document.body.appendChild(bubbles)

var i;
for (i = 0; i < 100; i++) { 
    let fishes = document.createElement("fish")
    document.body.appendChild(fishes)
    
    let screenSizeHeight = window.innerHeight*0.8
    let randomNumber2 = Math.random() * screenSizeHeight

    let screenSize = window.innerWidth*0.9
    let randomNumber = Math.random() * screenSize

    let screenSizeBubble = window.innerWidth*0.9
    let randomNumberBubble = Math.random() * screenSize

    fishes.style.left = randomNumber + "px"
    fishes.style.top = randomNumber2 + "px"
    fishes.style.webkitFilter = "hue-rotate(300deg)"
    fishes.style.filter = "hue-rotate(300deg)"
}

//
// geef de bubble een random positie
//
//let bubbles = document.getElementsByTagName("bubble")
//let bubble = bubbles[0]

bubbles.style.left = randomNumberBubble + "px"
bubbles.style.top = "0px"

//
// roep een functie aan als alles geladen is
//

window.addEventListener("load", function () {
    console.log("start het aquarium")
})



