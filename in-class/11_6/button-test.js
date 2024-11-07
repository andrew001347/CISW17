const button = document.getElementById("button");
const box = document.getElementById("box");
const box2 = document.getElementById("box2");

function buttonClicked(){
console.log("Button Clicked");

box.style.display = "none";
box2.style.display = "block";
    
}


button.addEventListener("click", buttonClicked);

