/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vowels = ["a", "e", "i","o", "u"]

// Dichiara la funzione qui.
function letterCounter(myString, myfilter){
    let numLet = 0
    for(let i= 0 ; i < myString.length ; i++){
        if(myfilter.includes(myString[i])){
            numLet += 1;
        }
    }
    return numLet
}


// Invoca la funzione qui e stampa il risultato in console
const numVowels = letterCounter(word, vowels);
console.log(numVowels);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)