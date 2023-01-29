# Comentarios en JavaScript
Los comentarios en JavaScript son una buena práctica de programación, ya que ayudan a explicar el código y hacerlo más fácil de entender para otros desarrolladores. También pueden ser útiles para recordar cómo funciona una sección específica del código y para deshabilitar temporalmente una sección de código.

Hay varias maneras de escribir comentarios en JavaScript:

Comentarios de una línea: utilizando // al inicio de una línea, cualquier cosa después de esto sera ignorado por el intérprete. 

Ejemplo:
```javascript
// Este es un comentario de una línea
```

Comentarios de varias líneas: utilizando /* al inicio y */ al final de un bloque de texto, cualquier cosa dentro de estos delimitadores sera ignorado por el intérprete. 

Ejemplo:
```javascript
/* Este es un comentario de varias líneas.
   Puede tener varias líneas de texto. */
```

Una mala practica en comentarios es escribir comentarios innecesarios o comentarios que no aportan ninguna información útil. También es importante no escribir comentarios que describan el código obvio, ya que esto solo hace que el código sea más difícil de leer.
```javascript
    // Esta función suma dos números
    function suma(a, b) {
        return a + b;
    }
```
En este ejemplo, el comentario no proporciona ninguna información útil ya que el nombre de la función y su contenido ya indica que esta sumando dos números.

* Comentarios que describen el código obvio:
```javascript
// Asignamos el valor 1 a la variable x
var x = 1;
```

En este ejemplo, el comentario no aporta ninguna información útil ya que es obvio que se está asignando el valor 1 a la variable x.


Otra mala práctica es utilizar comentarios para deshabilitar temporalmente código, en su lugar se debe utilizar una forma de deshabilitarlo temporalmente mediante una estructura de control, como una sentencia if o un operador ternario.

Ejemplo:

```javascript
// Comentando esta línea para deshabilitar la función
// function holaMundo() {
//   console.log('Hola mundo');
// }
```
En este ejemplo, es mejor utilizar una estructura de control para deshabilitar temporalmente la función en lugar de comentarla. Por ejemplo:

```javascript
var habilitarFuncion = false;
if (habilitarFuncion) {
  function holaMundo() {
    console.log('Hola mundo');
  }
}
```

#### Por que es mejor

* Es mejor utilizar el "if" en lugar de comentar la función por varias razones:

* El código está activo y puede ser ejecutado, lo que significa que si hay un error en el código, será detectado y corregido.

* Es más fácil de mantener ya que no se tiene que buscar código comentado y descomentarlo para hacer cambios.

* Es más legible ya que el código no está oculto detrás de comentarios y es fácil de entender qué está sucediendo.

* Es más eficiente ya que el código no está siendo ejecutado en todo momento, sólo cuando se cumplen las condiciones especificadas en el "if".

En resumen, utilizar un "if" es una mejor práctica de programación ya que es más fácil de leer, mantener y depurar y no consume recursos innecesarios.

## Conclusión
Es importante tener en cuenta que estos son solo ejemplos y que cada proyecto y equipo puede tener su propia convención y estándar para escribir comentarios. Lo importante es tener en cuenta que los comentarios deben aportar información útil y ayudar a entender el código.