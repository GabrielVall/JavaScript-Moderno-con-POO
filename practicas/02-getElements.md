# Práctica con getElements

En esta práctica, aprenderás a seleccionar un conjunto de elementos HTML utilizando getElementsByClassName y a manipularlos de alguna manera.

* 1-. Crea un archivo HTML y agrega el siguiente código:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Práctica con getElements</title>
  </head>
  <body>
    <ul>
      <li class="item">Item 1</li>
      <li class="item">Item 2</li>
      <li class="item">Item 3</li>
    </ul>
  </body>
</html>
```
* 3-. Abre el archivo HTML en un navegador web y verifica que los elementos de la lista se muestran correctamente.
* 4-. Abre el archivo HTML en un editor de código.
* 5-. Crea un archivo JavaScript vacío y vincúlalo al archivo HTML utilizando la etiqueta script.
* 6-. En el archivo JavaScript, utiliza getElementsByClassName para seleccionar todos los elementos con la clase "item".
* 7-. Utiliza un bucle for para iterar sobre los elementos seleccionados.
* 8-. Dentro del bucle, cambia el contenido de cada elemento utilizando la propiedad textContent.
* 9-. Guarda los archivos HTML y JavaScript.
Abre el archivo HTML en un navegador web y verifica que los elementos de la lista se han actualizado con el nuevo contenido.

El resultado final debera verse de este modo:
```html
<ul>
  <li class="item">Nuevo contenido</li>
  <li class="item">Nuevo contenido</li>
  <li class="item">Nuevo contenido</li>
</ul>
```

`Nota: Puedes utilizar este código como apoyo: `

`Necesitaras apoyarte en la unidad 07 y 08 para terminarla`
```javascript
const items = ; // Slector getElements
for () { // Ciclo
  items[i].textContent = "Nuevo contenido";
}
```