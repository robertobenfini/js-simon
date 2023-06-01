//array numer random
let arrary_num_random = [];

//contenitore array random
let num_random = document.getElementById('num');

let second = 3

//ciclo per popolare array random
function create_num(min, max){
    for(let i=0; i<5; i++){
        arrary_num_random[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return arrary_num_random;
}
//richiamo funzione con parametri
create_num(1, 100)
console.log(create_num(1, 100))

//metto l'array nel DOM
num_random.innerText = arrary_num_random;

//rimuovo l'array
setTimeout(function(){
    num_random.innerText = '';

}, second * 1000);

//variabile array numeri utente
let arrary_num_utente = []

//variabile conteggio numeri totali
let num_tot = 0;

//promt utente
setTimeout(function(){
    let num1_utente = parseInt(prompt('Inserisci il primo numero'));
    console.log(num1_utente)
    let num2_utente = parseInt(prompt('Inserisci il secondo numero'));
    let num3_utente = parseInt(prompt('Inserisci il terzo numero'));
    let num4_utente = parseInt(prompt('Inserisci il quarto numero'));
    let num5_utente = parseInt(prompt('Inserisci il quinto numero'));

    //popolo array numeri utente
    arrary_num_utente = [num1_utente, num2_utente, num3_utente, num4_utente, num5_utente]
    
    //controllo numeri
    for(let i = 0; i<arrary_num_utente.length; i++){
    let numbers = arrary_num_utente[i]

    if(arrary_num_random.includes(numbers)){
        alert(`Questo numero è corretto: ${arrary_num_utente[i]}`)
        num_tot++
    }
    else{
        alert(`Questo numero è sbagliato: ${arrary_num_utente[i]}`)   
    }
    
    }
    alert(`Hai indovinato ${num_tot}`)

}, (second + 1) * 1000);