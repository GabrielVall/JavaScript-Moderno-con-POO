# Recorrer arreglos
Recorrer un arreglo en JavaScript significa iterar sobre cada uno de sus elementos y realizar alguna acción con ellos. Hay varias formas de hacerlo, y la elección dependerá de la tarea específica que desee realizar.
```javascript
// Arreglo de ejemplo
arr = [1,2,3,4,5];
```
1-. Usando un bucle for:
```javascript
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```
2-.Usando forEach():
```javascript
arr.forEach(function(element) {
  console.log(element);
});
```
Usando un bucle for-of:
```javascript
for (var element of arr) {
  console.log(element);
}
```
Usando map():
```javascript
var newArray = arr.map(function(element) {
  return element;
});
```

Es importante elegir la forma adecuada de acuerdo a las necesidades de su código.
