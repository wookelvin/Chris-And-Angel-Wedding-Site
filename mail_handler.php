<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Christopher &amp; Angel</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="css/animsition.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>
    <div class="fullwidth-container full-page floral animsition">
      <div class="break"></div>
      <div class="break"></div>
      <div class="break"></div>
      <div class="card card-invite">
<?php
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
if(isset($_POST['address'])) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "kelvin.woo@gmail.com,angelandchris2016@gmail.com";
    $email_subject = "RSVP - Chris & Angel Wedding";
     
     
    
     
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['address'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
     
    $name = $_POST['name']; 
    $yesno = $_POST['yesno']; 
    $meal = $_POST['meal']; 
    
    $email_from = $_POST['address']; 
  
    $guest = $_POST['guest']; 
    $comments = $_POST['msg'];
    $aller = $_POST['allergies'];
  
    $guest1name = $_POST['name1'];
    $guest2name = $_POST['name2'];
    $guest3name = $_POST['name3'];
    $guest4name = $_POST['name4'];
    $guest5name = $_POST['name5'];
    $guest6name = $_POST['name6'];
    $guest7name = $_POST['name7'];
  
    if ($_POST['veg1'] == ""){$guest1meal = "no";}else{$guest1meal = "yes";}
    if ($_POST['veg2'] == ""){$guest2meal = "no";}else{$guest2meal = "yes";}
    if ($_POST['veg3'] == ""){$guest3meal = "no";}else{$guest3meal = "yes";}
    if ($_POST['veg4'] == ""){$guest4meal = "no";}else{$guest4meal = "yes";}
    if ($_POST['veg5'] == ""){$guest5meal = "no";}else{$guest5meal = "yes";}
    if ($_POST['veg6'] == ""){$guest6meal = "no";}else{$guest6meal = "yes";}
    if ($_POST['veg7'] == ""){$guest7meal = "no";}else{$guest7meal = "yes";}
  
    
     
    
    
    //$email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
    
    $email_message .= "Someone special has responded on your website at http://chris-and-angel.com\n";
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Attending?: ".clean_string($yesno)."\n";
    
    
    if (strcmp($yesno,"yes") == 0){
      $email_message .= "Number of Extra Guests: ".clean_string($guest)."\n";
      
      if ($guest >= 0){
      $email_message .= "Guest 1 Name: ".clean_string($guest1name)."\n";
      $email_message .= "Guest 1 Vegetarian: ".clean_string($guest1meal)."\n";
      }

      if ($guest >= 1){
      $email_message .= "Guest 2 Name: ".clean_string($guest2name)."\n";
      $email_message .= "Guest 2 Vegetarian: ".clean_string($guest2meal)."\n";
      }

      if ($guest >= 2){
        $email_message .= "Guest 3 Name: ".clean_string($guest3name)."\n";
        $email_message .= "Guest 3 Vegetarian: ".clean_string($guest3meal)."\n";
      }

      if ($guest >= 3){
        $email_message .= "Guest 4 Name: ".clean_string($guest4name)."\n";
        $email_message .= "Guest 4 Vegetarian: ".clean_string($guest4meal)."\n";
      }

      if ($guest >= 4){
        $email_message .= "Guest 5 Name: ".clean_string($guest5name)."\n";
        $email_message .= "Guest 5 Vegetarian: ".clean_string($guest5meal)."\n";
      }
      if ($guest >= 5){
        $email_message .= "Guest 6 Name: ".clean_string($guest6name)."\n";
        $email_message .= "Guest 6 Vegetarian: ".clean_string($guest6meal)."\n";
      }
      if ($guest >= 6){
        $email_message .= "Guest 7 Name: ".clean_string($guest7name)."\n";
        $email_message .= "Guest 7 Vegetarian: ".clean_string($guest7meal)."\n";
      }

      $email_message .= "Food Allergies: ".clean_string($aller)."\n";
    }
    $email_message .= "Comments: ".clean_string($comments)."\n";
     
     
  $email_from = "donotrespond@wookiestudios.com";
  // create email headers
  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
          <h1>Your form has been successfully submitted. </h1>
          <p>Did you make an error? Simply go back and resubmit the form again.</p>
          
          <?php
            /*echo "emailing to: ".$email_to."<br>";
            echo "subject: ".$email_subject."<br>";
            echo "Headers: ".$headers."<br>";
            echo $email_message;*/
          ?>
 
<?php
} 
?>
        <a href="javascript:history.back()" class="btn1">Go back</a>
      </div>
    </div>
    <script src='//code.jquery.com/jquery-1.11.3.min.js'></script>
    <script src='js/animsition.min.js'></script>
    <script src='js/custom2.js'></script>
  </body>
</html>