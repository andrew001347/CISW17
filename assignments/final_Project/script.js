
const my_form = document.forms.cert; 
const printName = document.getElementsByClassName("awardee");
var awardee = window.opener.awardee;

function display(){
    let awardee = document.getElementsByTagName("name").value;

dispWin = window.open('certificate.html', 'NewWin','toolbar=no,status=no,titlebar=no,width=800,height=600')

// send the name over to certificate.html
awardee = document.form1.name.value;

document.write(awardee);
// reset the value
document.form1.name.value = "";

}

