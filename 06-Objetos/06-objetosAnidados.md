# Objetos anidados u objetos dentro de objetos
Los objetos anidados o objetos dentro de objetos en JavaScript son una técnica para organizar y agrupar datos relacionados dentro de un objeto. Estos objetos anidados pueden tener su propia estructura de datos y propiedades, lo que los hace muy útiles para representar información compleja y jerarquizada.

Por ejemplo, supongamos que queremos representar la información de una persona, incluyendo sus detalles personales y sus direcciones. Podemos crear un objeto principal que represente a la persona, y dentro de él, crear un objeto anidado que represente sus detalles personales y otro objeto anidado que represente sus direcciones:

```javascript
let persona = {
  nombre: 'John Doe',
  detalles: {
    edad: 30,
    genero: 'masculino',
    estadoCivil: 'soltero'
  },
  direcciones: [
    {
      tipo: 'casa',
      direccion: '123 Main St.',
      ciudad: 'Anytown',
      pais: 'USA'
    },
    {
      tipo: 'trabajo',
      direccion: '456 Market Ave.',
      ciudad: 'Anytown',
      pais: 'USA'
    }
  ]
};
```
En este ejemplo, el objeto persona es el objeto principal que contiene toda la información relacionada a la persona. Dentro de él, tenemos los objetos anidados detalles y direcciones. El objeto detalles contiene información sobre la edad, el género y el estado civil de la persona, mientras que el objeto direcciones es un array que contiene objetos que representan las diferentes direcciones de la persona.

Los objetos anidados son una forma flexible y poderosa de organizar y representar información en JavaScript, y son ampliamente utilizados en aplicaciones y proyectos de JavaScript modernos.

#### Ejemplo con automoviles
```javascript
let auto = {
  marca: 'Toyota',
  modelo: 'Camry',
  detalles: {
    año: 2020,
    transmision: 'automática',
    color: 'negro'
  },
  caracteristicas: [
    'airbags',
    'cámara de retroceso',
    'sistema de navegación'
  ]
};

console.log(auto.marca); // Toyota
console.log(auto.detalles.año); // 2020
console.log(auto.caracteristicas[0]); // airbags
```
En este ejemplo, creamos un objeto principal llamado auto que contiene información sobre un automóvil. Dentro de este objeto, tenemos dos objetos anidados: detalles y caracteristicas. El objeto detalles contiene información sobre el año, la transmisión y el color del automóvil, mientras que el objeto caracteristicas es un array que contiene una lista de características del automóvil.

