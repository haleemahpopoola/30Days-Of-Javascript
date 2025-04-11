'use strict';
//tassk activities//
//Basic operetors & if/else statement & template litreals//
const country ='Nigeria';
let population =440/2;
population++;
console.log(population);
const finLandPopulation =600;
console.log(finLandPopulation);
console.log(population===finLandPopulation);
console.log(population!==finLandPopulation);
console.log(population>=finLandPopulation);
console.log(population<=finLandPopulation);
if (population>=finLandPopulation) {
    console.log(`finLand Population (${finLandPopulation}) have more people than my country population (${population})`);
} else if (population<=finLandPopulation) {
    console.log(`my country population (${population}) have lesser people than finland population (${finLandPopulation})`);
}else {
    console.log(`both countries have same number  people`);
}
//conversion & coercion//
console.log('9'+'5');
console.log('19'-'13'+'17');
console.log('19'-'13'+17);
console.log(5+5+'4'+9-4-2);

//equality operators//
const numNeighbour = Number(prompt('how many neighbour country does your country have?'));
console.log(numNeighbour);
if (numNeighbour===1) {
    console.log('only 1 border')
} else if (numNeighbour>=1) {
    console.log('more than 1 border');
} else{
    console.log('no borders');
}

//logical operators//
const countryToLiveIn ='united states';
const countryToLiveInPopu = 50;
const isNotIsland= false
console.log(countryToLiveIn);
console.log(countryToLiveInPopu);
console.log(isNotIsland);
if (countryToLiveIn==='united states' &&countryToLiveInPopu<50 && !isNotIsland ) {
    console.log(`${countryToLiveIn}is good for you`);
} else{
    console.log(`${countryToLiveIn} does not meet your criteria`);
} 
//mini projects//

const studentName ='haleemah';
const score1 = 80;
const score2 = 85;
const score3 = 75;
const attendance =10;//in percentage
console.log(studentName,score1, score2, score3, attendance);
const avgScore =(score1 + score2 + score3)/3
console.log(avgScore);
if (avgScore>= 90) {
    console.log(`Exellent`);
} else if (avgScore>= 75) {
    console.log(`Good`);
} else if (avgScore>=50) {
    console.log(`Pass`);
} else {
    console.log(`poor`);
}

if (avgScore >= 90 && attendance >=7) {
    console.log(`exellent`);
} else if (avgScore >= 75 && attendance >=5) {
    console.log(`good`);
} else if (avgScore>= 50 && attendance >=4) {
    console.log('fail');
}else {
    console.log(`repeat`);
}
console.log(`${studentName} has a average score of ${Math.round(avgScore)} and attendance of ${attendance} so the grade is good `);














