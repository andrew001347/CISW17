// //defining a variable to grab the object from the html page.
// const button = document.getElementById("button");
const keycodes = document.getElementById("keycodes");


// //add even listener     click,mouseover
// button.addEventListener("click", buttonClicked);
//                                     //some function

//keycodes function to output the code
function logkeyCode(e){
    //console.log("You Pressed: ", e.key, e.keyCode);
    keycodes.innerText = "Key:" + e.key + "\n";
    keycodes.innerText += "KeyCode:" + e.keyCode;
    

}

//add onkeydown to call the function

document.onkeydown = logkeyCode;


// d = 68
// b = 66
// h = 72
// ? = 191
// esc = 27
