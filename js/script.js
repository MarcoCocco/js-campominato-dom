/* 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; 
*/

// Collego gli elementi del DOM
let startButtonEl = document.getElementById('start-button');
let gridEl = document.getElementById('grid');
let difficultEl = document.getElementById('difficult');

let winPopUpEl = document.getElementById('win-popup');
let losePopUpEl = document.getElementById('lose-popup');
let loseResetButtonEl = document.querySelector('.lose-reset-btn');
let winResetButtonEl = document.querySelector('.win-reset-btn');

// Aggiungo una variabile sentinella che indica se la griglia sia già stata generata, e la inizializzo su false
let gridGen = false;

// Evento che gestisce la difficoltà, al click resetta i parametri nascondendo la griglia e svuotando il suo contenuto, aggiornando la variabile sentinella in false, qualora ci fosse una griglia attiva
difficultEl.addEventListener('click', function () {
    gridEl.style.display = 'none';
    gridEl.innerHTML = '';
    gridGen = false;
});

// Evento che gestisce il pulsante start
startButtonEl.addEventListener('click', function () {

    let score = 0;

    // Dopo l'avvio viene mostrato il contenitore della griglia
    gridEl.style.display = 'flex';

    // A seconda del livello selezionato, il numero di quadrati della griglia cambia, richiamando dentro un ciclo for la funzione che crea un quadrato, inserendolo dentro il contenitore della griglia
    if (difficultEl.value === '1') {

        if (!gridGen) {

            let bombNumbers = []

            getANumberList(bombNumbers, 16, 1, 100)
            console.log(bombNumbers);

            for (let i = 1; i <= 100; i++) {

                let squareEl = createSquare('', 10, 10);

                gridEl.append(squareEl);

                squareEl.addEventListener('click', function () {

                    if (bombNumbers.includes(i)) {

                        squareEl.classList.add('bombactive');
                        losePopUpEl.classList.remove('hidden');
                        let scoreEl = document.createElement('p');
                        scoreEl.textContent = `Punteggio: ${score}`;
                        losePopUpEl.append(scoreEl);

                        loseResetButtonEl.addEventListener('click', function () {
                            losePopUpEl.classList.add('hidden');
                            scoreEl.innerHTML = '';
                            gridEl.style.display = 'none';
                            gridEl.innerHTML = '';
                            gridGen = false;
                        });

                    } else {

                        squareEl.classList.add('active');
                        console.log(i);
                        score++;

                    }

                    if (score === 100 - 16) {

                        winPopUpEl.classList.remove('hidden');
                        let scoreEl = document.createElement('p');
                        scoreEl.textContent = `Punteggio: ${score}`;
                        winPopUpEl.append(scoreEl);

                        winResetButtonEl.addEventListener('click', function () {
                            winPopUpEl.classList.add('hidden');
                            scoreEl.innerHTML = '';
                            gridEl.style.display = 'none';
                            gridEl.innerHTML = '';
                            gridGen = false;
                        });
                    }

                })

            }

            // Aggiorna la variabile sentinella, mostrando che la griglia è stata creata
            gridGen = true;

        }

    } else if (difficultEl.value === '2') {

        if (!gridGen) {

            let bombNumbers = []

            getANumberList(bombNumbers, 16, 1, 81)
            console.log(bombNumbers);

            for (let i = 1; i <= 81; i++) {

                let squareEl = createSquare('', 9, 10);

                gridEl.append(squareEl);

                squareEl.addEventListener('click', function () {

                    if (bombNumbers.includes(i)) {

                        squareEl.classList.add('bombactive');
                        losePopUpEl.classList.remove('hidden');
                        let scoreEl = document.createElement('p');
                        scoreEl.textContent = `Punteggio: ${score}`;
                        losePopUpEl.append(scoreEl);

                        loseResetButtonEl.addEventListener('click', function () {
                            losePopUpEl.classList.add('hidden');
                            scoreEl.innerHTML = '';
                            gridEl.style.display = 'none';
                            gridEl.innerHTML = '';
                            gridGen = false;
                        });

                    } else {

                        squareEl.classList.add('active');
                        console.log(i);
                        score++;

                        if (score === 81 - 16) {

                            winPopUpEl.classList.remove('hidden');
                            let scoreEl = document.createElement('p');
                            scoreEl.textContent = `Punteggio: ${score}`;
                            winPopUpEl.append(scoreEl);

                            winResetButtonEl.addEventListener('click', function () {
                                winPopUpEl.classList.add('hidden');
                                scoreEl.innerHTML = '';
                                gridEl.style.display = 'none';
                                gridEl.innerHTML = '';
                                gridGen = false;
                            });
                        }

                    }

                })
            }

            gridGen = true;

        }

    } else if (difficultEl.value === '3') {

        if (!gridGen) {

            let bombNumbers = []

            getANumberList(bombNumbers, 16, 1, 49)
            console.log(bombNumbers);

            for (let i = 1; i <= 49; i++) {

                let squareEl = createSquare('', 7, 10);

                gridEl.append(squareEl);

                squareEl.addEventListener('click', function () {

                    if (bombNumbers.includes(i)) {

                        squareEl.classList.add('bombactive');
                        losePopUpEl.classList.remove('hidden');
                        let scoreEl = document.createElement('p');
                        scoreEl.textContent = `Punteggio: ${score}`;
                        losePopUpEl.append(scoreEl);

                        loseResetButtonEl.addEventListener('click', function () {
                            losePopUpEl.classList.add('hidden');
                            scoreEl.innerHTML = '';
                            gridEl.style.display = 'none';
                            gridEl.innerHTML = '';
                            gridGen = false;
                        });

                    } else {

                        squareEl.classList.add('active');
                        console.log(i);
                        score++;

                        if (score === 49 - 16) {

                            winPopUpEl.classList.remove('hidden');
                            let scoreEl = document.createElement('p');
                            scoreEl.textContent = `Punteggio: ${score}`;
                            winPopUpEl.append(scoreEl);

                            winResetButtonEl.addEventListener('click', function () {
                                winPopUpEl.classList.add('hidden');
                                scoreEl.innerHTML = '';
                                gridEl.style.display = 'none';
                                gridEl.innerHTML = '';
                                gridGen = false;
                            });
                        }

                    }


                })

            }

            gridGen = true;

        }

    }

});

// Funzione che genera un array di numeri randomici che non si ripetono tra loro, specificando il nome dell'array da creare (dichiarato vuoto in precedenza), la quantità di numeri randomici che deve contenere e il range di numeri (min-max) da prendere in considerazione.
function getANumberList(arrayName, arrayLength, min, max) {

    while (arrayName.length < arrayLength) {

        const randomNumber = getRandomNumber(min, max);

        if (!arrayName.includes(randomNumber)) {
            arrayName.push(randomNumber);
        }
    }

    return arrayName;
}

// Funzione che genera un numero random in un range specificato di numeri
function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// La funzione mi permette di creare un quadrato dalla grandezza variabile in base al numero di colonne utilizzate nella griglia e il gap dato
function createSquare(squareNum, colNum, gap) {

    let square = document.createElement('div');

    square.style.width = `calc(100% / ${colNum} - ${gap}px)`;
    square.style.height = `calc(100% / ${colNum} - ${gap}px)`;
    square.style.textAlign = 'center';
    square.classList.add('square');
    square.textContent = squareNum;

    return square;

}




