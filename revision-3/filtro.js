// Abraham Castillo Pérez
// Alejandro Montellano

/**
 *  Este aplicacion tiene como funcion  filtrar la busqueda de un articulo ya sea por color o tipo
 *  busca dentro del array si existe el articulo, y crea un nuevo listado de los articulos o articulo 
 * que ha encontrado.
 */

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]
// ------ Tenia getElementByName no existe , se cambia por el correcto
// --- -> getElementById("lista-de-productos");
const li = document.getElementById("lista-de-productos");
let $i = document.querySelector('input');

for (let i = 0; i < productos.length; i++) {
  // se cambian las definiciones var por let para las variables
  let d = document.createElement("div")
  d.classList.add("producto")

  let ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}


// Se borra la invocacion de funcion displayProductos(productos);  no esta definida 
// y no tiene ningun proposito en el codigo.
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  $i = document.querySelector('input').value;
  
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  