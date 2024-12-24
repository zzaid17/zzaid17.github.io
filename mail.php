<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "zaidhoda@gmail.com";

if (mail($recipient, "Website Email", $message, $mailheader)) {
    echo "Message sent successfully!";
} else {
    die("Error sending email.");
}

?>