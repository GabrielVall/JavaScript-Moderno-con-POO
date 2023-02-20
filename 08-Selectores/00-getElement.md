# Selectores - getElement(s)
Los selectores son una herramienta fundamental en JavaScript que permiten seleccionar elementos HTML del DOM (Documento de Objeto de Modelo) y manipularlos a través de código. En términos simples, los selectores son una forma de identificar un elemento en una página web para poder trabajar con él.

Para comprender los selectores primero hay que distingir entre los diferentes elementos:

Clase, etiqueta e ID son términos utilizados en HTML y CSS y JS para identificar y dar estilo a elementos de una página web.

Una `etiqueta` o `tag` HTML es una construcción de lenguaje de marcado que se utiliza para definir diferentes tipos de elementos en una página web. Por ejemplo, `<div>`, `<p>`, `<img>`, `<a>` y `<h1>` son todas etiquetas HTML. Cada etiqueta tiene un propósito específico y define cómo se debe mostrar el contenido dentro de ella.

Un `ID` en HTML es un atributo que se utiliza para identificar de forma única un elemento en una página web. Cada ID debe ser único dentro del documento HTML y se puede utilizar para acceder a un elemento específico a través de JavaScript o CSS.

Una clase en `HTML` es un atributo que se utiliza para agrupar elementos que comparten características similares. A diferencia de un ID, una clase puede ser utilizada por varios elementos en una página web. Las clases son comúnmente utilizadas para aplicar estilos CSS a un grupo de elementos.

## getElementById
getElementById es utilizado para seleccionar un elemento HTML por su ID único. Este método devuelve un solo elemento, que es el que coincide con el ID especificado.

Supongamos que tenemos el siguiente HTML:

```html
<div id="mi-div">Este es un div con un ID único</div>
```
Para seleccionar el elemento con el ID "mi-div" utilizando getElementById, podemos hacer lo siguiente en JavaScript:

```javascript
const miDiv = document.getElementById("mi-div");
console.log(miDiv.textContent); // Esto imprimirá "Este es un div con un ID único"
```
## getElementsByClassName
getElementsByClassName es utilizado para seleccionar un conjunto de elementos HTML que tienen la misma clase. Este método devuelve una lista de elementos, en la cual cada uno de ellos tiene la clase especificada.
Supongamos que tenemos el siguiente HTML:

```html
<ul>
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>
```
Para seleccionar todos los elementos con la clase "item" utilizando getElementsByClassName, podemos hacer lo siguiente en JavaScript:

```javascript
const items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  console.log(items[i].textContent);
}
// Esto imprimirá:
// "Item 1"
// "Item 2"
// "Item 3"
```
## getElementsByTagName
getElementsByTagName es utilizado para seleccionar un conjunto de elementos HTML por su etiqueta. Este método devuelve una lista de elementos, en la cual cada uno de ellos coincide con la etiqueta especificada.

Supongamos que tenemos el siguiente HTML:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
Para seleccionar todos los elementos "li" utilizando getElementsByTagName, podemos hacer lo siguiente en JavaScript:

```javascript
Copy code
const listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i].textContent);
}
// Esto imprimirá:
// "Item 1"
// "Item 2"
// "Item 3"
```