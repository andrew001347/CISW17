const quotes = [
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "You will face many defeats in life, but never let yourself be defeated.",
    "It always seems impossible until it's done.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "The secret of getting ahead is getting started.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    "Be yourself; everyone else is already taken.",
    "Injustice anywhere is a threat to justice everywhere.",
    "It does not matter how slowly you go as long as you do not stop."
];

const authors = [
    "Albert Einstein",
    "Maya Angelou",
    "Nelson Mandela",
    "Steve Jobs",
    "Mark Twain",
    "Winston Churchill",
    "Helen Keller",
    "Oscar Wilde",
    "Martin Luther King Jr.",
    "Confucius"
];

//getting the length of the array:  let quotesLength = quotes.length;



let x = Math.floor(Math.random() * quotes.length);

//log quote
//Testing Only: console.log(quotes[x]);



document.getElementById("quote").innerHTML = quotes[x];

document.getElementById("authors").innerHTML = authors[x];