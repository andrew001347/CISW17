//function to switch tabs.

function openSeason(event,season_name){

    let i;
    let tablinks = document.getElementsByClassName("tablinks"); //creates arrays based on the class name

    let season = document.getElementsByClassName("season");

    //hide all the seasons
    for (i=0; i<season.length; i++)
    {
        season[i].style.display="none";
    }

    //iterate through tablinks and remove the current
    for (i=0; i<tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(season_name).style.display = "block";

    event.currentTarget.classList.toggle("current");
    
}