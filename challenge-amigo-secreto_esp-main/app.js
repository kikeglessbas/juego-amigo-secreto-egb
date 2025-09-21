let listaAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();

    // Solo aceptar texto, no debe haber numeros ni caracteres especiales
    let soloTexto = /^[a-zA-Z\s]+$/;

    //Mensaje de que no se ha ingresado ningun amigo
    if (!soloTexto.test(amigo) || amigo === "") {
        alert("¡Por favor, ingresa un nombre válido!");
        document.getElementById('amigo').value = ''; // Limpiamos el campo
        return;
    }

    // Si se capturó un nombrer válido, se agrega el amigo a la lista
    listaAmigos.push(amigo);
    console.log("Lista de amigos:", listaAmigos);
    document.getElementById('amigo').value = ''; // Limpia el campo
    alert("Amigo agregado: " + amigo);
}

// Función para sortear al amigo secreto, valide sean al menos 2 amigos
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debes ingresar al menos dos amigos para ver el amigo secreto.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];

    // Actualiza el título h2 con el nombre del amigo secreto
    asignaTextoTitulo2('h2', `¡El amigo secreto es ${amigoSecreto}!`);

    console.log("Amigo sorteado:", amigoSecreto);
}

// Actualiza el texto del título h2
function asignaTextoTitulo2(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
