// Variables
let amigos = [];
let juegoRealizado = false;
const nombreRegex = /^[A-Za-z\s]{2,}$/;

// Agrega nombres a lista amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if (!nombreRegex.test(nombre)) {
        alert("El nombre de tu Amigo deben ser solo letras y al menos 2 caracteres.");
        input.value = "";
        return;
    }
    amigos.push(nombre);
    actualizarListaNombres();
    input.value = "";
}

// Actualiza lista nombres
function actualizarListaNombres() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach((nombre) => {
        let listItem = document.createElement("li");
        listItem.textContent = nombre;
        listaAmigos.appendChild(listItem);
    });
}

// Realiza sorteo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debes ingresar los nombres de tus amigos...");
        return;
    }
    let randomIndex = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[randomIndex];
    document.getElementById("resultado").innerHTML = `<li>Felicidades!!, tu Amigo Secreto es: ${amigoSeleccionado}</li>`;
    sorteoRealizado = true; 
}

// Reinicia lista amigos
function reiniciarLista() {
    amigos = []; 
    actualizarListaNombres();
    document.getElementById("resultado").innerHTML = "";
    sorteoRealizado = false;
}
