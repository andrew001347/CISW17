function startMadLibs() {
    document.getElementById("instrucctions").style.display = "none";
  
    const personsName = prompt("Enter a proper noun (Person’s Name):");
    const adj1 = prompt("Enter an adjective:");
    const color = prompt("Enter a color:");
    const animal = prompt("Enter an animal:");
    const place = prompt("Enter a place:");
    const adj2 = prompt("Enter another adjective:");
    const magicalCreatures = prompt("Enter a magical creature (plural):");
    const adj3 = prompt("Enter another adjective:");
    const magicalCreatures2 = prompt("Enter another magical creature (plural):");
    const roomInAHouse = prompt("Enter a room in a house:");
    const noun = prompt("Enter a noun:");
    const noun2 = prompt("Enter another noun:");
    const noun3 = prompt("Enter another noun:");
    const adj4 = prompt("Enter another adjective:");
    const nouns = prompt("Enter a plural noun:");
    const number = prompt("Enter a number:");
    const measureOfTime = prompt("Enter a measure of time (e.g., days, years):");
    const verbING = prompt("Enter a verb ending in -ing:");
    const adj5 = prompt("Enter another adjective:");
    const adj6 = prompt("Enter a final adjective:");
  
    const message = `Dear ${personsName}, I am writing to you from a ${adj1} castle in an enchanted forest. I found myself here one day after going for a ride on a ${color} ${animal} in ${place}. There are ${adj2} ${magicalCreatures} and ${adj3} ${magicalCreatures2} here! In the ${roomInAHouse} there is a pool full of ${noun}. I fall asleep each night on a ${noun2} of ${noun3} and dream of ${adj4} ${nouns}. It feels as though I have lived here for ${number} ${measureOfTime}. I hope one day you can visit, although the only way to get here now is ${verbING} on a ${adj5} ${adj6}!!`;
  
    document.getElementById("madlib").innerHTML = message;
  }
  