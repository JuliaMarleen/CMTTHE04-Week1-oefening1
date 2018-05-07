//
// geef de vis een random positie en een random kleur
//
//let fishes = document.getElementsByTagName("fish")
//let fish = fishes[0]

//let fishes = "";

let i;
for (let i = 0; i < 20; i++) { 
    (function (i) {
    setTimeout(function () {
    
        let screenSize = window.innerWidth
        let randomNumber = Math.random() * screenSize * 0.9
    
        let screenSizeHeight = window.innerHeight
        let randomNumber2 = Math.random() * screenSizeHeight * 0.8
        
        let randomNumber3 = Math.random() * 360

        let fishes = document.createElement("fish")
        document.body.appendChild(fishes)
    
    
        fishes.style.left = randomNumber + "px"
        fishes.style.top = randomNumber2 + "px"
        fishes.style.webkitFilter = "hue-rotate(" + randomNumber3 + "deg)"
        fishes.style.filter = "hue-rotate(" + randomNumber3 + "deg)";
    }, 1000*i);
  })(i);
}

//
// geef de bubble een random positie
//
//let bubbles = document.getElementsByTagName("bubble")
//let bubble = bubbles[0]

var b;
for (b = 0; b < 100; b++) { 
    (function (i) {
    setTimeout(function () {
        let screenSizeBubble = window.innerWidth * 0.9
        let randomNumberBubble = Math.random() * screenSizeBubble
    
        let screenSizeBubbleHeight = window.innerWidth * 0.9
        let randomNumberBubbleHeight = Math.random() * screenSizeBubbleHeight
    
        let bubbles = document.createElement("bubble")
        document.body.appendChild(bubbles)

        bubbles.style.left = randomNumberBubble + "px"
        bubbles.style.top = randomNumberBubbleHeight + "px"
    }, 1000*i);
  })(i);
}
//
// roep een functie aan als alles geladen is
//

window.addEventListener("load", function () {
    console.log("start het aquarium")
})


