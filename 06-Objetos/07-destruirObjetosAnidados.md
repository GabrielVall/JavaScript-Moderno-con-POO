# Destruir objetos anidados
Puedes eliminar una objeto específico dentro de un objeto usando la palabra clave delete. Aquí hay un ejemplo:

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

delete auto.detalles;

console.log(auto);
// Salida:
// {
//   marca: 'Toyota',
//   modelo: 'Camry',
//   caracteristicas: [
//     'airbags',
//     'cámara de retroceso',
//     'sistema de navegación'
//   ]
// }
```