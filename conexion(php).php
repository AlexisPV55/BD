<?php
// add_to_cart.php

// Obtener los datos JSON enviados
$data = file_get_contents("php://input");

// Decodificar los datos JSON
$productData = json_decode($data, true);

// Procesar los datos
if ($productData) {
    // Aquí puedes agregar lógica para guardar el producto en la base de datos
    // Por ahora, simplemente se devolverá una respuesta de éxito
    echo json_encode([
        "status" => "success",
        "data" => $productData
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "No se recibieron datos válidos"
    ]);
}
?>
