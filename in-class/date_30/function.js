function myGreeting(name)
{
    let greeting = `Howdy, ${name}!`
    greeting = greeting.toUpperCase();
    console.log(greeting); //return name;
}


myGreeting("A");
myGreeting("B");
myGreeting("C");



//creating a function to return a division

function remainder(x1, x2)
{
    let rem1 = x1 % x2;
    console.log(rem1); //return x1, x2;

}

remainder(10,3);