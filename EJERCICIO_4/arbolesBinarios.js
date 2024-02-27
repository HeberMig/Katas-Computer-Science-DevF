// Ejercicio 4 : Arboles binarios.
// 1.- Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no.

// class Nodo {
//     constructor(valor) {
//         this.valor = valor;
//         this.izquierda = null;
//         this.derecha = null;
//     }
// }

// function sonArbolesIdenticos(arbolA, arbolB) {
//     if (arbolA === null && arbolB === null) {
//         return true;
//     }

//     return (
//         arbolA !== null &&
//         arbolB !== null &&
//         arbolA.valor === arbolB.valor &&
//         sonArbolesIdenticos(arbolA.izquierda, arbolB.izquierda) &&
//         sonArbolesIdenticos(arbolA.derecha, arbolB.derecha)
//     );
// }


// const arbolA = new Nodo(15);
// arbolA.izquierda = new Nodo(10);
// arbolA.derecha = new Nodo(20);
// arbolA.izquierda.izquierda = new Nodo(8);
// arbolA.izquierda.derecha = new Nodo(12);
// arbolA.derecha.izquierda = new Nodo(16);
// arbolA.derecha.derecha = new Nodo(20);


// const arbolB = new Nodo(15);
// arbolB.izquierda = new Nodo(10);
// arbolB.derecha = new Nodo(20);
// arbolB.izquierda.izquierda = new Nodo(8);
// arbolB.izquierda.derecha = new Nodo(12);
// arbolB.derecha.izquierda = new Nodo(16);
// arbolB.derecha.derecha = new Nodo(20);

// if (sonArbolesIdenticos(arbolA, arbolB)) {
//     console.log("Los árboles binarios son idénticos");
// } else {
//     console.log("Los árboles binarios no son idénticos");
// }



// 2.- Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.

// class Nodo {
//     constructor(valor) {
//         this.valor = valor;
//         this.izquierda = null;
//         this.derecha = null;
//     }
// }


// function obtenerCopia(arbolOriginal) {
//     if (arbolOriginal === null) {
//         return null;
//     }

//     const copia = new Nodo(arbolOriginal.valor);
//     copia.izquierda = obtenerCopia(arbolOriginal.izquierda);
//     copia.derecha = obtenerCopia(arbolOriginal.derecha);

//     return copia;
// }


// const arbolOriginal = new Nodo(15);
// arbolOriginal.izquierda = new Nodo(10);
// arbolOriginal.derecha = new Nodo(20);
// arbolOriginal.izquierda.izquierda = new Nodo(8);
// arbolOriginal.izquierda.derecha = new Nodo(12);
// arbolOriginal.derecha.izquierda = new Nodo(16);
// arbolOriginal.derecha.derecha = new Nodo(25);


// const arbolCopia = obtenerCopia(arbolOriginal);


// console.log("Árbol Original:");
// console.log(arbolOriginal);

// console.log("\nÁrbol Copia:");
// console.log(arbolCopia);




// // 3.- Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.

// class Nodo {
//     constructor(valor) {
//         this.valor = valor;
//         this.izquierda = null;
//         this.derecha = null;
//     }
// }


// function nodosEnNivel(arbol, nivel) {
//     if (arbol === null) {
//         return [];
//     }

//     if (nivel === 1) {
//         return [arbol.valor];
//     }

//     const nodosIzquierda = nodosEnNivel(arbol.izquierda, nivel - 1);
//     const nodosDerecha = nodosEnNivel(arbol.derecha, nivel - 1);

//     return [...nodosIzquierda, ...nodosDerecha];
// }


// const arbolEjemplo = new Nodo(1);
// arbolEjemplo.izquierda = new Nodo(2);
// arbolEjemplo.derecha = new Nodo(3);
// arbolEjemplo.izquierda.izquierda = new Nodo(4);
// arbolEjemplo.izquierda.derecha = new Nodo(5);
// arbolEjemplo.derecha.izquierda = new Nodo(6);
// arbolEjemplo.derecha.derecha = new Nodo(7);


// const nivelDeseado = 1;//Agregar el nivel
// const nodosEnNivel1 = nodosEnNivel(arbolEjemplo, nivelDeseado);//Agregar el nivel
// console.log(`Nodos en el nivel ${nivelDeseado}:`, nodosEnNivel1);// lo mismo...


// 4.- Escribe una función que devuelva el número de hojas de un árbol binario.

// class Nodo {
//     constructor(valor) {
//         this.valor = valor;
//         this.izquierda = null;
//         this.derecha = null;
//     }
// }

// function numeroDeHojas(arbol) {
//     if (arbol === null) {
//         return 0;
//     }

//     if (arbol.izquierda === null && arbol.derecha === null) {
        
//         return 1;
//     }

//     const hojasIzquierda = numeroDeHojas(arbol.izquierda);
//     const hojasDerecha = numeroDeHojas(arbol.derecha);

  
//     return hojasIzquierda + hojasDerecha;
// }


// const arbolEjemplo = new Nodo(1);
// arbolEjemplo.izquierda = new Nodo(2);
// arbolEjemplo.derecha = new Nodo(3);
// arbolEjemplo.izquierda.izquierda = new Nodo(4);
// arbolEjemplo.izquierda.derecha = new Nodo(5);
// arbolEjemplo.derecha.izquierda = new Nodo(6);
// arbolEjemplo.derecha.derecha = new Nodo(7);

// const hojasEnArbol = numeroDeHojas(arbolEjemplo);
// console.log(`Número de hojas en el árbol: ${hojasEnArbol}`);
