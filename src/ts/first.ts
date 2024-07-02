import { XMLHttpRequest } from 'xmlhttprequest-ts';
import { IGeneral } from './models/response';
import { ICharacter } from './models/caracter';
import { ILocation } from './models/location';

var A = 'https://rickandmortyapi.com/api/character/';
var B = new XMLHttpRequest();

function X(a: string, b: Function) {
  B.onreadystatechange = function () {
    if (B.readyState == 4) {
      if (B.status === 200)
        b(null, JSON.parse(B.responseText));
      else return b(a);
    }
  };
 
  B.open('GET', a, true);
  B.send();
};

X(A, function (c: string, d: IGeneral) {
  if (c) return console.error('Error' + ' ' + c);
  console.log('Primer Llamado...');
  X(A + d.results[0].id, function (e: string, f: ICharacter) {
    if (e) return console.error('Error' + ' ' + e);
    console.log('Segundo Llamado...');
    X(f.origin.url, function (g: string, h: ILocation) {
      if (g) return console.error('Error' + ' ' + g);
      console.log('Tercer Llamado...');
      console.log('Personajes:' + ' ' + d.info.count);
      console.log('Primer Personaje:' + ' ' + f.name);
      console.log('Dimensión:' + ' ' + h.dimension);
    });
  });
});

