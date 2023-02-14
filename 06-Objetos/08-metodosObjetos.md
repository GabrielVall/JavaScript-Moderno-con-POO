# Métodos para objetos
Los métodos de objetos en JavaScript son funciones asociadas a objetos que permiten realizar acciones específicas en ellos. Estos métodos se pueden invocar o llamar en un objeto específico y proporcionan una forma conveniente y estructurada de trabajar con los datos almacenados en un objeto.

Aquí está una lista más completa de los métodos más comunes de los objetos en JavaScript:

##### Object.assign():
Este método permite copiar los valores de todas las propiedades enumerables de uno o más objetos fuente a un objeto destino
```javascript
let objeto1 = {a: 1, b: 2};
let objeto2 = {c: 3, d: 4};
let objetoFinal = Object.assign({}, objeto1, objeto2);

console.log(objetoFinal);
// output: {a: 1, b: 2, c: 3, d: 4}
```

#### Object.entries():
Este método devuelve un array de arrays con pares clave-valor correspondientes a las propiedades enumerables de un objeto.
```javascript
let objeto = {a: 1, b: 2, c: 3};
let entradas = Object.entries(objeto);

console.log(entradas);
// output: [["a", 1], ["b", 2], ["c", 3]]
```

#### Object.keys():
Este método devuelve un array con las claves de las propiedades enumerables de un objeto.
```javascript
let objeto = {a: 1, b: 2, c: 3};
let claves = Object.keys(objeto);

console.log(claves);
// output: ["a", "b", "c"]
```

#### Object.values():
Este método devuelve un array con los valores de las propiedades enumerables de un objeto.
```javascript
let objeto = {a: 1, b: 2, c: 3};
let valores = Object.values(objeto);

console.log(valores);
// output: [1, 2, 3]
```

#### Object.freeze():
Este método congela un objeto y previene la adición, eliminación o modificación de sus propiedades.
```javascript
Copy code
let objeto = {a: 1, b: 2, c: 3};
Object.freeze(objeto);

objeto.a = 4;
objeto.d = 5;

console.log(objeto);
// output: {a: 1, b: 2, c: 3} (los cambios no se realizaron)
```

#### Object.seal():
Este método sella un objeto y previene la adición o eliminación de sus propiedades, pero permite la modificación de las propiedades existentes.
```javascript
let objeto = {a: 1, b: 2, c: 3};
Object.seal(objeto);

objeto.a = 4;
objeto.d = 5;

console.log(objeto);
// output: {a: 4, b: 2, c: 3} (solo se permitió la modificación)
```
