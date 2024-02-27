//Comente todo el codigo, excepto el ultimo ejercicio.

// Ejercicio 6 : Ordenamiento.
// 1.- Crea una función que ordene de forma descendente un arreglo de números.
// Entrada -> [9,3,1,6,5,88,-1,2,7]
// Salida -> [88,9,7,6,5,3,1,-1]

// function ordenarDescendente(arreglo) {
    
//     arreglo.sort(function(a, b) {
       
//         return b - a;
//     });

   
//     return arreglo;
// }


// const arregloSinOrden = [9, 3, 1, 6, 5, 88, -1, 2, 7];
// const resutaldoOrden = ordenarDescendente(arregloSinOrden);
// console.log(resutaldoOrden); 


// 2.- Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii 
// ref: http://www.asciitable.com/.
// Entrada -> [‘b’,‘h’,‘w’,‘e’,‘a’]
// Salida -> [‘a’,‘b’,‘e’,‘h’,‘w’]
// function ordenarCaracterAscii(lista) {
    
//     lista.sort(function(a, b) {
        
//         return a.charCodeAt(0) - b.charCodeAt(0);
//     });


//     return lista;
// }


// const listaSinOrden = ['b', 'h', 'w', 'e', 'a'];
// const listaConOrden = ordenarCaracterAscii(listaSinOrden);
// console.log(listaSinOrden); 



// 3.- Crear una clase Alumno con los siguientes datos:
// Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio.
// Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio.

// class Alumno {
//     constructor(nombre, calificaciones) {
//         this.nombre = nombre;
//         this.calificaciones = calificaciones;
//     }

//     obtenerPromedio() {
//         let sumaCalificaciones = 0;
    
//         for (let i = 0; i < this.calificaciones.length; i++) {
//             sumaCalificaciones += this.calificaciones[i];
//         }
    
//         return sumaCalificaciones / this.calificaciones.length;
//     }
    
// }

// class Salon {
//     constructor() {
//         this.alumnos = [];
//     }

//     agregarAlumno(alumno) {
//         this.alumnos.push(alumno);
//     }

//     ordenarPorPromedio() {
//         this.alumnos.sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio());
//     }

//     mostrarAlumnos() {
//         this.alumnos.forEach(alumno => {
//             console.log(`${alumno.nombre}: ${alumno.obtenerPromedio()}`);
//         });
//     }
// }


// const alumno1 = new Alumno("Heber", [100, 90, 78, 98, 72]);
// const alumno2 = new Alumno("Rodrigo", [95, 90, 91, 91, 99]);
// const alumno3 = new Alumno("Damaris", [75, 72, 81, 88, 85]);
// const alumno4 = new Alumno("Abilene", [97, 72, 99, 81, 89]);

// const salon = new Salon();
// salon.agregarAlumno(alumno1);
// salon.agregarAlumno(alumno2);
// salon.agregarAlumno(alumno3);
// salon.agregarAlumno(alumno4);

// console.log("Sin ordenar:");
// salon.mostrarAlumnos();

// salon.ordenarPorPromedio();

// console.log("Orden de Promedio de Mayor a menor ):");
// salon.mostrarAlumnos();

// 4.- Crear una funcion que ordene palabras de menor numero de letras a mayor.
// Entrada -> [“adios”,“hola”,“maximo”,“uno”,“despedida”]
// Salida -> [“uno”,“hola”,“adios”,“maximo”,“despedida”]

// function ordenarMenorPalabras(palabras) {
//     palabras.sort((a, b) => a.length - b.length);
//     return palabras;
// }


// const listaPalabras = ["adios", "hola", "maximo", "uno", "despedida"];
// const resultadoPalabras = ordenarMenorPalabras(listaPalabras);
// console.log(resultadoPalabras); 


// 5.- Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.
// Entrada -> [[7,3],[2,2],[1,0],[4,3]]
// Salida -> [[1,0],[2,2],[4,3],[7,3]]

function ordenCercano(coordenadas) {
    coordenadas.sort((a, b) => {
        const distanciaA = Math.sqrt(a[0] ** 2 + a[1] ** 2);
        const distanciaB = Math.sqrt(b[0] ** 2 + b[1] ** 2);
        return distanciaA - distanciaB;
    });

    return coordenadas;
}


const listaCoordenadas = [[7, 3], [2, 2], [1, 0], [4, 3]];
const resultadosCoordenadas = ordenCercano(listaCoordenadas);
console.log(resultadosCoordenadas); 
