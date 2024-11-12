
const message = document.getElementById("message");
const monthsInput = document.getElementById("months");
const daysInput = document.getElementById("days");
const yearsInput = document.getElementById("years");
const submit = document.getElementById("submit");


const today = new Date();
const currentMonth = today.getMonth() +1;
const currentDay = today.getDate();
const currentYear = today.getFullYear();


function itsYourBirthday() {

    let months = monthsInput.value;
    let days = daysInput.value;
    let years = yearsInput.value;
 
    let age = currentYear - years;

 
    if (months == currentMonth && days == currentDay) {
        message.innerHTML = `Happy Birthday! You are ${age} years old!`; 
    } else {
        message.innerHTML = `It's not your birthday today. You are ${age -1} years old!`;
    }
}

submit.addEventListener("click", itsYourBirthday);


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        itsYourBirthday();
    }
});
