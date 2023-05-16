/**
 * Esta aplicacion muestra un formulario básico con Nombre, Edad y Nacionalidad
 * Al ingresar los datos, enviamos los formularios con el boton de enviar
 * el cual guarda los datos ingresados y los imprime abajo en una tarjeta simple
 * con un boton para borrar al invitado en caso de estar repetido o haber ingresado 
 * mal sus datos o en especifico, ya no invitar a esa persona
 */

// Faltaba dar un formato de identacion general al código para diferenciar bloques
// formulario declarado como var, debe estar declarado como const por ser un objeto
// y el nombre form no corresponde al id de la etiqueta form de html
const formulario = document.querySelector("#formulario");

formulario.onsubmit = function (event) {
  // la variable age ya fue declarada para usarla en el formulario, se procede a cambiar un nombre
  // descriptivo para el metodo prevent();
  // Y la funcion prevent(); debe ser preventDefault
  event.preventDefault();


  //----- Declaradas con var y con nombres no especificos, deben declararse como objetos const y nombres explicitos
  const name = formulario.elements[0]
  const age = formulario.elements[1]
  const nationality = formulario.elements[2]

  var nombre = name.value
  var edad = age.value

  var i = nationality.selectedIndex
  var nacionalidad = nationality.options[i].value
  //console.log(nombre, edad)
  //console.log(nacionalidad)

  if (nombre.length === 0) {
    name.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    age.classList.add("error")
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}
/*
Se borró codigo para agregar boton repetido
fuera de la funcion agregarInvitado
*/

//-------- asigna los valores al nuevo div -------
/**
 *  La definicion de funciones pueden ir afuera de otras funciones donde
 * van a ser declaradas
 */
function crearElemento(descripcion, valor) {
  console.log(descripcion, valor);
  const spanNombre = document.createElement("span")
  //--- inputNombre es una etiqueta de texto entonces la etiqueta input no es valida, debe ser span o p
  const inputNombre = document.createElement("span")
  const espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
  // input nombre no es un input asi que se debe asignar con textContent o InnerText
  inputNombre.textContent = valor
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
}

function agregarInvitado(nombre, edad, nacionalidad) {
  //console.log(nombre, edad, nacionalidad);
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  //---- debe ir declarado con const por recibir un objeto
  const lista = document.getElementById("lista-de-invitados")

  const elementoLista = document.createElement("div")
  //  classList added no existe, debe ser classList.add("clase");
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)

  /*
  Se borro codigo para crear elementos para
  Imprimir los invitados fuera de una funcion ya 
  Declarada para imprimir los invitados
  */

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)

  //------ funcionalidad para borrar elemento------
  const botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  const corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}