let bill = document.getElementById("bill");//buttons
let form = document.forms.amount;



let submit = document.getElementById("submit");

let results = document.getElementById("results");
let displayTotals = document.getElementById("displayTotals");
let startOver = document.getElementById("startOver");




let billTotal = 0; //bill amount
let tipAmount = 0;// tip amount
let total =0; //tip + bill

function tipBig(e){

    e.preventDefault();

    //getting bill amount from input
    billTotal = Number(form.billTotal.value);

    tipAmount = billTotal*0.2;
    total = billTotal + tipAmount;

    bill.style.display = "none";


    displayTotals.innerHTML += `<p> The bill is $${billTotal.toFixed(2)} <br></p>`;
    displayTotals.innerHTML += `<p> The tip is $${tipAmount.toFixed(2)} <br></p>`;
    displayTotals.innerHTML += `<p> The total is now: <b>$${total.toFixed(2)}</b> </p>`;

    results.style.display="block";
}


function reload(){

    window.location.reload();
    form.billTotal.value="$0.00";

}

submit.addEventListener("click", tipBig);


startOver.addEventListener("click", reload);