# Uso de ESLint
ESLint es una herramienta esencial para garantizar la calidad del código y mejorar la productividad del desarrollo. En resumen:

* Permite seguir las mejores prácticas y estándares de codificación, lo que ayuda a prevenir errores y aumenta la facilidad de mantenimiento del código.
* Ofrece la posibilidad de importar configuraciones de grandes empresas como Google, lo que garantiza que el código cumpla con los estándares de calidad de estas empresas.
* Con el comando --fix se pueden solucionar automáticamente problemas de codificación detectados por ESLint, lo que aumenta la eficiencia del desarrollo.

### Requerimientos
* nodejs
* npm

### Instalación
Asegúrate de tener `Node.js` y `npm` (gestor de paquetes de Node.js) instalados en tu sistema. Puedes verificar si ya los tienes instalados abriendo la terminal y ejecutando los comandos `node -v` y `npm -v`.

- 1-. Crea un nuevo proyecto o abre uno existente en el que quieras utilizar ESLint.

- 2-. Abre la terminal y navega hasta la carpeta del proyecto.

- 3-. Ejecuta el siguiente comando para instalar ESLint en tu proyecto:
```bat
npm init @eslint/config
```
`NOTA:` Al instalarlo te dara varias opciones para seleccionar relacionadas en tu proyecto recomiendo seleccionar la opcion de `GOOGLE` para establecer las reglas por defecto que ellos manejan.

- 4-. Una vez instalado, ejecuta el siguiente comando para inicializar ESLint en tu proyecto, selecciona el archivo js para verificar:
```bat
    npx eslint tuarchivo.js
```
- 5-. Resuelve los errores manualmente o escribe el siguiente comando para intentar resolverlos automáticamente.
```bat
    npx eslint --fix tuarchivo.js
```
