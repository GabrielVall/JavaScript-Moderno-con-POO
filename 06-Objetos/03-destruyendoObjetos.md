# Destrucción de objetos
En JavaScript, no hay una forma directa de destruir un objeto, pero puedes "borrar" una propiedad de un objeto mediante la palabra clave delete, como vimos en el anterior tema.

Para "borrar" un objeto en JavaScript, debes establecer la variable que hace referencia a ese objeto a null o undefined. Por ejemplo:


```javascript
let obj = { name: 'John', age: 30 };

// borrar el objeto
obj = null;

console.log(obj); // null
```

Esto "borra" el objeto de la memoria, y la memoria ocupada por él puede ser recuperada por el garbage collector. Sin embargo, es importante tener en cuenta que esto no garantiza que la memoria sea recuperada de inmediato, ya que depende del comportamiento del garbage collector.