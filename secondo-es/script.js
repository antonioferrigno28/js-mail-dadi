/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

/* Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESERCIZIO 2:DADI

//RACCOLTA DATI
//Non dobbiamo raccogliere alcun dato dall'utente

//ELABORAZIONE

//Dichiarazione delle due variabili (costanti in questo caso) che rappresentano il dado dell'utente ed il dado del computer
const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;

//INTRO
alert(
  "Domani devi partire per la Puglia con tua moglie.\nStai passeggiando ed in un momento di noia, con i soldi del viaggio in tasca, vedi un BoolBet e decidi di tentare la sorte."
);

alert(
  "Benvenuto al BoolBet di Palmanova, qui NON si giocano i dadi all'americana (quelli rossi) ma alla francese (quelli bianchi).\nIl gioco d'azzardo può causare dipendenza patologica, ricordati di giocare in base alle tue possibilità"
);

alert("Sono 200€ ogni mano, se accetti continua pure, altrimenti esci");

//OUTPUT LANCIO DADI
alert("Il numero del computer è" + " " + computerNumber);
alert("Il numero dell'utente è" + " " + userNumber);

//SE il numero del computer e dell'utente sono uguali
if (computerNumber === userNumber) {
  //Display messaggio di pareggio
  alert("C'è stato un pareggio, i 200€ che hai giocato sono ancora tuoi");
}
//ALTRIMENTI SE il numero del computer è minore del numero dell'utente
else if (computerNumber < userNumber) {
  //Display messaggio di vittoria
  alert("Hai vinto!");
  alert(
    "Torno subito a casa, do la notizia a mia moglie ed allunghiamo il viaggio di qualche giorno"
  );
  //ALTRIMENTI
} else {
  //Display messaggio di sconfitta
  alert("Hai perso");
  alert(
    "Torno a casa facendo il giro lungo, vado da mia moglie che mi guarda già entusiasta per il viaggio di domani e le confesso di aver perso tutti i soldi del viaggio...\nNon si parte più, sarà meglio chiamare l'hotel e disdire."
  );
}
