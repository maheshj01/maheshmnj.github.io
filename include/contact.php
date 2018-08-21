<?php  
// include_once 'include/connect.php';

    $servername = "localhost";
    $username = "id1171497_root";
    $password = "mahesh@admin";
    $database = "id1171497_connectform";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);
    
    //mysqli_select_db("id1171497_connectform",$conn);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else{ 
    echo "Connected successfully";
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $sql= "INSERT INTO connect_form (Name,Email,Subject,Message) VALUES ('$name','$email','$subject','$message');";
    mysqli_query($conn,$sql);
    echo "Query fired INsert Success";
    // $mailto = "maheshmn121@gmail.com";
    // $headers = "From:".$email;
    // $text = "You have received a mail from" .$name;

    // mail($mailto,$subject,$text,$headers);
    headers("Location../index.html?connected ");
    $conn->close();

?> 