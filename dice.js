
function rollDice(){
let numDice = document.getElementById("numDice").value;
let diceResults = document.getElementById("diceResults");
let diceImages = document.getElementById("diceImages");
let values = [];
let images = [];


  for(let i = 0; i < numDice; i++){
    const value = Math.floor(Math.random()*6) + 1;
     values.push(value);
     //the images are not being displayed
     //return the images instead of NaN
     images.push(`<img src = "./dice-images/${value}.png">`);
    
  }
 diceResults.textContent = `dice: ${values.join(', ')}`;
 diceImages.innerHTML = images.join('');

}