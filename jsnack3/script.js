console.log("Hello!");

// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,  se è dispari inseriscilo nell’array.

// creo un array 
// creo un ciclo for che dura 6 volte 
// creo un prompt legato a una variabile dove chiedo all'utente un numero 
// creo un if
// se il modulo di 2 del numero === a 0 allora e' pari e allora aggiungo il numero all'array (array.push)
// stampo l'array per verifica

let oddNumber = []
for (i = 0; i < 6; i++) {
    let myNumber = prompt('tell me a number');
    if (myNumber % 2 === 1) {
        oddNumber.push(myNumber);
    }
}
let p = document.querySelector('p');
p.innerHTML = `This are your odd numbers: ${oddNumber}`;
console.log(evenNumber);