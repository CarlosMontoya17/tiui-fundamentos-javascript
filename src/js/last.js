var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var API = 'https://rickandmortyapi.com/api/character/';
var xhttp = new XMLHttpRequest();

function fetchData(url_api){
  return new Promise((res, rej) => {
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200)
          res(JSON.parse(xhttp.responseText));
        else return rej(url_api);
      }
      else return rej(url_api);
    }
    xhttp.open('GET', url_api, false);
    xhttp.send();
  });
};


fetchData(API)
.then(async (d) => {
  console.log('Primer Llamado...');
  const f = await fetchData(API+d.results[0].id);
  console.log('Segundo Llamado...');
  const h = await fetchData(f.origin.url);
  console.log('Tercer Llamado...');
  console.log(`Personajes: ${d.info.count}`);
  console.log(`Primer Personaje: ${f.name}`);
  console.log(`Dimensión: ${h.dimension}`);
})
.catch(error => {
  console.log(`Error ${error}`);
});