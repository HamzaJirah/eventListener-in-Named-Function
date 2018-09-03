const button = document.querySelector("#button");


button.addEventListener("click", clickButton);

function clickButton(){
  paragraphText.innerText = "I am a named function from the click event"
}