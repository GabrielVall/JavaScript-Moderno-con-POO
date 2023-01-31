# Objeto math
La librería Math en JavaScript proporciona una variedad de funciones matemáticas y constantes para realizar cálculos y operaciones matemáticas en un programa. Algunos de los usos más comunes de Math incluyen:

* `Math.PI`: Este es una constante que representa el número pi, un número irracional utilizado en cálculo y geometría.

Ejemplo
```javascript
let resultado;
// Pi
resultado = Math.PI;
console.log(`Valor de Pi: ${resultado}`);
```

* `Math.round(2.5)`: Este método redondea un número decimal al entero más cercano. En este caso, el número 2.5 se redondeará a 3.

```javascript
// Redondeo
resultado = Math.round(2.5);
console.log(`Redondeo de 2.5: ${resultado}`);
```

* `Math.ceil(2.2)`: Este método redondea un número decimal hacia arriba al entero más cercano. En este caso, el número 2.2 se redondeará a 3.
```javascript
// Redondeo hacia arriba (ceil)
resultado = Math.ceil(2.2);
console.log(`Redondeo hacia arriba de 2.2: ${resultado}`);
```

* `Math.floor(2.2)`: Este método redondea un número decimal hacia abajo al entero más cercano. En este caso, el número 2.2 se redondeará a 2.
```javascript
// Redondeo hacia abajo (floor)
resultado = Math.floor(2.2);
console.log(`Redondeo hacia abajo de 2.2: ${resultado}`);
```

* `Math.sqrt(144)`: Este método calcula la raíz cuadrada de un número. En este caso, se calcula la raíz cuadrada de 144, que es igual a 12.
```javascript
// Raiz cuadrada
resultado = Math.sqrt(144);
console.log(`Raiz cuadrada de 144: ${resultado}`);
```

* `Math.abs(-300)`: Este método devuelve el valor absoluto de un número. En este caso, el valor absoluto de -300 es 300.

```javascript
// Valor absoluto
resultado = Math.abs(-300);
console.log(`Valor absoluto de -300: ${resultado}`);
```

* `Math.pow(8, 3)`: Este método eleva un número a una potencia específica. En este caso, se eleva 8 a la potencia 3, lo que equivale a 8 * 8 * 8, o 512.
```javascript
// Potencia
resultado = Math.pow(8, 3);
console.log(`Potencia de 8 elevado a 3: ${resultado}`);
```
* `Math.min(3,5,1,2,9,4,2, -3)`: Este método devuelve el valor mínimo de una lista de números. En este caso, el valor mínimo es -3.
```javascript
// Mínimo
resultado = Math.min(3,5,1,2,9,4,2, -3);
console.log(`Mínimo de los números [3,5,1,2,9,4,2,-3]: ${resultado}`);
```
Math.max(4,1,21,4,15,5,11,5): Este método devuelve el valor máximo de una lista de números. En este caso, el valor máximo es 21.
```javascript
// Máximo
resultado = Math.max(4,1,21,4,15,5,11,5);
console.log(`Máximo de los números [4,1,21,4,15,5,11,5]: ${resultado}`);
```

Math.random(): Este método devuelve un número aleatorio entre 0 y 1.
```javascript
// Aleatorio
resultado = Math.random();
console.log(`Número aleatorio entre 0 y 1: ${resultado}`);
```

Ejemplo práctico:
```javascript
// Aleatorio dentro de un rango
random = Math.random();
resultado =  Math.floor( random * 30 );
console.log(`Número aleatorio entre 0 y 30: ${resultado}`);
```
La primera línea genera un número aleatorio entre 0 y 1 utilizando la función Math.random().

La segunda línea multiplica este número aleatorio por 30 y utiliza la función Math.floor para redondear hacia abajo, asegurándose de que el resultado siempre sea un número entero. Esto significa que el resultado será un número entero entre 0 y 29.

En resumen, este código genera un número aleatorio entre 0 y 30 y lo imprime en la consola.

Ejemplo práctico 2:
```javascript
let min = 10;
let max = 20;

let resultado = Math.floor( Math.random() * (max - min + 1) ) + min;
console.log(`Número aleatorio entre ${min} y ${max}: ${resultado}`);
```
El cálculo (max - min + 1) se utiliza para determinar la cantidad de números enteros dentro del rango definido por min y max.

Por ejemplo, si min = 10 y max = 20, entonces hay 11 números enteros en el rango, incluyendo a 10 y 20. Para calcular esta cantidad, simplemente restamos min de max y agregamos 1: (20 - 10 + 1) = 11.

Al multiplicar Math.random() por (max - min + 1), se asegura que el resultado sea un número entero dentro del rango [min, max]. El resultado final se redondea hacia abajo con Math.floor() para asegurarse de que sea un número entero.

En resumen, este código genera un número aleatorio dentro de un rango definido por min y max y lo imprime en la consola.