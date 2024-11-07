let greetings = 
`The rules: Rock beats Scissors, 
Scissors beats Paper, 
Paper beats Rock\n`

let x = Math.floor(Math.random()) * 3;

let choices = ['Rock','Paper','Scissors']

let computer_choice = choices[x];

let player_choice = prompt("Choose Rock, Paper, Scissors, (r/p/s)");

player_choice = player_choice[0].toLowerCase();

if(player_choice=='r'&& computer_choice=='s'||player_choice=='p'&& computer_choice=='r'|| player_choice=='s'&& computer_choice=='p')
{
    console.log("You WIN!");
}

else if(player_choice==computer_choice)
{
    console.log("Its a TIE.");
}

else{
console.log('You LOSE.');

}

