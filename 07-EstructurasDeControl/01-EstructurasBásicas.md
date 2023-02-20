# Estructuras de control
Las estructuras de control en JavaScript son herramientas fundamentales que permiten controlar el flujo de ejecución de un programa. Estas estructuras incluyen los condicionales (if, else if, else), los bucles (for, while, do-while), y los saltos (break, continue, return). Con ellas, es posible crear programas más complejos y eficientes, ya que se pueden tomar decisiones en función de las condiciones que se presenten y repetir un bloque de código varias veces. El conocimiento de estas estructuras es esencial para cualquier desarrollador de JavaScript, ya que son una parte fundamental del lenguaje y se utilizan en la mayoría de las aplicaciones web modernas.

### Condicional IF-ELSE
El condicional if-else (`Sí-sino`) se utiliza para ejecutar un bloque de código si se cumple una condición, y otro bloque de código si no se cumple esa condición. Aquí te dejo un ejemplo:

```javascript
let edad = 18;

if (edad >= 18) { //si la edad es mayor o igual a 18
  console.log("Eres mayor de edad"); //se ejecuta este bloque de código
} else if (edad  == 17) { 
  console.log("Tienes 17 años"); //se ejecuta este bloque de código
} else{
    console.log("Eres menor de edad");
}
```

### Switch
Es una estructura de control de flujo en JavaScript que se utiliza para tomar decisiones en función del valor de una variable. Es una alternativa a la estructura de control "if-else if-else" cuando se tienen múltiples condiciones que comprobar.
```javascript
let diaDeLaSemana = "martes";

switch (diaDeLaSemana) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  case "miércoles":
    console.log("Hoy es miércoles");
    break;
  default:
    console.log("No es un día válido");
}
```

### Bucle FOR
El bucle for se utiliza para ejecutar un bloque de código varias veces, en función de una condición que se establece al principio.

```javascript
for (let i = 0; i < 5; i++) { //se ejecutará el bloque de código 5 veces
  console.log("El valor de i es: " + i); //mostramos el valor de i en cada iteración
}
```
Tambien sera util para pasar por cada elemento de un getElementsByClassName(), por ejemplo:

HTML:
```html
<div class="ejemplo">Elemento 1</div>
<div class="ejemplo">Elemento 2</div>
<div class="ejemplo">Elemento 3</div>
<div class="ejemplo">Elemento 4</div>
```
JavaScript:
```javascript
const elementos = document.getElementsByClassName("ejemplo");

for (let i = 0; i < elementos.length; i++) {
  elementos[i].innerHTML = "Elemento modificado " + (i + 1);
}
// Salida HTML:
// <div class="ejemplo">Elemento modificado 1</div>
// <div class="ejemplo">Elemento modificado 2</div>
// <div class="ejemplo">Elemento modificado 3</div>
// <div class="ejemplo">Elemento modificado 4</div>
```

### Bucle WHILE
El bucle while se utiliza para ejecutar un bloque de código mientras se cumpla una condición. Aquí te dejo un ejemplo:

```javascript
let i = 0;

while (i < 5) { //se ejecutará el bloque de código mientras i sea menor que 5
  console.log("El valor de i es: " + i); //mostramos el valor de i en cada iteración
  i++; //incrementamos el valor de i en 1
}
```