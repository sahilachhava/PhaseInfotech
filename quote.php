<?php
if(isset($_POST["send"]))
{
$name       = $_POST['name']; 
$cname       = $_POST['cname']; 
$from       = $_POST['email']; 
$service       = $_POST['service']; 
$budget       = $_POST['budget']; 
$phone       = $_POST['phone']; 
$message    = $_POST['message']; 

// Edit this path if PHPMailer is in a different location.
require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->isSMTP();
/*
 * Server Configuration
 */

$mail->Host = 'smtp.gmail.com'; // Which SMTP server to use.
$mail->Port = 587; // Which port to use, 587 is the default port for TLS security.
$mail->SMTPSecure = 'tls'; // Which security method to use. TLS is most secure.
$mail->SMTPAuth = true; // Whether you need to login. This is almost always required.
$mail->Username = "ask.phaseinfotech@gmail.com"; // Your Gmail address.
$mail->Password = ""; // Your Gmail login password or App Specific Password.

/*
 * Message Configuration
 */

$mail->setFrom('$from', 'Quatation'); // Set the sender of the message.
$mail->addAddress('ask.phaseinfotech@gmail.com', 'Phase Infotech'); // Set the recipient of the message.
$mail->Subject = 'Phase Infotech Quatation'; // The subject of the message.

/*
 * Message Content - Choose simple text or HTML email
 */

// Choose to send either a simple text email...
$mail->Body = "Hello! You have a quatation has been submitted by:
Name:"." ".$name."
Company Name:"." ".$cname."
Service:"." ".$service."
Budget:"." ".$budget."
E-mail:"." ".$from."
Phone:"." ".$phone."
Message:"." ".$message."
End of message"; // Set a plain text body.

// ... or send an email with HTML.
//$mail->msgHTML(file_get_contents('contents.html'));
// Optional when using HTML: Set an alternative plain text message for email clients who prefer that.
//$mail->AltBody = 'This is a plain-text message body'; 

// Optional: attach a file
//$mail->addAttachment('images/phpmailer_mini.png');

if ($mail->send()) {
    echo "Your message was sent successfully!";
  	echo "<script>window.location.href = 'quote.html';</script>";
} else {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
}
?>