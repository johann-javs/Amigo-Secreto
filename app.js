// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];
let lista = 0;
let resultado = 0;
let nombresSorteados = [];
let contadorAmigos = 0;


function limpiarCaja(id, axis) {
    let elemento = 0;
    // Limpia el campo de entrada una vez introducido el dato(nombre)
    //Limpia el valor del elemento una vez introducido
    //document.querySelector('#amigo').value = '';
    if (axis == 1) {
        elemento = document.querySelector(id).value = '';
    } else {
        // Limpia el elemento
        elemento = document.querySelector(id);
        elemento.innerHTML = '';
    }
}

function agregarAmigo() {
    // Capturar el valor del elemento(el nombre del amigo)
    let nombre = document.getElementById('amigo').value
    limpiarCaja('#amigo', 1);
    //verificar si se ha introducido un dato vacío
    if (nombre == '') {
        alert('Por favor, inserte un nombre');
    } else {
        amigo.push(nombre);
        // Mostrar el nombre en pantalla
        crearNuevoElemento();
        contadorAmigos++;
    }
}

function sortearAmigo() {
    // Verifica si la lista de amigos se encuentra vacía
    if (lista != '') {
        resultado = document.getElementById('resultado');
        // limpia la lista de amigos en pantalla
        limpiarCaja('#listaAmigos');
        generarAmigoSecreto();
    } else {
        //La lista de amigos se encuentra vacía
        alert('No hay lista de amigos');
    }
}

function crearNuevoElemento() {
    let nuevo_li = 0;
    lista = document.querySelector('#listaAmigos');
    // asegura que el elemento lista se encuentre vacío antes de recibir un nuevo elemento hijo
    lista.innerHTML = '';
    for (let i = 0; i <= amigo.length - 1; i++) {
        //.createElement crea un nuevo elemento (li)
        nuevo_li = document.createElement('li');
        //.textContent te permite acceder y modificar el texto que se muestra dentro de un elemento HTML (elemento li).
        nuevo_li.textContent = amigo[i];
        //.appendChild agrega un nuevo elemento hijo (nuevo_i) dentro del elemento padre almacenado en la variable lista
        lista.appendChild(nuevo_li);
    }
}

function generarAmigoSecreto() {
    // se genera un número aleatorio entre 0 y el tamaño de la lista de amigos
    //donde el número generado se utiliza como indice dentro de la lista de amigos
    //para encontrar el nombre del amigo secreto
    let sorteo = Math.floor((Math.random() * amigo.length - 1)) + 1;
    let amigoSorteado = amigo[sorteo];
    // Verifica si todos los nombres ya fueron sorteado
    if (nombresSorteados.length <= contadorAmigos - 1) {
        // Verifica si un nombre ya fue sorteado
        if (nombresSorteados.includes(amigoSorteado)) {
            //Función de recursividad
            generarAmigoSecreto();
        } else {
            // Si el nombre no ha sido sorteado
            nombresSorteados.push(amigoSorteado);
            resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
        }
    } else {
        //Si todos los nombres ya fueron sorteados
        resultado.innerHTML = 'Ya se sortearon todos los nombres';
    }
}