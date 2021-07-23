const polution = 90;

const normalSpeed = 90;
const polutionSpeed = 70;

if (polution >= 65){
    console.log('AVISO POR ALTA CONTAMINACIÓN: Límite de velocidad reducido a ' + polutionSpeed + ' KM/H');
} else {
    console.log('NIVEL NORMAL DE CONTAMINACIÓN: Velocidad permitida en el rango máximo normal de hasta ' + normalSpeed + ' KM/H');
}

// --------------------------------------------------

const trafficLight = 'green';

if (trafficLight === 'green' || trafficLight === 'amberInter'){
    console.log('GO ON');
} else if (trafficLight === 'red' || trafficLight === 'amber'){
    console.log('STOP');
} else {
    console.log('WTF!!');
}

// --------------------------------------------------

const subjectScore = -0;

if (subjectScore >= 0.0 && subjectScore < 5.0){
    console.log('F');
} else if (subjectScore >= 5.0 && subjectScore < 7.0){
    console.log('C');
} else if (subjectScore >=7.0 && subjectScore < 9.0){
    console.log('B');
} else if (subjectScore >=9.0 && subjectScore < 10.0){
    console.log('A');
} else if (subjectScore === 10.0){
    console.log('A+');
} else {
    console.log('Introduce a valid score')
}

// --------------------------------------------------

let sumAcc = 0;

for(i=0;i<=100;i++){
    sumAcc += i;
}

console.log(sumAcc);