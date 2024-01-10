const colors = ["green", "red", "white", "#d40028", "#c30022", "rgb(220, 61, 42)"];
// changed colors inside array to christmas themed hex codes
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
