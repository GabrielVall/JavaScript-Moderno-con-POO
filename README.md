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