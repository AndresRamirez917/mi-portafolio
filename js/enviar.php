<?php
error_reporting(0);
$nombre = $_POST['nombre'];
$correo_electronico= $_POST['correo'];
$poblacion = $_POST['asunto'];
$sexo=$_POST['comentario'];



$header = 'From: ' . $correo. ", de la poblacion ".$poblacion."\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su e-mail es: " . $correo . " \r\n";
$mensaje .= "sexo" . $_POST['GrupoOpciones1'] . " \r\n";



$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = AQUÍ PONES TU CORREO;
$asunto = 'AQUÍ LO QUE QUIERAS';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo 'mensaje enviado correctamente';

?>
