function random_greeting(name){
    let your_name = name;
    const greetings = [

        `👋 Hello, ${your_name}!`,
        `🤠 Howdy, ${your_name}! 🤠`,
        `Yo, ${your_name}, what's up my dude? 😎`,
        'What\'s cookin\', ${your_name}? 🍲',
        `Ahoy, ${your_name}! ⚓️`,
        `Greetings, ${your_name}! 👽`,
        `Why, if it isn’t ${your_name}! How’s life?`
    ];
    let x = Math.floor(Math.random() * greetings.length);

    greetings[x];
    console.log(greetings[x]);
}


random_greeting("Andrew");

