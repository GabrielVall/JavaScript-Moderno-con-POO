# Números en JavaScript
En JavaScript, los números son un tipo de datos básico y se utilizan para representar valores numéricos. Se almacenan como números de punto flotante de doble precisión (64 bits) lo que les permite tener un rango amplio de valores y preservar la precisión en las operaciones matemáticas. Además, JavaScript ofrece una amplia variedad de funciones matemáticas integradas para realizar operaciones aritméticas y lógicas con números.

Hay varias maneras de declarar números:

* Declaración de un número literal:
```javascript
let num1 = 5;
let num2 = -10.5;
let num3 = 3.14159265359;
```
* Declaración de un número a partir de un cálculo:
```javascript
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
```
* Declaración de un número a partir de una entrada del usuario:
```javascript
let num = prompt("Ingrese un número:");
num = parseFloat(num);
```
`Nota: Es importante nunca escribir los números entre comas, ya que esto sera tomado en cuenta automaticamente como un String o cadena de texto`
Estos números pueden ser utilizados en operaciones matemáticas y lógicas y también pueden ser almacenados en variables y utilizados en expresiones.