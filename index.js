var randomNum1 = Math.random()*6 + 1;
randomNum1 = Math.floor(randomNum1);

var randomNum2 = Math.random()*6 + 1;
randomNum2 = Math.floor(randomNum2);

var randomDiceImg1 = "images/dice" + randomNum1 + ".png";
var randomDiceImg2 = "images/dice" + randomNum2 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImg1);
document.querySelector(".img2").setAttribute("src", randomDiceImg2);

if (randomNum1>randomNum2){
  document.querySelector("h1").textContent = "Player1 Won!";
}
else if (randomNum1<randomNum2){
  document.querySelector("h1").textContent = "Player2 Won!";
}
else{
  document.querySelector("h1").textContent = "Draw!";
}
