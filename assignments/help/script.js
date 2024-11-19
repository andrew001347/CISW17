
function showHelp(e){

    if(e.keyCode == 72 || e.keyCode == 191)
    {
        
        document.getElementById("nojs").classList.toggle("hide");
        document.getElementById("help").classList.toggle("hide");
    }

}

document.onkeydown = showHelp;
