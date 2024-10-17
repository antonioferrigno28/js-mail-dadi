/* Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo. */

/* Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

//////////////////////////////////////////////////////////////////////////////////
//ESERCIZIO 1: MAIL

const mailsList = [
  "giovanni@hello.it",
  "francesco@hello.it",
  "michele@hello.it",
  "bruno@hello.it",
  "alessandro@hello.it",
];

//RACCOLTA DATI
//L'untente deve inserire la sua email
const userEmail = prompt("Inserisci la tua email");

//ELABORAZIONE
//Verifichiamo se l'email è valida controllando la presenza dei caratteri "." e "@"
const isEmailValid = userEmail.includes("@") && userEmail.includes(".");
//Dichiaro una variabile che indica la presenza dell'utente nell'elenco con un valore di false (non presenza)
let isEmailPresent = false;

//SE l'email è valida procediamo con la comparison
if (isEmailValid) {
  //PER "i" che parte da 0 fino ad arrivare all'INDICE MASSIMO (ovvero lunghezza array -1) incrementa i
  for (i = 0; i < mailsList.length; i++) {
    //SE il contenuto è uguale (controlla per ogni cassetto)
    if (userEmail === mailsList[i]) {
      //L'indicatore che l'email è presente diventa vero
      isEmailPresent = true;
    }
  }
}
//ALTRIMENTI
else {
  // display messaggio di errore di battitura
  alert(
    "Errore nell'inserimento dell'email, assicurati di aver inserito una mail vailda "
  );
}

//SE l'email è presente nell'elenco
if (isEmailPresent) {
  //Display messaggio di riuscita
  alert("Sei presente nella whitelist, benvenuto.");
  //ALTRIMENTI
} else {
  //Display messaggio di non presenza nella lista
  alert("Non sei presente in whitelist, accesso negato");
}

////////////////////////////////////////////////////////////////////////////////////////////////////
