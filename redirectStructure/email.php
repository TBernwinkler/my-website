<?php

// config
$target = 't.bernwinkler@gmail.com';
$sender = 'thomas.bernwinkler@gmx.de';
$senderName = 'My Homepage';
$subject = 'Contact Form';
// little security feature
$allowedOrigin = 'http://thom4s.bplaced.net';

if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] == $allowedOrigin && $_SERVER['REQUEST_METHOD'] === "POST"){
	$headers = array();
	$headers[] = "From: ".mb_encode_mimeheader($senderName, "utf-8", "Q")." <".$sender.">";
	$headers[] = "MIME-Version: 1.0";
	$headers[] = "Content-Type: text/html; charset=utf-8";
	$headers[] = "Content-transfer-encoding: 8bit";
	
	$mailText = "";
	$formFirstName = $_POST['firstName'];
    $formLastName = $_POST['lastName'];
    $formEmail = $_POST['email'];
    $formPhone = $_POST['phone'];
    $formMessage = $_POST['message'];
    $formReason = $_POST['reason'];
	$result['success'] = false;

	if ($formFirstName !== "" && $formLastName !== "" && $formEmail !== "" && $formMessage !== "" && $formReason !== "") {
	    $mailText = "<h1 style=\"color: #2C5F96;margin-left: 25px\">Automated Info Message From Contact Form</h1>
                     <p style=\"color: #2C5F96; margin-left: 25px;\" >A user on your website filled in the following data of your contact form</p>
                     <img style=\"margin-left: 25px;margin-bottom: 10px\" src=\"http://thom4s.bplaced.net/assets/img/home/entrance-576.jpg\" width=\"500px\">

                     <table width=\"500px\" cellpadding=\"10\" style=\"color: #2C5F96; margin-left: 25px;\">
                         <thead style=\"background: #bababa\">
                             <th>Label</th>
                             <th>Value</th>
                         </thead>
                         <tbody style=\"background: #dddddd;\">
                             <tr>
                                 <td>First Name</td>
                                 <td>" . $formFirstName . "</td>
                             </tr>
                             <tr>
                                 <td>Last Name</td>
                                 <td>" . $formLastName ."</td>
                             </tr>
                             <tr>
                                 <td>Email</td>
                                 <td>" . $formEmail . "</td>
                             </tr>
                             <tr>
                                 <td>Phone</td>
                                 <td>" . $formPhone ."</td>
                             </tr>
                             <tr>
                                 <td>Reason</td>
                                 <td>" . $formReason . "</td>
                             </tr>
                             <tr>
                                 <td>Message</td>
                                 <td>" . $formMessage . "</td>
                             </tr>
                         </tbody>
                     </table>

                     <p style=\"color: #2C5F96; margin-top: 50px; margin-left: 50px;\">Cheers,</p>
                     <p style=\"color: #2C5F96; font-family: 'Comic Sans MS', 'Comic Sans', cursive; margin-left: 50px;\">Your automated email service</p>";
	}

	if ($mailText !== "") {
		$mailResult = mail (
			$target,
			mb_encode_mimeheader($subject, "utf-8", "Q"),
			$mailText,
			implode("\n", $headers)) or die("Could not send email");
		if ($mailResult) {
		    $result['success'] = true;
		}
	}
	exit(json_encode($result));
} else {
	echo "
	<!DOCTYPE html>
	<html>
	  <head>
		<meta http-equiv=\"Refresh\" content=\"0; url=http://thom4s.bplaced.net\" />
	  </head>
	  <body>
		<p>Please follow <a href=\"http://thom4s.bplaced.net\">this link</a>.</p>
	  </body>
	</html>";
}
?>
