# Orden de operaciones
Las operaciones en JavaScript siguen las reglas matemáticas convencionales de jerarquía de operadores. Aquí hay una lista de los operadores en orden de jerarquía, de mayor a menor prioridad:

* Paréntesis: `( )`
* Exponentes: `**`
    * Negación `-num`
    * Multiplicación `*`
    * División: `/`, 
    * Modulo  `%`
* Adición/sustracción: `+`, `-` (El primero que encuentre de izquierda a derecha)

Sin parentesis:
```javascript
// 1. Paréntesis
let result = (2 + 3) * 4;
console.log(result); // 20

// 2. Exponentes
let num = 2;
result = num ** 3;
console.log(result); // 8

// 3. Negación y multiplicación/división
result = 4 * 5 / 2;
console.log(result); // 10

// 4. Adición/sustracción
result = 5 + 8 - 3;
console.log(result); // 10
```

### Conclusión
Conocer el orden de prioridad de los operadores en JavaScript es importante porque ayuda a evitar errores en su código y asegurarse de que las operaciones se realicen de la manera que desea.