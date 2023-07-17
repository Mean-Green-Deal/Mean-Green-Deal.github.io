<?php

if(isset($_POST['submit'])){
    $Fname = $_POST['firstName']
    $Lname = $_POST['lastName']
    $Email = $_POST['studentEmail']
    $Subject = $_POST['subject']

    $mailTo = "meangreendeal@gmail.com";
    $headers = "From: ".$Email;
    $txt = "You have received an email from ".$Fname.".\n\n".$Subject;

    mail($mailTo, $Lname, $txt, $headers);
    header("Location: contact.html?mailsend");
}