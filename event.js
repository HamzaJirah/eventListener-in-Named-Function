const button = document.querySelector("#button");
const paragraphText = document.getElementsByTagName("p")[0];


button.addEventListener("click", clickButton);

function clickButton(){
  paragraphText.innerText = "I am a named function from the click event"
}

clickButton();