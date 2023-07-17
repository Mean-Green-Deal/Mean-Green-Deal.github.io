<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $firstName = $_POST["firstname"];
    $lastName = $_POST["lastname"];
    $email = $_POST["studentemail"];
    $subject = $_POST["subject"];

    // Set up the email content
    $to = $email; // Replace with the email address you want to receive the contact messages
    $subject = "Contact Form Submission from $firstName $lastName";
    $message = "Name: $firstName $lastName\n";
    $message .= "Email: $email\n";
    $message .= "Subject: $subject\n";

    // Set the From header to your business email address
    $headers = "From: meangreendeal@gmail.com"; // Replace with your business email address

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for contacting us! We will get back to you soon.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
