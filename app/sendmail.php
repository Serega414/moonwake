<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->Charset = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);
    
    // От кого письмо
    $mail->setFrom('moonw@ke.agency', 'moonwake.agency');
    // кому отправить
    $mail->addAddress('maksishkosergej@gmail.com'); 
    // Тема письма
    $mail->Subject = "Hi! you message!"; 


    // body letter

    $body = '<h1>New Order</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong></p> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong></p> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Сообщение:</strong></p> '.$_POST['message'].'</p>';
    }


    $mail->Body = $body;

    // Отправляем
    if (!$mail->send()) {
        $message = 'Oops!!! Try again';
    } else {
        $message = 'Success!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>