/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

//creo una raccolta di mail autorizzate all'accesso
const checkedMail = ["tizio@gmail.com", "caio@gmail.com", "cesare@gmail.com", "romolo@gmail.com"]

//chiedo all'utente la sua mail e salvo la risposta in una variabile
const userMail = prompt("Inserisci la tua mail");

//creo una variabile globale di valore booleano false, che poi diverrà true ad un evento (corrispondenza)
let isFound = false;

//controllo la lista di mail, una alla volta in un ciclo.
for (let i=0; i<checkedMail.length; i++){
    let mail = checkedMail[i];
    //SE la mail fornita dall'utente corrisponderà ad una nella lista la variabile globale diventa true
    if (userMail === mail){
        isFound = true;
    } //altrimenti resterà false
}
    
//finito il ciclo di controllo, SE la variabile globale sarà divenuta true, sarà loggato un messaggio affermativo
if (isFound){
    alert("Ok, your mail is authorized to access!");
    } //altrimenti un messaggio negativo.
       else{
        alert("Sorry, your mail is not authorized to access.");
       }

