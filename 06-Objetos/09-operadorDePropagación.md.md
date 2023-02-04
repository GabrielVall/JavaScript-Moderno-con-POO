# Operador de propagación (spread)
El operador de propagación (spread operator) es una sintaxis de JavaScript que permite expandir un objeto o un arreglo en una lista de elementos.

En el caso de objetos, el operador de propagación permite combinar varios objetos en un solo objeto. 
Por ejemplo:
```javascript
let objeto1 = {a: 1, b: 2};
let objeto2 = {c: 3, d: 4};

let objetoCombinado = {...objeto1, ...objeto2};

console.log(objetoCombinado);
// output: {a: 1, b: 2, c: 3, d: 4}
````
En el ejemplo anterior, el operador de propagación se utiliza para combinar objeto1 y objeto2 en objetoCombinado

En el caso de arreglos, el operador de propagación permite expandir un arreglo en una lista de elementos
Por ejemplo:

```javascript
let arreglo1 = [1, 2, 3];
let arreglo2 = [4, 5, 6];

let arregloExpandido = [...arreglo1, ...arreglo2];

console.log(arregloExpandido);
// output: [1, 2, 3, 4, 5, 6]
```