# Operaciones básicas
Una operación básica en JavaScript es una acción que realiza una tarea matemática simple, como sumar, restar, multiplicar, dividir o calcular el resto de una división. Estas operaciones se realizan con los operadores matemáticos correspondientes (+, -, *, /, %) y se utilizan para realizar cálculos en un programa. Al combinar estas operaciones, se pueden crear expresiones más complejas y realizar tareas más complejas.
JavaScript soporta las siguientes operaciones matemáticas básicas:

Suma (+)
Resta (-)
Multiplicación (*)
División (/)
Módulo (%), que devuelve el resto de la división de dos números.

Ejemplos:
```javascript
let num1 = 5;
let num2 = 10;

// Suma
let sum = num1 + num2;
console.log("Suma: " + sum);

// Resta
let difference = num1 - num2;
console.log("Resta: " + difference);

// Multiplicación
let product = num1 * num2;
console.log("Multiplicación: " + product);

// División
let division = num1 / num2;
console.log("División: " + division);

// Módulo
let resto = num1 % num2;
console.log("Módulo: " + resto);
```

#### Uso práctico de Módulo

Aquí hay un ejemplo de código que usa el operador módulo para verificar si un número es par o impar:

```javascript
let num = 7;

if (num % 2 === 0) {
  console.log(num + " es un número par");
} else {
  console.log(num + " es un número impar");
}
```
Este código calcula el resto de la división de `num` por 2 y compara el resultado con 0. Si el resultado es 0, entonces `num` es par y se imprime un mensaje en la consola. De lo contrario, `num` es impar y se imprime otro mensaje en la consola.