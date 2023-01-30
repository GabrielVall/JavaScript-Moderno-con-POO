# Cadenas de texto (Strings) en JavaScript
Un string en JavaScript es una secuencia de caracteres (letras, números, símbolos, etc.) encerrada entre comillas simples o dobles. Son utilizados para representar texto o cadenas de caracteres. Ejemplo: `"Hola, soy un string" `.

Hay varias maneras de declarar un string en JavaScript:

* Con comillas simples: 'Hola, soy un string'
* Con comillas dobles: "Hola, soy un string"
* Con comilla francesa: \`Hola, soy un string`

### Concatenar variables

Concatenar es el proceso de unir o combinar dos o más strings o elementos en un solo string o elemento. Es una técnica común en programación para crear strings dinámicos a partir de distintas partes o valores. Por ejemplo, se pueden concatenar nombres y apellidos para crear un nombre completo. 

Las maneras más comunes de concatenar son: 

* Concatenación con el operador +:
```javascript
let nombre = "Juan";
let saludo = "Hola " + nombre + "!";
console.log(saludo); // "Hola Juan!"
```
* Interpolación de cadenas con comillas francesas:
```javascript
let nombre = "Juan";
let saludo = `Hola ${nombre}!`;
console.log(saludo); // "Hola Juan!"
```

* Concatenación con el método concat():
```javascript
let nombre = "Juan";
let saludo = "Hola".concat(" ", nombre, "!");
console.log(saludo); // "Hola Juan!"
```
En conclusión, hay varias maneras de concatenar strings y variables en JavaScript (más aparte de las ya mencionadas). Cada una de estas técnicas tiene sus propias ventajas y desventajas, y es importante elegir la que mejor se adapte a tus necesidades y requisitos de código o del modelo de trabajo de tu equipo.