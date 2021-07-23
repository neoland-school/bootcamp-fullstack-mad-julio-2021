// 00:00:00 --> estado inicial 
// 00:00:01 - 1 segundo necesito esperar un segundo para actualizar el DOM
// 00:00:02 - 2 segundos
// 00:01:00 - 60 segundos


//bloque el hilo duante los milisegundos indicados
// function waitSyn(ms) {
//     var start = new Date().getTime();
//     var end = start;
//     while (end < start + ms) {
//         end = new Date().getTime();
//     }
// }

//crear variables que representan mi problema
let minutes = 0;
let seconds = 0;
let hours = 0;
let playing = false;
let idTimer = 0;
//añade 1 segundo al cronometro
function AddOneSecond() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    if (hours === 24) {
        hours = 0;
    }
}

function play() { //iniciar el contador desde el punto en el que me habia quedado
    if (!playing) {
        playing = true;
        idTimer = setInterval(function () {
            AddOneSecond();
            printTimertoDOM();
        }, 1000)
    }
};
function pause() { //detener el timer
    playing = false;
    clearInterval = (idTimer);
};
function stop() { // parar el timer y reinicar el timer a 0
    playing = false;
    clearInterval = (idTimer);
    resetTimer();
    printTimertoDOM();
};
// los elementos del DOM que quiero actualizar

const secondsDOM = document.getElementById('seconds');
const minutesDOM = document.getElementById('minutes');
const hoursDOM = document.getElementById('hours');

//actualizar cada segundo mi cronometro

// waitSyn(1000); //espero 1 segundo bloqueando JS
// seconds++; //Sumo1 a los segundos
// //guardo en el DOM mis nuevos segundos
// //si los segundos son menor de 10, formateo ponuendo un 0
// //sino pongo los segundos como estan.
// secondsDOM.textContent = seconds < 10 ? '0' + seconds : seconds;

//lo hago de manera infinita ---- se tiene que esperar de manera infinita para que se haga por otro hilo
// while (true){ // esto es un bucle infinito y no srive porque se queda esperando toda la vida y no puede contar
//     waitSyn (1000);
//     seconds++;
// secondsDOM.textContent=seconds<10 ?'0' + seconds: seconds;
// }

// while (true) {
//     setTimeout(function){
//         waitSyn(1000);
//         seconds++;
//         secondsDOM.textContent = seconds < 10 ? '0' + seconds : seconds;
//     }
// }
//function que se va a ejecutar de manera infinita cada X seconds que le diga

setInterval(function () {
    AddOneSecond();
    printTimertoDOM();
}, 1000);

function formatTimerValue(value) {
    return value < 10 ? '0' + value : value;
}
function printTimertoDOM() {
    secondsDOM.textContent = formatTimerValue(seconds);
    minutesDOM.textContent = formatTimerValue(minutes);
    hoursDOM.textContent = formatTimerValue(hours)
}
function resetTimer() {
    seconds = 0;
    minutes = 0;
    hours = 0;
}



document.getElementById('play').addEventListener('click', play);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('pause').addEventListener('click', pause);