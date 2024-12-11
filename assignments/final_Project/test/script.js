
const my_form = document.forms.cert;


function display(){
//const userName = document.forms.cert.yourName.value;

var userName = my_form.yourName.value
//console.log(userName);

    window.awardee = userName;

    //awardee = document.form1.name.value;

    // Open the child window
    window.open('certificate.html', 'NewWin', 'toolbar=no,status=no,titlebar=no,width=800,height=600');

    // reset the value
     my_form.yourName.value = "";

}