### Uso de API & Fetch
A continuación, se presentan los pasos a seguir para realizar una práctica utilizando la función fetch y una API gratuita:

1. Investigar acerca de la función fetch de JavaScript y su uso para realizar solicitudes HTTP a una API o servidor web.

2. Buscar una API gratuita  para utilizarla en la práctica. Una opción es https://dog.ceo/dog-api/, que ofrece una variedad de imágenes de perros y otras funcionalidades.

3. Utilizar la función fetch para hacer una solicitud HTTP a la API que devuelve la imagen de un perro aleatorio.

4. Utilizar la URL de la imagen devuelta por la API para hacer que la imagen sea visible en la página utilizando el tag `<img src="imagenurl.png">`. Para esto, se puede agregar el siguiente código al final del segundo then de la solicitud fetch:

```javascript
const image = document.createElement('img');
image.src = data.message;
document.body.appendChild(image);
```