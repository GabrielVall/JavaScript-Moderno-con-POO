### Instrucciones
En esta práctica aprenderemos a usar una API para obtener información del clima. 
Para empezar, necesitaremos crear una cuenta en https://www.weatherapi.com/. 
Una vez creada la cuenta, debemos obtener nuestra API KEY, que es una clave única que nos permitirá acceder a la información de la API.

Ahora que tenemos nuestra API KEY, podemos ir a https://www.weatherapi.com/api-explorer.aspx para probarla.
En esa página encontraremos un campo llamado "Your API Key", donde debemos ingresar nuestra clave. Además, debemos ingresar la ubicación de la que queremos obtener la temperatura en el campo "value".
Puedes elegir cualquier ubicación que te interese.

Cuando hayas ingresado tu API KEY y la ubicación, haz clic en "Show Response" para enviar una solicitud. Verás que se carga una respuesta en la página. Ahora, lo que debemos hacer es leer el "Response Body" para ver la información que hemos obtenido.

Con esta información completa el código JavaScript de la página web que esta dentro de esta carpeta.

Deberás hacer una petición fetch para poder obtener la informacion de la temperatura de un servidor en la nube, utiliza lo aprendido en las clases anteriores para imprimir la respuesta de este servidor en la página web de ejemplo.
