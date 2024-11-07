/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function education(nominativo){
    let saluto = `Ciao ${nominativo}`;
    return  saluto;
}
   const hi = (nominativo) => `Ciao ${nominativo}`;

// Invoca la funzione qui e stampa il risultato in console
const saluto = education(name);
console.log(saluto)

//Risultato atteso se si passa 'Mario': // ciao Mario