<?php

session_start();

// Configuración de correo electrónico
$para = $_SESSION['correo_para'];
$asunto = 'Confirmación de compra';
$mensaje = 'Su compra ha sido completada con éxito. ¡Gracias por confiar en nosotros!';
$de = 'From: thedropcoffee.mx@gmail.com'; 

if (mail($para, $asunto, $mensaje, $de)) {
    echo "Correo enviado satisfactoriamente";
} else {
    echo "Error al enviar el correo";
}
header("location: ../index.php");
?>
