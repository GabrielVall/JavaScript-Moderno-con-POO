# JavaScript Moderno - Resumen
Notas básicas para el curso de JavaScript Moderno
### Pedir datos al usuario y mostrarlos en la página
```javascript
    // Con promp ejecutamos una alerta con un input de texto
    const nombre = prompt("¿Como te llamas?");
    // Con document y querySelector seleccionamos una etiqueta e imprimimos el valor
    // recibido
    document.querySelector('.contenido h1').innerHTML = nombre;
```
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

# Uso de ESLint
ESLint es una herramienta esencial para garantizar la calidad del código y mejorar la productividad del desarrollo. En resumen:

* Permite seguir las mejores prácticas y estándares de codificación, lo que ayuda a prevenir errores y aumenta la facilidad de mantenimiento del código.
* Ofrece la posibilidad de importar configuraciones de grandes empresas como Google, lo que garantiza que el código cumpla con los estándares de calidad de estas empresas.
* Con el comando --fix se pueden solucionar automáticamente problemas de codificación detectados por ESLint, lo que aumenta la eficiencia del desarrollo.

### Requerimientos
* nodejs
* npm

### Instalación
Asegúrate de tener `Node.js` y `npm` (gestor de paquetes de Node.js) instalados en tu sistema. Puedes verificar si ya los tienes instalados abriendo la terminal y ejecutando los comandos `node -v` y `npm -v`.

- 1-. Crea un nuevo proyecto o abre uno existente en el que quieras utilizar ESLint.

- 2-. Abre la terminal y navega hasta la carpeta del proyecto.

- 3-. Ejecuta el siguiente comando para instalar ESLint en tu proyecto:
```bat
npm init @eslint/config
```
`NOTA:` Al instalarlo te dara varias opciones para seleccionar relacionadas en tu proyecto recomiendo seleccionar la opcion de `GOOGLE` para establecer las reglas por defecto que ellos manejan.

- 4-. Una vez instalado, ejecuta el siguiente comando para inicializar ESLint en tu proyecto, selecciona el archivo js para verificar:
```bat
    npx eslint tuarchivo.js
```
- 5-. Resuelve los errores manualmente o escribe el siguiente comando para intentar resolverlos automáticamente.
```bat
    npx eslint --fix tuarchivo.js
```
