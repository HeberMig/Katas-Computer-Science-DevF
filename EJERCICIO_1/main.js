// Ejercicio 1 : Pilas.
// 1.- Hacer una función que reciba como parámetros una pila, y un número. 
// La función debe retornar tantos elementos como diga el número (segundo parámetro).
// Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
// Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’].


// function mostrarPila(pila, numero) {
//     if (numero <= 0 || numero > pila.length) {
//         console.log("Error");
//         return;
//     }
//     const valoresMostrados = pila.slice(0, numero);
//     console.log(valoresMostrados);
// }

// mostrarPila(['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'], 3);

// 2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, 
// y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece 
// en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos 
// más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]

  
// function reemplazar(pila, nuevo, viejo) {
//     const pilaTemporal = [];
//     let encontrado = false;

//     while (pila.length > 0) {
//         const elemento = pila.pop();

//         if (!encontrado && elemento === viejo) {
//             pilaTemporal.push(nuevo);
//             encontrado = true;
//         } else {
//             pilaTemporal.push(elemento);
//         }
//     }

//     while (pilaTemporal.length > 0) {
//         pila.push(pilaTemporal.pop());
//     }
// }



// const miPila = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
// console.log(miPila);
// reemplazar(miPila, 7, 2);
// console.log(miPila);

// function reemplazar(pila, nuevo, viejo) {
//     const nuevaPila = [];
//     let reemplazado = false;

//     while (pila.length > 0) {
//         const elemento = pila.pop();

//         if (elemento === viejo && !reemplazado) {
//             nuevaPila.push(nuevo);
//             reemplazado = true;
//         } else {
//             nuevaPila.push(elemento);
//         }
//     }

//     return nuevaPila.reverse();
// }


// const resultado = reemplazar([3, 2, 3, 4, 6, 8, 1, 2, 5, 5], 7, 2);
// console.log(resultado);  



// 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. 
// Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. 
//Muestre el camino recorrido tanto de ida como de vuelta.
// Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
// Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

// function recorridoPueblos(pueblos) {
    
//     console.log("Recorrido de ida:");
//     for (let i = 0; i < pueblos.length; i++) {
//         console.log(`Pueblo ${pueblos[i]}`);
//     }


//     console.log("Recorrido de vuelta:");
//     for (let i = pueblos.length - 1; i >= 0; i--) {
//         console.log(`Pueblo ${pueblos[i]}`);
//     }
// }

// // Ejemplo de uso:
// const pueblosRecorridos = ["Origen", "Pueblo 1", "Pueblo 2", "Destino"];
// recorridoPueblos(pueblosRecorridos);



// 4.- Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación.
//  Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima 
//  de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.

class Almacen {
    constructor(capacidad) {
        this.contenedores = [];
        this.capacidad = capacidad;
    }

    apilarContenedor(contenedor) {
        if (this.contenedores.length < this.capacidad) {
            this.contenedores.push(contenedor);
            console.log(`Contenedor ${contenedor} apilado.`);
        } else {
            console.log("El almacén está lleno. No se puede apilar más contenedores.");
        }
    }

    retirarContenedor(contenedor) {
        const pilaTemporal = [];

        while (this.contenedores.length > 0) {
            const actual = this.contenedores.pop();

            if (actual === contenedor) {
                console.log(`Contenedor ${contenedor} retirado.`);
                break;
            } else {
                pilaTemporal.push(actual);
            }
        }

        while (pilaTemporal.length > 0) {
            this.contenedores.push(pilaTemporal.pop());
        }
    }

    mostrarContenedores() {
        console.log("Contenedores en el almacén:", this.contenedores);
    }
}

// Ejemplo de uso:
const almacen = new Almacen(5);
almacen.apilarContenedor(1);
almacen.apilarContenedor(2);
almacen.apilarContenedor(3);
almacen.mostrarContenedores();

almacen.retirarContenedor(2);
almacen.mostrarContenedores();
