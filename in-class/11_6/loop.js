//game loop with while statement

let play_again = "y"

while (play_again == "y") {
    play_again = prompt("Play again? Y/N");
    if(play_again=='n')
    {
        console.log("Thanks for playing");
        break;
    }
  }