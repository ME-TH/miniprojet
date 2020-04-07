<?php

$feedEmail = $_POST['feedMail'];
$feedText = $_POST['feedText'];

//database connection 

$conn = new mysqli('localhost', 'root', '', 'testFeed')

//check connection

if($conn->connect_error){
    die('connection failed : '.$conn->connect_error);
}
    else{ 
        $stmt = $conn->prepare("insert into registration (feedMail, feedText) values(?, ?)")

        $stmt->bind_param("ss", $feedEmail, $feedText)
        $stmt->execute();
        echo "registration succefully ...."
        $stmt->close();
        $conn->close();
    }


?>