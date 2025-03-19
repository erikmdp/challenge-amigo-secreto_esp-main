// Crear una lista para almacenar los nombres de los amigos
let amigos = [];

/**
 * agregarAmigo es una funcion para agregar nombres a la lista de amigos
 */
function agregarAmigo() {
    // Primero obtengo la entrada y su valor
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimino espacios en blanco antes o despues del nombre para evitar confusiones

    // Verifico que el nombre no esté vacío y que no esté duplicado en la lista
    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre); // Agrego el nombre a la lista
        actualizarLista(); // Actualizo la lista en la interfaz
    }

    // Limpio el campo de entrada
    input.value = "";
}

/**
 * actualizarLista es una función para actualizar la lista de nombres en la interfaz
 */
function actualizarLista() {
    const lista = document.getElementById("listaAmigos"); // Obtengo la lista del HTML
    lista.innerHTML = ""; // Limpio la lista antes de actualizar

    // Recorro la lista de amigos y agrego cada uno como un elemento <li>
    amigos.forEach((amigo) => {
        const li = document.createElement("li"); // Creo un elemento de lista
        li.textContent = amigo; // Asigno el nombre como contenido de la lista
        lista.appendChild(li); // Agrego el elemento a la lista en el HTML
    });
}

/**
 * sortearAmigo es una función para sortear un nombre de la lista de amigos
 */
function sortearAmigo() {
    // Verifico que la lista no esté vacía antes de hacer el sorteo
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear."); // Muestro un alerta si no hay nombres
        return;
    }

    // Genero un número aleatorio dentro del rango de la lista
    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceGanador]; // Obtengo el nombre ganador

    // Mostro el resultado en la interfaz
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El ganador es: <strong>${ganador}</strong> </li>`;
}