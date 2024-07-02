import { XMLHttpRequest } from 'xmlhttprequest-ts';
import { IGeneral } from './ts/models/response';
import { ICharacter } from './ts/models/caracter';
import { ILocation } from './ts/models/location';

var API = 'https://rickandmortyapi.com/api/character/';
var xhttp: XMLHttpRequest = new XMLHttpRequest();

function fetchData<T>(url_api: string) {
  return new Promise<T>((res, rej) => {
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200)
          res(JSON.parse(xhttp.responseText));
        else return rej(url_api);
      }
    }
    xhttp.open('GET', url_api, true);
    xhttp.send();
  });
};


fetchData<IGeneral>(API)
.then(async (d) => {
  console.log('Primer Llamado...');
  const f = await fetchData<ICharacter>(API+d.results[0].id);
  console.log('Segundo Llamado...');
  const h = await fetchData<ILocation>(f.origin.url);
  console.log('Tercer Llamado...');
  console.log(`Personajes: ${d.info.count}`);
  console.log(`Primer Personaje: ${f.name}`);
  console.log(`Dimensión: ${h.dimension}`);
})
.catch(error => {
  console.log(`Error ${error}`);
});