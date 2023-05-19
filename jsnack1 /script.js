console.log("Hello!");

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


// 1. chiedo per 10 volte il numero attraverso il prompt
// 1.1 creo un array dove storare i numeri
// 1.2 creo un ciclo for che duri 10 volte
// 1.3 dentro al ciclo for aggiungo un prompt dove chiedo all'utente un numero
// 1.4 salvo quel numero dentro alla mia array


// 2. sommo i numeri che mi ha dato
// 2.0 creo una variabile somma
// 2.1 creo un ciclo for che duri 10 volte
// 2.2 prendo il numero dentro al mio array corrispondente al numero del ciclo in cui sono
// 2.3 lo sommo alla variabile somma


// 3. stampo la somma
// 3.1 richiamo la mia variabile somma

// let numbersList = [];

// for (let i = 0; i < 10; i++) {
//     let myNumber = prompt(`${i} tell me a number`);

//     if (isNaN(myNumber)) {
//         let myText = document.querySelector('main');
//         myText.innerHTML +=
//             `<p class="text-center fw-bold text-danger">
//             write a number
//             </p>`;
//         throw new Error('write a number');
//     }
//     console.log(typeof (myNumber));
//     numbersList.push(myNumber);
// }

// console.log(numbersList);

// let mySum = 0;

// for (let i = 0; i < 10; i++) {
//     myNumber = parseInt(numbersList[i]);
//     console.log(myNumber)
//     mySum = mySum + myNumber;
// }


// let myText = document.querySelector('main');
// myText.innerHTML +=
//     `<p class="text-center fw-bold">
//     The sum of your numbers is ${mySum}
//     </p>`;
// console.log(`The sum of your numbers is ${mySum}`);


// Simplify cicle 

let mySum = 0;

for (let i = 0; i < 10; i++) {
    let myNumber = prompt(`${i} tell me a number`);

    if (isNaN(myNumber)) {
        let myText = document.querySelector('main');
        myText.innerHTML +=
            `<p class="text-center fw-bold text-danger">
            write a number
            </p>`;
        throw new Error('write a number');
    }

    myNumber = parseInt(myNumber);
    console.log(myNumber)
    mySum = mySum + myNumber;
}

let myText = document.querySelector('main');
myText.innerHTML +=
    `<p class="text-center fw-bold">
    The sum of your numbers is ${mySum}
    </p>`;
console.log(`The sum of your numbers is ${mySum}`);