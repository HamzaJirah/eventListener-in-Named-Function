//select elements
const button = document.querySelector("#button");
const paragraphText = document.getElementsByTagName("p")[0];

//add eventListener
button.addEventListener("click", clickButton);

//create function for the above named event listener
function clickButton(){
  //event to occur when button is clicked
  paragraphText.innerText = "I am a named function from the click event"
}

clickButton();