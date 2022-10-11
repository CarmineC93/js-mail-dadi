/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

//Chiedo all'utente/giocatore un numero da 1 a 6, e salvo la risposta in un variabile
const playerNum = parseInt(prompt("Scegli un numero da 1 a 6 compresi")) ;
if( playerNum > 7 ||  playerNum < 0 ){
    alert("Per giocare inserisci un valore tra 1 e 6!")
}

//salvo in una variabile il numero da 1 a 6 del computer, tramite math.random 
const computerNum = Math.floor(Math.random() * (6 - 1 + 1 )) +1;

//verifichiamo entrambi
console.log(`${playerNum} vs ${computerNum}`);

//Se il numero del giocatore è superiore a quello del computer, l'utente ha vinto
if (playerNum > computerNum){
    alert("Complimenti, hai vinto!");
} //se invece è minore, il computer ha vinto,
    else if (playerNum < computerNum){
        alert("Peccato, hai perso");
    } //altrimenti c'è pareggio
        else {
            alert("Parità!");
        }