firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();
var Name = document.getElementById("name"); 
var Email = document.getElementById("email");;
var subject = document.getElementById("subject");
var message = document.getElementById("message");
var time = new Date().toLocaleTimeString(); // 11:18:48 AM
var date = new Date().toLocaleDateString(); // 11/16/2015 
var x=0;

function submitOnClick(){
console.log("x=" + x);
if(x){
	firebaseRef.child("MESSAGES").push(
		{
		username: Name,
    	email: Email,
    	Subject:subject,
    	Message:message,
    	Time:time,
    	Date:date
		});
		submitted();
		clearfields()	
	}
	else{
		console.log("fields are empty");
		alert("Data fields are empty");
	}
}

function submitted(){
	document.getElementById("sent").innerHTML = "Your Message has been Sent to User";
	setTimeout(function(){
    document.getElementById("sent").innerHTML = '';
	}, 10000);
}

function validname(){
	
	if(Name.value=="" || Name.value==null){
		x=0;
		Name.style.border="2px solid red";
	}
	else {
		x=1;
		Name.style.border="0px solid green"
	}
}

function validemail(){
	if(Email.value=="" || Email.value==null){
	Email.style.border = "2px solid red";
	x=0;
	}
else{
	x=1;
	Email.style.border = "0px solid green";
	}
}

function validsubject(){
	if(subject.value=="" || subject.value==null)
	{
		x=0;
		subject.style.border = "2px solid red";
	}
else{
	x=1;
	subject.style.border = "0px solid green";
}
}

function validmessage(){
	if(message.value=="" || message.value==null){
	message.style.border = "2px solid red";
	x=0;
	}
else{
	x=1;
	message.style.border = "0px solid green";
}
}

function clearfields(){
	Name.value='';
	Email.value='';
    subject.value='';
	message.value='';
}
