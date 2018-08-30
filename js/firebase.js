firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

function submitOnClick(){
	var Name = document.getElementById("name").value;
	var Email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	var time = new Date().toLocaleTimeString(); // 11:18:48 AM
	var date = new Date().toLocaleDateString(); // 11/16/2015


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

	function submitted(){
		document.getElementById("sent").innerHTML = "Your Message has been Sent to User";
		setTimeout(function(){
    	document.getElementById("sent").innerHTML = '';
	}, 10000);
}

function clearfields(){
	 document.getElementById("name").value='';
	 document.getElementById("email").value='';
     document.getElementById("subject").value='';
	 document.getElementById("message").value='';
}