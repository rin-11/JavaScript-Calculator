
// grab the display and button elements from HTML
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");


// give buttons commands
buttons.forEach((button) => {
  button.onclick = () => {

    // clear button
    if (button.id == "clear") {
      display.innerText = "";
    } 
    // eval JS string and execute when = sign is pressed and values are present
    else if (display.innerText != "" && button.id == "equal") {
        display.innerText = eval(display.innerText);
        console.log(display.innerText);
    }
    // display null if no values in string
    else if (display.innerText == "" && button.id == "equal") {
      display.innerText = "null";
      console.log(display.innerText);
    
    // display button values
    } else {
      display.innerText += button.id;
    }
  };
});




















