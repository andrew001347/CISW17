    let months = form.months.value;
    let days = form.days.value;

const today = new Date();
const month = today.getMonth();
const day = today.getDate();


const bday = new Date(months, days) //const bday = new Date(1997, 2, 5) march is 2 because of array indexing.
const bd_month = bday.getMonth();
const bd_day = bday.getDate();

const submit = document.getElementById("submit"); 
message.style.display="none";

submit.addEventListener("click", itsYourBirthday);

form.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        generatePoem();
    }
});

function itsYourBirthday(){


if(bd_month==month && bd_day == day){
    document.getElementById("message").innerHTML = "Happy Birthday!"; 

}
else{
    document.getElementById("message").innerHTML = "It's not your birthday today"; 

}


}

