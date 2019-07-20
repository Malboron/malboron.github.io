<?php

if (isset($_POST["name"]) && isset($_POST["phonenumber"]) && isset($_POST["mail"]) && isset($_POST["message"]) ) { 
        // Формируем массив для JSON ответа
        $result = array(
            'name' => $_POST["name"],
            'phonenumber' => $_POST["phonenumber"],
            'mail' => $_POST["mail"],
            'message' => $_POST["message"]
        ); 
        // Переводим массив в JSON
        echo json_encode($result); 
        mail('montazh-master@inbox.ru', 'Письмо от Монтаж Мастер', 
          'Вам написал(-а): '.$_POST["name"].'<br />Номер: '.$_POST["phonenumber"].'<br />Почта: '.$_POST["mail"].'<br /> Cообщение: '.$_POST["message"],"Content-type:text/html;charset=utf-8");
    }
?>