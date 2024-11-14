

const kaboom = document.createElement('div');

kaboom.innerHTML="🧨";
kaboom.style.position = "absolute";
kaboom.style.top=Math.floor(Math.random() * 350) + "px";
kaboom.style.left=Math.floor(Math.random() * 450) + "px";
kaboom.style.fontSize = "64px";

document.body.appendChild(kaboom);


function makeKaboom(){
    document.body.style.background = "orange";

    document.body.innerHTML = "<h1>💥</h1>";


}

kaboom.addEventListener("mouseover", makeKaboom);