const today = new Date();
const month = today.getMonth();
const day = today.getDate();


const bday = new Date(1997, 2, 5) // march is 2 because of array indexing.
const bd_month = bday.getMonth();
const bd_day = bday.getDate();

if(bd_month==month && bd_day == day){
    console.log("Happy Birthday!")
}
else{
    console.log("It's not your birthday")
}

