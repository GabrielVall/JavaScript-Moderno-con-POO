# Métodos de strings
Los `string methods` o `Métodos de strings` son métodos que están disponibles en los objetos de tipo string en JavaScript y permiten realizar operaciones y manipulaciones sobre las cadenas de texto. 

Algunos ejemplos de string methods incluyen:

##### .length: para obtener la longitud de la cadena.
```javascript
let nombre = "Juan Robles";
console.log(nombre.length);  // Imprime: 11
```
En este ejemplo, la propiedad .length se usa para obtener la longitud de la cadena nombre, que es igual a 8 caracteres (Si, también cuenta espacios en blanco).
##### .toUpperCase(): para convertir todos los caracteres a mayúsculas.
```javascript
let name = "Juan Robles";
console.log(name.toUpperCase());  // Imprime: "JUAN ROBLES"
```
En este ejemplo, el método .toUpperCase() se utiliza para convertir todos los caracteres de la cadena name a mayúsculas, lo que produce la cadena `"JOHN DOE"`.
##### .toLowerCase(): para convertir todos los caracteres a minúsculas.
```javascript
let name = "Juan Robles";
console.log(name.toLowerCase());  // Imprime: "juan robles"
```
En este ejemplo, el método .toLowerCase() se utiliza para convertir todos los caracteres de la cadena name a minúsculas, lo que produce la cadena `"juan robles"`.
#### .indexOf(): para obtener la posición de un carácter o subcadena dentro de la cadena.
Devuelve la posición de la primera ocurrencia de la subcadena dentro de la cadena o -1 si no se encuentra.
```javascript
let nombre = "Juan Robles";
let posicion = nombre.indexOf("Robles");  // posicion = 5
```
En este ejemplo, buscamos la subcadena "Robles" dentro de la cadena name y la variable pos almacena el resultado, que es 5 (Por que empieza a contar desde 0).
```javascript
let name = "Juan Robles";
console.log(name.indexOf("Perez"));  // Salida: -1
```
En este ejemplo, estamos buscando la subcadena `"Perez"` en la cadena name, pero no se encuentra. Por lo tanto, el método `.indexOf()` devuelve `-1`, lo que indica que la subcadena no se encontró.
#### .substring(): para extraer una subcadena de la cadena.
```javascript
let name = "Juan Robles";
console.log(name.substring(0, 4));  // Output: "Juan"
```
En este ejemplo, estamos utilizando el método .substring() para extraer una parte de la cadena name. El primer argumento es el índice de inicio y el segundo argumento es el índice de final. En este caso, estamos extrayendo los caracteres de la posición 0 hasta la posición 4, incluyendo el carácter en la posición 4. Por lo tanto, la función devuelve la subcadena "Juan".
#### .replace(): para reemplazar una subcadena por otra en la cadena.
```javascript
let name = "Juan Robles";
console.log(name.replace("Robles", "Perez")); // Salida:"Juan Perez"
```
En este ejemplo, estamos reemplazando la subcadena "Robles" con la subcadena "Perez" en la cadena name. El método .replace() devuelve una nueva cadena con el reemplazo realizado. En este caso, la función devuelve la cadena "Juan Perez".

También puedes utilizar expresiones regulares como argumento en el método `.replace()` para realizar reemplazos más complejos.
#### .trim(): para eliminar los espacios en blanco al principio y al final de la cadena.
```javascript
let name = "   Juan Robles   ";
console.log(name.trim());  // Salida: "Juan Robles"
```
En este ejemplo, la cadena name contiene espacios en blanco al principio y al final. El método `.trim()` elimina los espacios en blanco al principio y al final de la cadena. En este caso, la función devuelve la cadena `"Juan Robles"`.

El método `.trim()` es útil para limpiar datos de entrada y asegurarse de que no haya espacios en blanco no deseados en una cadena.