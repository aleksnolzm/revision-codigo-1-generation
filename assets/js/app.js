/**********************************************************   
*             Descripcion del Codigo
*             Editor: Alejandro Montellano Nolasco
*   
*   Este programa se encarga de obtener un usuario desde una API pública
*   de GitHub, en el viewport nos mostrara el nombre del usuario, la URL de su blog
*   Y su localizacion (lugar de residencia).
*   
*   Todo esto mediante el consumo de una API mediante Fetch, con una funcion
*   Asincrona Async - Await para poder esperar la respuesta, despues de obtener
*   la informacion del usuario se imprime el resultado en el DOM del HTML mediante
*   párrafos <p></p>
*
*/


const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//  A la variable $n y $b faltaba indicar el tipo de selector clase . ya que # es para id
// y a $l la etiqueta "location" no existe en html asi que es una clase 
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');


//- Es una funcion asincrona, falta determinarla con Async 
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //---- Obtenemos una objeto responde pero falta parsear para obtener nuestro array
  // ----- Y el objeto data no estaba definido
  const data = await response.json(); 
  console.log(data);
  // Imprime la definicion de las variables en string por no tener comillas literales
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);