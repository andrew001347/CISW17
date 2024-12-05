



function display(){
const userName = document.forms.cert.yourName.value;
//console.log(userName);

    window.awardee = userName;

    // Open the child window
    window.open('certificate.html', 'NewWin', 'toolbar=no,status=no,titlebar=no,width=800,height=600');

    // Clear the form input field
    document.forms.cert.yourName.value = '';

}