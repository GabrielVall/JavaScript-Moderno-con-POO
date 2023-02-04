# Object literal:
Un objeto literal es una forma simple y directa de crear un objeto en JavaScript, utilizando una sintaxis de llaves. Por ejemplo:

```javascript
let objetoLiteral = {
  nombre: "John",
  edad: 30,
  trabajo: "Desarrollador"
};
```
En este ejemplo, estamos creando un objeto llamado objetoLiteral con tres propiedades: nombre, edad, y trabajo.

# Objet constructor
Por otro lado, un objeto constructor es una forma de crear objetos en JavaScript utilizando una función constructor. Por ejemplo:

```javascript
function Persona(nombre, edad, trabajo) {
  this.nombre = nombre;
  this.edad = edad;
  this.trabajo = trabajo;
}

let objetoConstructor = new Persona("John", 30, "Desarrollador");
```