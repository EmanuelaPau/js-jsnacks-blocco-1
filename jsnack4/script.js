console.log("Hello!");

// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

// aggiungi una variabile e chiedi con il prompt un numero di 4 cifre 
// verifica che il numero sia di 4 cifre
// se la variabile.lenght === 4, allora prosegui. se no manda errore e richiedi
// prendi singole cifre ???? 
// somma le cifre 

let yourNumber = prompt('give me a 4 digits number!')

if (isNaN(yourNumber)) {
    alert('please write a number!');
    throw new Error("Something went badly wrong! Write a number!");
} else if (yourNumber.length !== 4) {
    alert('please write a 4 digits!');
    throw new Error("Something went badly wrong! Wrong number!");
}

console.log(yourNumber);
yourNumber = String(yourNumber);
yourNumberSum = 0;

for (i = 0; i < 4; i++) {
    newNumber = parseInt(yourNumber.charAt(i));
    console.log(`Tis is the ${i} digit of your Number: ${newNumber}`)
    yourNumberSum = yourNumberSum + newNumber;
}

console.log(`your number digits sum is ${yourNumberSum}`);