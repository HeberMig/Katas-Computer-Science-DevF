// Comente todo el codigo, excepto el ultimo ejericicio.

//Ejercicio 5 : Búsqueda (Secuencial y Binaria).
// 1.- Crear una función que encuentre el número más repetido en un array.
// Ejemplo Input -> [3,6,1,8,2,3,6,3,2,5,6]
// Salida -> 6
// function numeroRepitido(arreglo) {
//     let repeticion = {};
//     let maxRepetido;
//     let maxFrecuencia = 0;

//     for (let numero of arreglo) {
//         repeticion[numero] = (repeticion[numero] || 0) + 1;

//         if (repeticion[numero] > maxFrecuencia) {
//             maxFrecuencia = repeticion[numero];
//             maxRepetido = numero;
//         }
//     }

//     return maxRepetido;
// }

// const listaArreglo = [4, 3, 1, 8, 4, 1, 4, 3, 2, 2, 1];
// const resultado = numeroRepitido(listaArreglo);
// console.log(resultado); 


// 2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.
// Ejemplo input -> [8,‘e’,7,2,‘a’,‘d’,‘f’,2,3,1,4,3]
// Salida → [‘e’,‘a’,‘d’,‘f’]

// function mostrarLetras(arreglo) {
//     const resultado = [];

//     for (let elemento of arreglo) {
//         if (typeof elemento === 'string') {
//             resultado.push(elemento);
//         }
//     }

//     return resultado;
// }


// const miArreglo = [8, 'e', 7, 2, 'a', 'd', 'f', 2, 3, 1, 4, 3];
// const resultadoLetras = mostrarLetras(miArreglo);
// console.log(resultadoLetras); 


// 3.- Crear una función que busque el número más grande en un arreglo.
// Ejemplo input - > [1,4,7,2,4,1,9,4,0,2,4,5,12]
// Salida -> 12

// function numeroMayor(arreglo) {
//     if (arreglo.length === 0) {

//         return undefined;
//     }

//     let numeroMayor = arreglo[0];  // Inicializar con el primer elemento

//     for (let i = 1; i < arreglo.length; i++) {
//         if (arreglo[i] > numeroMayor) {
//             numeroMayor = arreglo[i];
//         }
//     }

//     return numeroMayor;
// }


// const arregloNumeros = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
// const resultado = numeroMayor(arregloNumeros);
// console.log(resultado); 


// 4.- Crear una función que busque el número más pequeño en el arreglo.
// Ejemplo input - > [1,4,5,-1,-7,2,3,9]
// Salida -> -7

// function numeroMenor(arreglo) {
//     if (arreglo.length === 0) {

//         return undefined;
//     }

//     let numeroMenor = arreglo[0];  // Inicializar con el primer elemento

//     for (let i = 1; i < arreglo.length; i++) {
//         if (arreglo[i] < numeroMenor) {
//             numeroMenor = arreglo[i];
//         }
//     }

//     return numeroMenor;
// }


// const arregloNumerosMenor = [1,4,5,-1,-7,2,3,9];
// const resultadoNumeroMenor = numeroMenor(arregloNumerosMenor);
// console.log(resultadoNumeroMenor); 

// 5.- Crear una clase llamada ``Contacto`` con los siguientes datos:
// Nombre
// Apellidos
// Teléfono
// Después crear una clase que sea ListaContactos la cual tendrá dos métodos:
// Agregar un contacto.
// Buscar un contacto por nombre

class Contacto {
    constructor(nombre, apellidos, telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }
}

class ListaContactos {
    constructor() {
        this.contactos = [];
    }

    agregarContacto(contacto) {
        this.contactos.push(contacto);
    }

    buscarContactoPorNombre(nombre) {
        return this.contactos.find(contacto => contacto.nombre === nombre);
    }
}


const listaDeContactos = new ListaContactos();

const contacto1 = new Contacto("Heber", "Miguel", "432-106-0310");
const contacto2 = new Contacto("Damaris", "Felipe", "921-414-1311");
const contacto3 = new Contacto("Rodrigo", "Miguel", "923-214-1311");
const contacto4 = new Contacto("Abile", "Miguel", "922-114-1311");

listaDeContactos.agregarContacto(contacto1);
listaDeContactos.agregarContacto(contacto2);
listaDeContactos.agregarContacto(contacto3);
listaDeContactos.agregarContacto(contacto4);

const resultadoBusqueda = listaDeContactos.buscarContactoPorNombre("Damaris");
console.log(resultadoBusqueda);  
