const button = document.getElementById("submit");

function check_birthday(){

    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();

    let pick = document.getElementById("bday").value;
    let bday = new Date(pick);

    let bd_month = bday.getMonth();
    let bd_day = bday.getDate();

    if(bd_month== month && bd_day== day){

        message.innerHTML= "<h1>Happy Birthday </h1>"
    }

    else{
        message.innerHTML= "<h1>It is not your birthday</h1>"
    }

    pick = "";


}

button.addEventListener('click',check_birthday)