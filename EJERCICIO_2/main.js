// 1.- Se tiene una cola de colores y se tiene que dividir en dos colas, 
//respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.
// Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
// Cola 1: [ amarillo, rojo, azul, morado]
// Cola 2: [rosa, verde, negro, blanco]


// function dividirEnColas(colaOriginal) {
//     let cola1 = [];
//     let cola2 = [];

//     for (let i = 0; i < colaOriginal.length; i++) {
//         if (i % 2 === 0) {
//             cola1.push(colaOriginal[i]);
//         } else {
//             cola2.push(colaOriginal[i]);
//         }
//     }

//     return [cola1, cola2];
// }

// let colaOriginal = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
// let [cola1, cola2] = dividirEnColas(colaOriginal);

// console.log("Cola original:", colaOriginal);
// console.log("Los Pares en Cola 1:", cola1);
// console.log("Los Nones en Cola 2:", cola2);

// 2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. 
// Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos 
// que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
// Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.

function retirarColados(colaInicial) {
    let colaFinal = [];
    let coladosRetirados = [];

    while (colaInicial.length > 0) {
       
        let persona = colaInicial.shift();

        
        if (persona.ticket) {
            
            colaFinal.push(persona);
        } else {
          
            coladosRetirados.push(persona);
        }
    }

    return { colaFinal, coladosRetirados };
}


let colaInicial = [
    { user: 'User1', ticket: true },
    { user: 'User2', ticket: true },
    { user: 'User3', ticket: false },
    { user: 'User4', ticket: true },
    { user: 'User5', ticket: false },
    { user: 'User6', ticket: false },
    { user: 'User7', ticket: true },
    { user: 'User8', ticket: true },
    { user: 'User9', ticket: true },
    { user: 'User10', ticket: false },
    { user: 'User11', ticket: true },
];

console.log("Cola inicial:", colaInicial.map(persona => persona.user));
let resultado = retirarColados(colaInicial);
console.log("Colados retirados:", resultado.coladosRetirados.map(persona => persona.user + " No tiene ticket"));
console.log("Cola final:", resultado.colaFinal.map(persona => persona.user + " Si tiene ticket"));
