# Break & Continue

### Salto BREAK

El salto break se utiliza para salir de un bucle o de un switch en cualquier momento. Aquí te dejo un ejemplo:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) { //si el valor de i es 5
    break; //salimos del bucle
  }
  console.log("El valor de i es: " + i);
}
```

### Salto CONTINUE

El salto continue se utiliza para saltar a la siguiente iteración de un bucle, omitiendo el resto del código que sigue en la iteración actual. Aquí te dejo un ejemplo:


```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) { //si el valor de i es 2
    continue; //saltamos a la siguiente iteración
  }
  console.log("El valor de i es: " + i);
}
```