firebase.initializeApp(config);

var time = new Date().toLocaleTimeString(); // 11:18:48 AM
var date = new Date().toLocaleDateString(); // 11/16/2015 
//document.getElementById("sendonclick").addEventListener("click", submitOnClick);

function submitForm(){
	var Name = document.getElementById("name").value; 
	var Email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	//alert("Button Clicked" + "Name: " + Name + "Email:" +Email + " subject:"+ subject );
	if (Name == null || Name == "") {
    var nameError = "Please enter your name";
    alert(nameError);
 //   document.getElementById("name_error").innerHTML = nameError; 
    return false;
} 

 if (Email == null || Email == "") {
    var emailError = "Please enter your email";
 //   document.getElementById("email_error").innerHTML = emailError;
    alert(emailError);
    return false;
} 

 if (subject == null || subject == "") {        
    var subjectError = "Please enter your Subject";
 //   document.getElementById("telephone_error").innerHTML = telephoneError;
 	alert(subjectError);
    return false;
}
 if (message == null || message == "") {        
    var messageError = "Please enter your Message";
//    document.getElementById("telephone_error").innerHTML = telephoneError;
	alert(messageError);
    return false;
} 
	
	firebase.database().ref("MESSAGES/"+ Name +" "+time).set({
    username: Name,
    email: Email,
    subject:subject,
    Message:message,
    Time:time,
    Date:date
  }).then(function(){
  	console.log("sent to firebase");
  	window.location.href="https://maheshmnj.github.io/js/ResponseSent.html";
  })
  .catch(function(error){  	
  	alert("error:" + error);
   console.log("Message not sent");
  });

   return true;
 }


function submitted(){
	document.getElementById("sent").innerHTML = "Your Message has been Sent to User";
	setTimeout(function(){
    document.getElementById("sent").innerHTML = '';
	}, 10000);
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
