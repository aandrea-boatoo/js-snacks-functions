/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greet (nominativo){
    let clock = new Date();
    let hello = `Buongiorno`;
    if(clock.getHours() > 17){
        hello = `Buonasera`;
    } else if(clock.getHours() > 13){
        hello = `Buon pomeriggio`;
    }
    return `${hello} ${nominativo}`;
}

// Invoca la funzione qui e stampa il risultato in console
// greet(nominativo);
const saluto = greet(name);
console.log(saluto);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.