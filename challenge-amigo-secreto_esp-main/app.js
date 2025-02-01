/* 
El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

Fucionalidades:

1. Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

2. Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

3. Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

4. Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

// existen tres ID a saber: 'amigo', 'listaAmigos' y 'resultado'

// variables
let amigos = [];

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
  console.log(amigos);

  if (amigo != "") {
    amigos.push(amigo);
  } else {
    alert("Por favor, ingrese un nombre válido");
  }


}
