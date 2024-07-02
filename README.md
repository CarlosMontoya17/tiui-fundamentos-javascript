# tiui-fundamentos-javascript

En Tiui Soluciones, estamos en la búsqueda del mejor talento para unirse a nuestro equipo. Esta prueba tiene como objetivo medir tus habilidades en JavaScript y ver cómo puedes resolver los desafíos propuestos en el archivo `index.js`. ¡Demuestra tus capacidades y sé parte de un equipo innovador y dinámico!

## Instalación

```
npm install
```
## Ejecución

```
npm run start
```

## Problemas a Resolver

### Primer problema
La aplicación tiene errores que no permiten ejecutarla. Lee detenidamente el código y determina dónde se encuentran los errores al ejecutarlo en la consola.

#### Descripción de resolución
El status `200` de respuesta debe de ser un `int` en vez de un `string` o bien cambiar la comparación a `==` para comparar unicamente los valores.

En el argumento `d (data1)` del callback `b (callback)` de la funcion `X (fetchData)` espera un objeto y no un `string`.

La función `JSON.parse` del `string` decidí ponerlo dentro de la funcion `X (fetchData)` dónde se invoca al callback `b (callback)` ya que de esa forma sólo se ejecuta una vez.

### Segundo Problema
Una vez que tu aplicación ya esté funcionando, convierte el código a ECMAScript 6 (ES6):
-[x] Arrow Functions
-[x] Template Strings

### Tercer Problema
Transforma el código escrito en ECMAScript 6 (ES6) para que funcione con promesas y así evitar el Callback Hell del final.
-[x] X es un Promise

### Cuarto Problema
Optimiza el código para mejorar su legibilidad y eficiencia.
-[x] Async/Await
-[x] Redirigir errores al Catch principal

### Quinto Problema
Haz un fork y envia tu solución en un Pull Request (PR) utilizando la plantilla proporcionada.


### Puntos Adicionales
Si conviertes el código a TypeScript, obtendrás puntos adicionales.
- [x] TypeScript

## Instalación
Instalar dependencias

```shell
npm i
```

## Uso
Ejecutar código TypeScript
```shell
npm run ts
```

## Descripción de Variables y Funciones en `index.js`

Para ayudarte a entender el código, aquí tienes una descripción de las variables y funciones utilizadas en el archivo `index.js`:

- `API`: URL base de la API de Rick and Morty.
- `xhttp`: Nueva instancia de `XMLHttpRequest`.
- `fetchData(url_api, callback)`: Función para realizar una solicitud HTTP. Toma como parámetros la URL (`url_api`) y un callback (`callback`).
- `error1`, `error2`, `error3`: Variables de error en los callbacks.
- `data1`, `data2`, `data3`: Variables de datos en los callbacks.

# License
tiui-fundamentos-javascript is released under the [MIT License](https://opensource.org/licenses/MIT).
