// JavaScript

//printing hello world to the console

console.log("Hello, World!");


//ways to call JS

//Put in a separate file
// <script src = "script.js" defer ></script>

//Using script tag
// <script> </script>


// Variables
let firstName = "Steve";

console.log(firstName);


let steveAge = 27;

console.log(steveAge);

let bertha_age = 16;

if(bertha_age > 17) {
    console.log("You can see the movie");

}

else{
    console.log("You cant see the movie");
}


//Arrays(lists)

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "rebeccapurple",
    "violet"
  ];


  //picking a random number between 0 - 6 

  let x = Math.floor(Math.random() * 7); //.floor rounding down, .ceil rounding up
  console.log(colors[x]);

