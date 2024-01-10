const colors = ["black", "red", "#F75F1C", "#FFC502", "rgb(110, 58, 158)"];
// changed colors inside array to halloween themed hex codes
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
 // get random number between 0 - 4 colors 
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
