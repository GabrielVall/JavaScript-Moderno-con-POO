# Operador ternario
Un "Operador Ternario" o "Operador Condicional". Es un operador en JavaScript que permite escribir una sentencia if ... else de manera más corta y concisa.

Su sintaxis es la siguiente: condition ? value1 : value2. Si condition es true, se evalúa value1, de lo contrario se evalúa value2. El resultado de la evaluación se asigna a la variable o se usa en el contexto correspondiente.

ejemplos de su uso:

* Asignación de valores condicionales:
```javascript
let verdadero = (true) ? 'Imprime valor verdadero' : 'Imprime valor falso';
console.log(verdadero); // Salida: "Imprime valor verdadero"
let falso = (false) ? 'Imprime valor verdadero' : 'Imprime valor falso';
console.log(falso); // Salida: "Imprime valor falso"
```
En este ejemplo, si condition es true, la variable result tendrá el valor del primero. De lo contrario, tendrá el valor del segundo.


* Definición de un valor para una variable no inicializada:
```javascript
let x = (typeof y !== 'undefined') ? 1 : 0;
```
En este ejemplo, si y ha sido declarada y definida previamente, la variable x tendrá el valor de 1. De lo contrario, tendrá el valor 0.

`Nota:` Se recomienda el uso de este operador ya que acorta mucho la escritura del código.