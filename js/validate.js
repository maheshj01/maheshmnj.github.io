
function val_name(){  // Capitralize
	var name = document.getElementById('first').value;
	var regx = /[A-Z]\w+/;
	if(regx.test(name))
		alert("Valid Success");
	else
		alert("Pattern not matching");
}


function val_email(){
	var regx=/\w+.\w+@\w+.?(com|in|edu|ac|net)/;
	var email = document.getElementById('email').value;
	if(regx.test(email))
		alert("email valid");
	else
		alert("Invalid email");

}