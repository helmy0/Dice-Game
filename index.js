var randomNumber1 = 0;
randomNumber1 = Math.floor((Math.random(randomNumber1)*6)+1);
var randomDiceImage1 = "images/dice"+randomNumber1+".png";
var h1Value= document.querySelector('h1');
var randomNumber2 = 0;
randomNumber2 = Math.floor((Math.random(randomNumber2)*6)+1);
var randomDiceImage2 = "images/dice"+randomNumber2+".png";
var image1 = document.querySelectorAll(".img1")[0];
var image2 = document.querySelectorAll(".img2")[0];

image1.setAttribute("src", randomDiceImage1);
image2.setAttribute("src", randomDiceImage2);

if (randomNumber1>randomNumber2){
  h1Value.innerHTML = "PLayer One Wins"
} else if (randomNumber1<randomNumber2){
  h1Value.innerHTML = "PLayer Two Wins"
} else {
  h1Value.innerHTML = "Its a Draw!!!"
}
