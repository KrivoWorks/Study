<?php // говорим серверу - будет запускаться php файл

// переменные
$name = $_POST['name']; // берём инпут у которого name = name 
$phone = $_POST['phone'];
$email = $_POST['email'];
// в php мы не можжем использовать переменную - mail
// поэтому её часто называют email

// php скрипт
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

// У каждого почтового сервиса есть isSMTP сервер
// скрипт возьмёт почту, залогинится под данными которые мы укажем и как буд-то с неё отправит письмо
$mail->isSMTP();                       // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru'; 	   // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                // Enable SMTP authentication
$mail->Username = 'krivo-test@mail.ru';                  // Наш логин
$mail->Password = 'k5DgNTyrRS0gwPAGG4Ca';                  // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';             // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                     // TCP port to connect to

// krivo-test@mail.ru
// Fyyf1970
// k5DgNTyrRS0gwPAGG4Ca - специальный пароль
 
$mail->setFrom('krivo-test@mail.ru', 'Pulse');   								// От кого письмо 
$mail->addAddress('paheb76686@toudrum.com');     									// Add a recipient
//$mail->addAddress('ellen@example.com');               	// Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         	// Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    	// Optional name
$mail->isHTML(true);                                  		// Set email format to HTML

$mail->Subject = 'Данные';
// синтаксис php
// в php . означает конкатенацию
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

// чтобы отработал ajax запрос
if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>