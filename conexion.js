// script.js
function addToCart(productId, productName, productPrice, quantity) {
    // Crear un objeto con los datos del producto
    const productData = {
        id: productId,
        name: productName,
        price: productPrice,
        quantity: quantity
    };

    // Convertir el objeto en una cadena JSON
    const jsonData = JSON.stringify(productData);

    // Crear una solicitud AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "add_to_cart.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Manejar la respuesta del servidor
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log("Respuesta del servidor:", response);
            alert("Producto agregado al carrito: " + response.data.name);
        } else {
            console.error("Error en la solicitud:", xhr.statusText);
        }
    };

    // Enviar la solicitud con los datos JSON
    xhr.send(jsonData);
}

// Ejemplo de uso
addToCart(1, "Camiseta", 19.99, 2);
