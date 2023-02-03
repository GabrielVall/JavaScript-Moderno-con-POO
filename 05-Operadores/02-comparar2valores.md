# Comparar 2 valores
Hay varias formas de comparar dos valores en JavaScript, aquí mostraremos algunos ejemplos sencillos:
* `Usando el operador de igualdad "=="`
```javascript
let val1 = 5;
let val2 = '5';
console.log(val1 == val2); // true
```
Aun que sean 2 valores con distinto tipo de datos `numerico` y de `texto`, devuelve `true` o verdadero ya que su contenido es el mismo.
* `Usando el operador de igualdad estricta "==="`
```javascript
let val1 = 5;
let val2 = '5';
console.log(val1 === val2); // false
```
En este caso aun que el contenido sea el mismo este devuelve `false` al no compartir el mismo tipo de dato
* `Usando el operador de desigualdad "!="`
```javascript
let val1 = 5;
let val2 = '5';
console.log(val1 != val2); // false
```
En este caso, verifica que la condicion `sea falsa`, al ser comparados los datos son detectados como iguales pues solo compara el contenido
* `Usando el operador de desigualdad estricta "!=="`
```javascript
let val1 = 5;
let val2 = '5';
console.log(val1 !== val2); // true
```
Por ultimo, al igual que el anterior ejemplo, la condicion devuelve verdadero por que son de diferente tipo.

### Ejemplo con contraseñas
```javascript
let contraseña = 'secreto';
let contraseñaIngresada = 'secreto';
if (contraseña === contraseñaIngresada) {
  console.log('Sesión iniciada');
} else {
  console.log('Contraseña incorrecta, intente de nuevo');
}
```

### Comparando con "||" y "&&"

#### && 
```javascript
true && true = true
true && false = false
false && true = false
false && false = false
```

### ||
```javascript 
true || true = true
true || false = true
false || true = true
false || false = false
```