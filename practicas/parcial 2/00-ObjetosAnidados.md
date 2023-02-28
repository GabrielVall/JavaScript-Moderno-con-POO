# Práctica de objetos anidados
Crear un objeto que contenga por lo menos 3 carreras 5 materias y 3 estudiantes
Ejemplo:
```javascript
let objetoUniversidad = {
    nombre: "Universidad Tecnologica del Norte De Coahuila",
    abreviacion: 'UTNC',
    carreras: [
        {
            nombreCarrera: "TIADSM",
            cantidadEstudiantes:200,
            materias:[
                {
                    nombreMateria: "Funciones Matematicas",
                    profesor: "Hector Rosales",
                }
            ],
            estudiantes:[
                {
                    nombreEstudiante: "Juan Robles",
                    matricula: 210012312
                },
                {
                    nombreEstudiante: "Juan Robles",
                    matricula: 210012312
                },
                {
                    nombreEstudiante: "Juan Robles",
                    matricula: 210012312
                }
            ]    
        },
        {
            nombreCarrera: "DINAM",
            cantidadEstudiantes:300,
            materias:[
                {
                    nombreMateria: "Economia",
                    profesor: "Pedro Sanchez"
                }
            ]    
        }
    ]
}
```