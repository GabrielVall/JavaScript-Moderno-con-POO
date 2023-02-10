# Agregar y quitar propiedades a un objeto
En JavaScript, los objetos son una estructura de datos dinámica que te permiten almacenar y acceder a diferentes valores en una sola entidad. Puedes agregar o quitar propiedades en cualquier momento, lo que te da una gran flexibilidad y control sobre tus datos.

Para crear un objeto:

```javascript
var obj = {
  key1: "value1",
  key2: "value2"
};
```

Para agregar una nueva propiedad a un objeto, puedes simplemente asignar un valor a una nueva clave:

```javascript
let persona = {
  nombre: 'Juan',
  apellido: 'Pérez'
};
persona.edad = 30;
console.log(persona.edad); // Salida: 30
```
También puedes modificar el valor de una propiedad existente simplemente asignándole un nuevo valor:

```javascript
persona.nombre = 'María';
console.log(persona.nombre); // Salida: "María"
```
Para eliminar una propiedad de un objeto, puedes usar la función `delete`:

```javascript
delete persona.apellido;
console.log(persona.apellido); // Salida: undefined
```
Después de usar delete, la propiedad ya no existe en el objeto y cualquier intento de acceder a ella devolverá `undefined`.

Ejemplo más completo:
```javascript
let persona = {
  nombre: 'Juan',
  apellido: 'Pérez'
};

// Agregando una nueva propiedad
persona.edad = 30;
console.log(persona.edad); // Salida: 30

// Modificando una propiedad existente
persona.nombre = 'María';
console.log(persona.nombre); // Salida: "María"

// Eliminando una propiedad con delete
delete persona.apellido;
console.log(persona.apellido); // Salida: undefined
```

En este ejemplo, primero creamos un objeto persona con dos propiedades: `nombre` y `apellido`. Luego agregamos una nueva propiedad edad con un valor de 30. También modificamos el valor de la propiedad nombre a María. Finalmente, usamos la función delete para eliminar la propiedad `apellido`. Después de eliminar la propiedad, intentar acceder a ella devuelve undefined.
