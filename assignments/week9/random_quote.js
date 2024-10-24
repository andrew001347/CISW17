const quotes = [
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. - Helen Keller",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "Injustice anywhere is a threat to justice everywhere. - Martin Luther King Jr.",
    "It does not matter how slowly you go as long as you do not stop. - Confucius"
];


//getting the length of the array:  let quotesLength = quotes.length;



let x = Math.floor(Math.random() * quotes.length);

//log quote
//Testing Only: console.log(quotes[x]);



document.getElementById("quote").innerHTML = quotes[x];
