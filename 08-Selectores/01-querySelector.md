# Query Selectors
querySelector y querySelectorAll son métodos en JavaScript que permiten seleccionar elementos HTML del DOM (Documento de Objeto de Modelo) utilizando selectores CSS.

La sintaxis de querySelector y querySelectorAll es similar a la de los selectores CSS que se utilizan en un archivo de estilo. La diferencia es que en lugar de aplicar un estilo, estos métodos devuelven una referencia al elemento HTML o una lista de elementos que coinciden con el selector.

querySelector selecciona el primer elemento que coincide con el selector especificado, mientras que querySelectorAll selecciona todos los elementos que coinciden con el selector.

Por ejemplo, supongamos que tenemos el siguiente HTML:

```html
<div id="mi-div">
  <p class="parrafo">Este es un párrafo dentro de un div</p>
  <p class="parrafo">Este es otro párrafo dentro del mismo div</p>
</div>
```

Para seleccionar el primer párrafo dentro del div utilizando querySelector, podemos hacer lo siguiente en JavaScript:

```javascript
const miParrafo = document.querySelector("#mi-div .parrafo");
console.log(miParrafo.textContent); // Esto imprimirá "Este es un párrafo dentro de un div"
```

Para seleccionar todos los párrafos dentro del div utilizando querySelectorAll, podemos hacer lo siguiente en JavaScript:

```javascript
const misParrafos = document.querySelectorAll("#mi-div .parrafo");
for (let i = 0; i < misParrafos.length; i++) {
  console.log(misParrafos[i].textContent);
}
// Esto imprimirá:
// "Este es un párrafo dentro de un div"
// "Este es otro párrafo dentro del mismo div"
```
En resumen, querySelector y querySelectorAll son herramientas poderosas que permiten a los desarrolladores seleccionar elementos HTML del DOM utilizando selectores CSS en JavaScript. Estos métodos son muy útiles para acceder y manipular elementos HTML en una página web de manera flexible y eficiente.
