// Lista Enlazada.

// 1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista.
// Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista 
// no cambia.

// class Nodo {
//     constructor(dato, siguiente = null){
//         this.dato = dato;
//         this.siguiente = siguiente;
//     }
// }


// class ListaEnlazada{
//     constructor(){
//         this.cabeza = null; 
//     }

    
//     agregar(dato){
//         const nuevoNodo = new Nodo(dato);
//         if(!this.cabeza){
//             this.cabeza = nuevoNodo; 
//             return;
//         }
//         let actual = this.cabeza;
//         while(actual.siguiente){
//             actual = actual.siguiente;
//         }
//         actual.siguiente = nuevoNodo; 
//     }

    
//     imprimir(){
//         let actual = this.cabeza;
//         while(actual){
//             console.log(actual.dato);
//             actual = actual.siguiente;
//         }
//     }

    
//     buscar(dato){
//         let actual = this.cabeza;
//         while(actual){
//             if(actual.dato === dato){
//                 return true; 
//             }
//             actual = actual.siguiente;
//         }
//         return false;
//     }

    
//     borrarDato(dato){
//         if(!this.cabeza){
//             return; 
//         }
//         if(this.cabeza.dato === dato){
//             this.cabeza = this.cabeza.siguiente; 
//             return;
//         }
//         let actual = this.cabeza;
//         let previo = null;

//         while(actual && actual.dato !== dato){
//             previo = actual;
//             actual = actual.siguiente;
//         }
//         if(!actual){
//             return; 
//         }

//         previo.siguiente = actual.siguiente; 
//     }

    
//     insertarAlFinal(dato){
//         if (this.buscar(dato)) {
            
//             console.log(`El dato ${dato} ya está en la lista. No se realizará la inserción.`);
//             return;
//         }

//         const nuevoNodo = new Nodo(dato);
//         if (!this.cabeza) {
//             this.cabeza = nuevoNodo;
//             return;
//         }

//         let actual = this.cabeza;
//         while (actual.siguiente) {
//             actual = actual.siguiente;
//         }
//         actual.siguiente = nuevoNodo;
//     }
// }


// const listaEnlazada = new ListaEnlazada();
// listaEnlazada.insertarAlFinal(1);
// listaEnlazada.insertarAlFinal(2);
// listaEnlazada.insertarAlFinal(3);
// listaEnlazada.insertarAlFinal(7); 
// console.log("Lista después de insertar datos al final evitando repetidos:");
// listaEnlazada.imprimir();

// 2.- Escribir un programa para formar una lista que realice las siguientes tareas:
// Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
// Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
// Mostrar todos los Nodos que superen un valor determinado.

class Nodo {
    constructor(dato, siguiente = null){
        this.dato = dato;
        this.siguiente = siguiente;
    }
}


class ListaEnlazada {
    constructor() {
        this.cabeza = null; 
    }

    
    agregar(dato) {
        const nuevoNodo = new Nodo(dato);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
            return;
        }

        let actual = this.cabeza;
        while (actual.siguiente) {
            actual = actual.siguiente;
        }
        actual.siguiente = nuevoNodo;
    }

    
    mostrarNodosSuperiores(valor) {
        let actual = this.cabeza;
        while (actual) {
            if (actual.dato > valor) {
                console.log(actual.dato);
            }
            actual = actual.siguiente;
        }
    }
}

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 50) + 1; 
}

const lista1 = new ListaEnlazada();
const lista2 = new ListaEnlazada();

for (let i = 0; i < 10; i++) {
    lista1.agregar(generarNumeroAleatorio());
    lista2.agregar(generarNumeroAleatorio());
}


console.log("Lista 1:");
lista1.mostrarNodosSuperiores(10); 
console.log("\nLista 2:");
lista2.mostrarNodosSuperiores(20); 