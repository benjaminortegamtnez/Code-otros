const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); /* agregué punto */
const $b = document.querySelector('.blog'); /* Elimine el #, agregué punto */
const $l = document.querySelector('.location'); /* agregué punto */

async /* agregue async */function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json() /* faltaba esta linea de codigo para que se pueda realizar el async */
  console.log(data);
  $n.textContent = `${data.name}`; /* uso incorrecto de comillas  */
  $b.textContent = `${data.blog}`; /* uso incorrecto de comillas */
  $l.textContent = `${data.location}`;  /* uso incorrecto de comillas */
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);