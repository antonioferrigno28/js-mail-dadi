/* Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo. */

/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

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

//ELABORAZIONE
//Verifichiamo se l'email è valida controllando la presenza dei caratteri "." e "@"

//SE l'email è valida procediamo con la comparison
//ALTRIMENTI display messaggio di errore

//PER i che parte da 0 fino ad arrivare all'INDICE MASSIMO (ovvero lunghezza array -1) incrementa i
//Controlla per ogni cassetto se il contenuto è uguale
//SE il contenuto è uguale
//Display messaggio login avvenuto con successo
//ALTRIMENTI
//Display messaggio di errore (NON presenza in whitelist)
