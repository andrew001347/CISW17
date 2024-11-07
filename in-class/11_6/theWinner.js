console.log("Who has the highest number?");

let score1;
let score2;
let wins = 0;  // Initialize wins to 0
let games_played = 0;
let play_again = "y";

while (play_again == "y") {
    score1 = Math.floor(Math.random() * 10);
    score2 = Math.floor(Math.random() * 10);
    games_played++;

    let message; // Initialize message variable
    if (score1 > score2) {
        message = "Computer Wins!";
    } else if (score2 == score1) {
        message = "It's a TIE.";
    } else {
        message = "You Won!";
        wins++; // Increment wins
    }

    console.log(`Computer Score: ${score2}`);
    console.log(`Your Score: ${score2}`);
    console.log(`Message: ${message}`);
    console.log(`Wins: ${wins}`);
    console.log(`Games Played: ${games_played}`);

    play_again = prompt("Play again? y/n");
    if (play_again == 'n') {
        break;
    }
}

let win_ratio = ((wins / games_played) * 100).toFixed(1); // One decimal point
console.log("Win Ratio: " + win_ratio + "%");
console.log("Goodbye");
