<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Incluir el autoloader de Composer
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Verificar si es una petición POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Obtener los datos del formulario
$data = json_decode(file_get_contents('php://input'), true);

// Validar datos requeridos
if (empty($data['nombre']) || empty($data['email']) || empty($data['mensaje'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan campos requeridos']);
    exit;
}

// Crear una nueva instancia de PHPMailer
$mail = new PHPMailer(true);

try {
    // Configuración del servidor
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // O el servidor SMTP de GoDaddy
    $mail->SMTPAuth = true;
    $mail->Username = 'tu_correo@gmail.com'; // Tu correo
    $mail->Password = 'tu_contraseña_de_aplicacion'; // Tu contraseña
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';

    // Configuración del correo
    $mail->setFrom($data['email'], $data['nombre']);
    $mail->addAddress('info@cruxes.org', 'Cruxes de Luz');
    $mail->addReplyTo($data['email'], $data['nombre']);
    
    $mail->isHTML(true);
    $mail->Subject = 'Nuevo mensaje de contacto - Cruxes de Luz';

    // Crear el cuerpo del mensaje
    $message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; }
        </style>
    </head>
    <body>
        <div class='container'>
            <h2>Nuevo mensaje de contacto</h2>
            <div class='field'>
                <span class='label'>Nombre:</span> {$data['nombre']}
            </div>
            <div class='field'>
                <span class='label'>Email:</span> {$data['email']}
            </div>
            <div class='field'>
                <span class='label'>Teléfono:</span> " . ($data['telefono'] ?? 'No especificado') . "
            </div>
            <div class='field'>
                <span class='label'>Tipo de contacto:</span> {$data['tipoContacto']}
            </div>
            <div class='field'>
                <span class='label'>Mensaje:</span><br>
                " . nl2br(htmlspecialchars($data['mensaje'])) . "
            </div>
        </div>
    </body>
    </html>
    ";

    $mail->Body = $message;
    $mail->AltBody = strip_tags($message); // Versión de texto plano

    // Enviar el correo
    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Correo enviado correctamente']);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al enviar el correo: ' . $mail->ErrorInfo]);
}
?> 