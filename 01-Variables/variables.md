# Variables en JavaScript
En JavaScript, las `variables` son contenedores para almacenar valores. Las variables se declaran utilizando la palabra clave `var`, `let`, o `const`, seguido del nombre de la variable y el signo igual `=`. El valor asignado a la variable puede ser cualquier tipo de datos, como `números`, `cadenas`, `booleanos`, `objetos`, etc.

Ejemplo:
```javascript
let numero = 5;
let nombre = "Juan";
let esVerdad = true;
```

En estos ejemplos, se crean tres variables: 
* numero
* nombre
* esVerdad

La variable numero se asigna el valor numérico 5, la variable nombre se asigna la cadena "Juan" y la variable esVerdad se asigna el valor booleano true.

Una vez que se ha asignado un valor a una variable, se puede utilizar el nombre de la variable en cualquier parte del código para hacer referencia a ese valor. Por ejemplo, se puede utilizar una variable en una operación matemática o en una función.

#### Diferencias entre `const`, `var` y `let`
En el ejemplo anterior utilizamos `const` para asignar la variable
```javascript
const nombre = valor;// Valor a ser asignado
```
Sin embargo, para declarar variables podemos utilizar las mencionadas anteriormente o incluso, solo asignar la variable, ¿cual es la diferencia?, ¿Cual deberia usar?.
### CONST
`const` es utilizado para declarar una variable cuyo valor no puede ser reasignado. Es decir, una vez asignado un valor, no se puede cambiar. Por ejemplo:

```javascript
    const edad = 30;
    edad = 40; // Esta línea generaría un error
```

### LET
let, por otro lado, es utilizado para declarar una variable cuyo valor puede ser reasignado. Es decir, se puede cambiar su valor a lo largo del código. Por ejemplo:
```javascript
    let edad = 30;
    edad = 40; // Esta línea es válida
```

### VAR
Por último, var es una forma antigua de declarar variables en JavaScript. A diferencia de const y let, var no tiene restricciones de alcance, lo que significa que una variable declarada con var puede ser accedida desde cualquier parte del código. Sin embargo, en la mayoría de los casos se recomienda utilizar const y let en lugar de var.

### Conclusión
En resumen, se recomienda utilizar const cuando se sabe que el valor de una variable no va a cambiar, y let cuando se espera que el valor de una variable cambie a lo largo del código.

# Errores frecuentes

Hay varios errores comunes que puedes cometer al declarar una variable en JavaScript, aquí algunos ejemplos:

Olvidar incluir el signo de igual (=) al asignar un valor a una variable:
```javascript
let numero 5; // SyntaxError: missing = in const declaration
```
Utilizar un nombre de variable no válido:
```javascript
let 1numero = 5; // SyntaxError: Unexpected number
```
Utilizar una palabra reservada de JavaScript como nombre de variable:
```javascript
let function = 5; // SyntaxError: Unexpected identifier
```
Utilizar un caractér especial como nombre de variable:
```javascript
let @nombre = "Juan"; // SyntaxError: Unexpected token @
```
Utilizar una variable no declarada:
```javascript
let resultado = num1 + num2;
console.log(resultado); // ReferenceError: num1 is not defined
```
Utilizar una variable const para reasignar un valor:
```javascript
const numero = 5;
numero = 6; // TypeError: Assignment to constant variable.
```
Es importante asegurarte de que estás declarando tus variables correctamente y evitar cometer estos errores comunes para que tu código funcione correctamente.

# Buenas prácticas al declarar variables
Para asignar buenos nombres a las variables en JavaScript, es recomendable seguir estas pautas:

* 1-. Utilizar nombres descriptivos y significativos: El nombre de una variable debe reflejar su contenido o su función dentro del código.

* 2-. Utilizar camelCase para variables y CONSTANT_CASE para constantes: Es una convención de estilo para diferenciar variables y constantes.

* 3-. Evitar utilizar abreviaciones o acrónimos: Pueden ser difíciles de entender para otros desarrolladores.

* 4-. Evitar utilizar palabras reservadas: Existen palabras que ya tienen un significado específico en JavaScript y no deben ser utilizadas como nombres de variables.

En resumen, el nombre de una variable debe ser lo suficientemente descriptivo como para entender el propósito de la variable en el código y debe seguir las convenciones de nombramiento para garantizar la legibilidad del código.

## Ejemplos de camelCase
Camel case es una convención de estilo de programación en la cual las palabras compuestas en un nombre de variable o función se unen con la primera letra en minúscula, excepto la primera palabra que es en mayúscula.

Ejemplos:

```javascript
let numeroDeAlumnos;
let nombreDelUsuario;
```
## Ejemplos de CONSTANT
Constant case es una convención de estilo en la cual todas las letras son en mayúsculas y las palabras están separadas por un guión bajo.
Ejemplos:
```javascript
const PI = 3.14;
const NUMERO_DE_ALUMNOS = 30;
```
La convención de estilo CamelCase se utiliza para variables y funciones mientras que la convención de estilo CONSTANT_CASE se utiliza para constantes. Estas convenciones son ampliamente utilizadas en la comunidad de desarrolladores y ayudan a hacer el código más legible y fácil de entender.