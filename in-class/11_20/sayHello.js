//get the name from the form and output a custom message
                                //from html form name
const my_form = document.forms.sayHello; 
const message = document.getElementById("message");

//function to create the custom message
function custom_message(e){
    
    //prevent default form action
    e.preventDefault();

    if(my_form.yourName.value == "" ){
        //do nothing, nothing was entered in the input
        alert("No Name");
    }
    else{
       message.innerHTML = `<h2> Hi there, ${my_form.yourName.value}</h2>`;  
    }
    

   


    my_form.yourName.value = "";
}


//adding event listener
my_form.addEventListener('submit', custom_message)
