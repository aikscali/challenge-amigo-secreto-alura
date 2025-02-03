/* 
Fucionalidades:

1. Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

2. Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

3. Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

4. Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

let amigos = [];

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
  console.log(amigos);

  if (amigo != "") {
    amigos.push(amigo);
    actualizarLista();
    document.getElementById("amigo").value = "";
  } else {
    alert("Por favor, ingrese un nombre válido");
  }

}

function actualizarLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  
  for (let i = 0; i < amigos.length; i++) {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = amigos[i];
    listaAmigos.appendChild(nuevoElemento);
    
  }
}

function sortearAmigo() {
  let resultado = document.getElementById("resultado");

  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];
  amigos.splice(indiceAleatorio, 1);
  actualizarLista();

  resultado.innerHTML = ""; 
  let elementoResultado = document.createElement("li");
  elementoResultado.textContent = amigoSorteado;
  resultado.appendChild(elementoResultado);
}
