# Garbage Collector
El Garbage Collector (Recolector de Basura) es un mecanismo que se encarga de liberar la memoria ocupada por objetos que ya no son necesarios en un programa. Esto se realiza automáticamente en JavaScript, lo que significa que los desarrolladores no tienen que preocuparse por liberar manualmente la memoria.

El Garbage Collector trabaja identificando los objetos que ya no son accesibles por el código, y libera la memoria ocupada por ellos. Esto ayuda a optimizar el uso de la memoria en un programa, y a evitar problemas como fugas de memoria o desbordamientos de memoria.

Es importante destacar que el Garbage Collector es un mecanismo altamente optimizado y eficiente, por lo que su uso en JavaScript es una de las ventajas de este lenguaje. Sin embargo, es importante tener en cuenta que los desarrolladores deben tener un buen entendimiento de cómo funciona para evitar problemas como referencias circulares que puedan interferir con su funcionamiento.

Ejemplo:
```javascript
let obj = { name: 'John', age: 30 };

// Crear una referencia a obj
let objRef = obj;

// Asignar un nuevo valor a obj
obj = { name: 'Jane', age: 25 };

// En este punto, objRef sigue apuntando al objeto original { name: 'John', age: 30 }
// mientras que obj apunta a un nuevo objeto { name: 'Jane', age: 25 }

// Eliminar la referencia a objRef
objRef = null;

// El objeto original { name: 'John', age: 30 } ya no tiene referencias
// y puede ser liberado por el Garbage Collector
```

En este ejemplo, el Garbage Collector puede liberar la memoria ocupada por el objeto original { name: 'John', age: 30 } ya que ya no hay ninguna referencia a él en el código. Esto ayuda a optimizar el uso de la memoria y evita problemas como fugas de memoria.



### ¿Como lo invoco?
El Garbage Collector en JavaScript es un mecanismo incorporado en el lenguaje y no se puede invocar o llamar de forma directa. Funciona de forma automática y optimizada para liberar la memoria ocupada por objetos que ya no son necesarios en el programa.