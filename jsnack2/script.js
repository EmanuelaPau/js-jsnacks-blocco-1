// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

console.log("Hello! Snack 2. Can you enter the party?");

// Aggiungo un array con i nomi degli invitati
// Chiedo all'utente il nome attraverso un array e la salvo in una variabile nome
// creo una variabile booleana di verifica e la imposto false 
// creo un ciclo for che ha durata pari alla lunghezza dell'array
// dentro al ciclo confronto il nome dell'utente con i nomi della lista
// se il nome corrisponde trasformo la variabile di verifica in true 
// esco dal ciclo for 
// se la variabile e' true stampo un puo' entrare 
// se e' false stampo non puo entrare 

let guestsList = ["pippo", "pippi", "peppa", "peppo", "pluto", 'paperino', 'paperina', 'topolino', 'topolina', 'riccardo', 'antonio', 'stefano', 'elisabetta', 'marta', 'qui', 'quo', 'qua', 'cip', 'ciop'];
console.log(guestsList);

let yourName = prompt('Hello! Let me check id you are invited. Write here your name');
console.log(yourName);

let verifyName = false;
let listLength = guestsList.length;
console.log(listLength);

for (let i = 0; i < listLength; i++) {
    if ((guestsList[i]).value === yourName) {
        verifyName = true;
    }
}
