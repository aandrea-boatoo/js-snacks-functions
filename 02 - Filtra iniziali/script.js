/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const firstLetter = "A";

// Dichiara la funzione qui.
function filterFirstLetter(myArray, letter){
    const newArray = [];
    for(let i= 0 ; i < myArray.length ; i++){
        if(myArray[i][0] === letter){
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
const namesFiltered = filterFirstLetter(names, firstLetter);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(namesFiltered)