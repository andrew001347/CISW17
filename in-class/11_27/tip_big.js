let bill = document.getElementById("bill"); // buttons
let form = document.forms.amount;

let submit = document.getElementById("submit");
let results = document.getElementById("results");
let displayTotals = document.getElementById("displayTotals");
let startOver = document.getElementById("startOver");

let billTotal = 0; // bill amount
let tipAmount = 0; // tip amount
let total = 0; // tip + bill

function tipBig(e) {
    e.preventDefault(); // Corrected typo

    // Getting bill amount from input
    billTotal = Number(form.billTotal.value);

    // Calculate tip and total
    tipAmount = billTotal * 0.2;
    total = billTotal + tipAmount;

    // Hide the input form
    bill.style.display = "none";

    // Update and display results
    displayTotals.innerHTML = `
        <p>The bill is $${billTotal.toFixed(2)}<br>
        The tip is $${tipAmount.toFixed(2)}<br>
        The total is now: <b>$${total.toFixed(2)}</b></p>
    `;

    results.style.display = "block";
}

function reload() {
    window.location.reload(); // Reload the page
}

submit.addEventListener("click", tipBig);
startOver.addEventListener("click", reload);
