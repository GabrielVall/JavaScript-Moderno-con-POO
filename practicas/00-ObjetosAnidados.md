# Práctica de objetos anidados
Crear un objeto que contenga por lo menos 3 carreras 5 materias y 3 estudiantes
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
                    profesor: "Hector Rosales"
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