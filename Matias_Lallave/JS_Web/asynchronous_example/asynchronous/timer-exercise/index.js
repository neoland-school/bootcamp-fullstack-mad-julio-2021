/**
 * TIMER EXAMPLE
 * features:
 *  start timer
 *  pause timer
 *  stop timer
 *  save timer state
 */

//00:00:00 -> Estado inicial
//00:00:01 -> Cuando pase 1 segundo: Necesito esperar 1 segundo para actualizar el DOM
//00:00:02 -> cuando pase otro segundo
//00:01:00 -> Cuando hayan pasado 60 segundos en total

// BLOQUEA EL HILO DE JS DURANTE LOS MILISEGUNDOS INDICADOS
function waitSync(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function storeCurrentValue(){
    // Guardar los valores actuales en el storage del navegador
    localStorage.setItem('miliseconds', miliseconds);
    localStorage.setItem('seconds', seconds);
    localStorage.setItem('minutes', minutes);
    localStorage.setItem('hours', hours);
}

function initializeTimerItem(storedItemName){
    const storedItemValue = localStorage.getItem(storedItemName);
    return storedItemValue !== null ? parseInt(storedItemValue) : 0;
}

function storeTimerPlayingState(){
    localStorage.setItem('playing', playing);
}

function initializeTimerPlayingState(){
    const isPlaying = localStorage.getItem('playing');
    return isPlaying !== null ? JSON.parse(isPlaying) : false;
}

// Creo las variables que representan mi problema
let minutes = initializeTimerItem('minutes');
let seconds = initializeTimerItem('seconds');
let hours = initializeTimerItem('hours');
let miliseconds = initializeTimerItem('miliseconds');
const REFRESH_TIME = 18;
let playing = initializeTimerPlayingState();
let idTimer = 0;

// Añade un segundo al cronometro
function updateInternalTimer() {
  miliseconds += REFRESH_TIME;
  if (miliseconds >= 1000) {
    miliseconds = 0;
    seconds++;
  }
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
  storeCurrentValue();
}

// Los elementos del DOM que quiero actualizar
const milisDOM = document.getElementById('MILISECONDS');
const secondsDOM = document.getElementById('SECONDS');
const minutesDOM = document.getElementById('MINUTES');
const hoursDOM = document.getElementById('HOURS');

function formatTimerValueForTwoDigits(value) {
  // Formatear un valor del timer
  return value < 10 ? '0' + value : value;
}

function resetTimer(){
    miliseconds=0;
    seconds=0;
    minutes=0;
    hours=0;
    storeCurrentValue();
}

function formatTimerValueForThreeDigits(value) {
  // Formatear un valor del timer de tres digitos
  if (value < 10) return '00' + value;
  if (value < 100) return '0' + value;
  return value;
}

function printTimerToDOM() {
  milisDOM.textContent = formatTimerValueForThreeDigits(miliseconds);
  secondsDOM.textContent = formatTimerValueForTwoDigits(seconds);
  minutesDOM.textContent = formatTimerValueForTwoDigits(minutes);
  hoursDOM.textContent = formatTimerValueForTwoDigits(hours);
}

function initializeTimer(){
    idTimer = setInterval(function () {
        updateInternalTimer();
        printTimerToDOM();
      }, REFRESH_TIME);
}

// Actualizar cada segundo mi cronometro
// waitSync(1000); // Espero 1 segundo bloquando JS
// seconds++; // Sumo 1 a los segundos
// // Guardo en el DOM mis nuevos segundos
// // Si los segundos son menor que 10, formateo poniendo un 0
// // sino pongo los segundos como están
// secondsDOM.textContent = seconds<10 ? '0'+seconds : seconds;
// setTimeout(function(){
//     seconds++;
//     secondsDOM.textContent = seconds<10 ? '0'+seconds : seconds;
// }, 1000); // Espero 1 segundo SIN bloquear JS

// Espero de manera infinita
// while(true){ // Necesito quitar esto o cortarlo
//     setTimeout(function(){
//         seconds++;
//         secondsDOM.textContent = seconds<10 ? '0'+seconds : seconds;
//         console.log(seconds);
//     }, 1000);
// }

// funcion que se va a ejecutar de manera infinita
// cada x ms que yo le diga
// esperar cada segundo de manera infinita

function play() {
  // Iniciar el contador desde el punto en el que me habia quedado
  if (!playing) {
    playing = true;
    initializeTimer();
    storeTimerPlayingState();
  }
}

function pause() {
    // 1- detener el timer
    playing = false;
    storeTimerPlayingState();
    clearInterval(idTimer);
}

function stop() {
    // 1- Parar el timer: 
    // 2- reiniciar el timer a cero
    playing = false;
    storeTimerPlayingState();
    clearInterval(idTimer);
    resetTimer();
    printTimerToDOM();
}

document.getElementById('PLAY').addEventListener('click', play);
document.getElementById('STOP').addEventListener('click', stop);
document.getElementById('PAUSE').addEventListener('click', pause);

if(playing){
    initializeTimer();
}
printTimerToDOM();
