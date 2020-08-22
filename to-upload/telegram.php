<?php

/* https://api.telegram.org/bot1305387734:AAFzS5ZNSTqqP2OsXXXrm6WAcv5mOSXUElg/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
// Были заморочки, не хотел ничего отправлять, в итоге оказалось что это стал какой-то "супер чат"
// и в нем другой id, это тебе записка, если вдруг забудешь старый склекротик)
// https://api.telegram.org/
// bot1305387734:AAFzS5ZNSTqqP2OsXXXrm6WAcv5mOSXUElg/
// sendMessage?chat_id=-1001468968431&parse_mode=html&text=texttexttextjgk

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];
$token = "1305387734:AAFzS5ZNSTqqP2OsXXXrm6WAcv5mOSXUElg";
$chat_id = "-1001468968431";
// $chat_id = "-429802416";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Message' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  // header('Location: thanks.html');
  echo "Good";
} else {
  echo "Error";
}
?>