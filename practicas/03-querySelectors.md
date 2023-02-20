# Practicá con Query Selectors

El objetivo de esta práctica es aprender a utilizar querySelectorAll para seleccionar un conjunto de elementos HTML y manipular su contenido utilizando JavaScript.

### Pasos:
* 1-. Crea un archivo HTML y agrega el siguiente código:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Práctica con querySelectorAll</title>
  </head>
  <body>
    <ul>
      <li class="numero">Elemento</li>
      <li class="numero">Elemento</li>
      <li class="numero">Elemento</li>
      <li class="numero">Elemento</li>
      <li class="numero">Elemento</li>
    </ul>
    <script src="script.js"></script>
  </body>
</html>
```

* 2-. Agrega un atributo class a cada elemento de lista de "numero-1" a "numero-5", respectivamente.
* 3-. Abre el archivo HTML en un navegador web y verifica que los elementos de la lista se muestran correctamente.
* 4-. Abre el archivo HTML en un editor de código.
Crea un archivo JavaScript vacío y vincúlalo al archivo HTML utilizando la etiqueta script.
* 5-. En el archivo JavaScript, utiliza querySelectorAll para seleccionar todos los elementos con la clase "numero".
* 6-. Utiliza un bucle  para iterar sobre los elementos seleccionados.
* 7-. Dentro del bucle, obtén el número actual `i`
* 8-. Agrega el texto `Elemento de la lista ` + el número actual e imprime el contenido usando innerHTML.
* 9-. Guarda los archivos HTML y JavaScript.
* 10-. Abre el archivo HTML en un navegador web y verifica que los elementos de la lista se han actualizado con las cadenas de texto correspondientes que enumeran cada elemento de la lista.

Resultado esperado:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Práctica con querySelectorAll</title>
  </head>
  <body>
    <ul>
      <li class="numero">Elemento de la lista 1</li>
      <li class="numero">Elemento de la lista 2</li>
      <li class="numero">Elemento de la lista 3</li>
      <li class="numero">Elemento de la lista 4</li>
      <li class="numero">Elemento de la lista 5</li>
    </ul>
    <script src="script.js"></script>
  </body>
</html>
```

`Nota: Puedes utilizar este código como apoyo: `

`Necesitaras apoyarte en la unidad 07 y 08 para terminarla`

```javascript
const elementos = '';// selecciona la clase numero con query selector;
for () { // Ciclo a terminar
  elementos[i].innerHTML = `Elemento de la lista ${i}`;
}
```