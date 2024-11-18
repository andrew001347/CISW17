
function help(e){

    if(e.keyCode == 72 || e.keyCode == 191)
    {
        document.body.classList.toggle("hide");
    }

}

document.onkeydown = help;
