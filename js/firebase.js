firebase.initializeApp(config);

var time = new Date().toLocaleTimeString(); // 11:18:48 AM
var date = new Date().toLocaleDateString(); // 11/16/2015 
//document.getElementById("sendonclick").addEventListener("click", submitOnClick);

function contactuser(){

	var Name = document.getElementById("name").value; 
	var Email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	//alert("Button Clicked" + "Name: " + Name + "Email:" +Email + " subject:"+ subject );
	if(Name.value == null || Email.value == null || subject.value == null || message.value == null){
		window.alert("one or more fields left empty");
		return;
	}
	
	firebase.database().ref("MESSAGES/"+ Name +" "+time).set({
    username: Name,
    email: Email,
    subject:subject,
    Message:message,
    Time:time,
    Date:date
  }).then(function(){
  	alert("ok");
  	console.log("sent to firebase");
  	window.location.href="https://maheshmnj.github.io/js/ResponseSent.html";
  })
  .catch(function(error){  	
  	alert("error:" + error);
   console.log("Message not sent");
  });

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
