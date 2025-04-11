'use strict';
//funtions declaration, expression, arrow, returning values, calling functions...//
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
};
const describe1 = describeCountry('nigeria', 220, 'africa');
const describe2 = describeCountry('korean', 22, 'japanese');
const describe3 = describeCountry('united-states', 180, 'america');
console.log(describe1, describe2, describe3);


const percentageOfWorld1 =function (country,population, percentage){
    return `${country} has ${population} million people, so its about ${percentage}% of the world population`
};
const per1 =percentageOfWorld1('china',1441, (1441/7900)*100);
console.log(per1);
const per2 =percentageOfWorld1('nigeria', 220, (220/7900)*100);
console.log(per2);
const per3 =percentageOfWorld1('spanish', 3300, (3300/7900)*100);
console.log(per3);

function percentageOfWorld2(country, population,percentage) {
    return `${country} has ${population} million people, so its about ${percentage}% of the world population`
};
const per4 =percentageOfWorld2('china',1441, (1441/7900)*100);
console.log(per4);
const per5 =percentageOfWorld2('nigeria', 220, (220/7900)*100);
console.log(per5);
const per6 =percentageOfWorld2('spanish', 3300, (3300/7900)*100);
console.log(per6);



const percentageOfWorld3 =(country,population,percentage) =>{
    return `${country} has ${population} million people, so its about ${percentage}% of the world population`
};
const per7 =percentageOfWorld3('china',1441, (1441/7900)*100);
console.log(per7);
const per8 =percentageOfWorld3('nigeria', 220, (220/7900)*100);
console.log(per8);
const per9 =percentageOfWorld3('spanish', 3300, (3300/7900)*100);
console.log(per9);

const percentageOfWorld4 =(population) => (population/7900)*100;
const par1 =percentageOfWorld4(1441)
console.log(par1);




const describePopulation =function(country,population){
    const par =percentageOfWorld4(population)
    return `${country} has ${population} million people, so its about ${par}% of the world population`
};
const par2 =describePopulation('korean', 1330);
console.log(par2);

//mini-project//

function calculateBMI(height,weight) {
    const calBmi =(weight/(height*2))
    return calBmi
};
const bmi =calculateBMI(1.78, 78);
console.log(bmi);
function interpreteBMI(bmi) {
    if (bmi < 18.5) {
        return 'underweight'
    } else if (bmi < 25 ) {
        return 'normal'
    }else if (bmi < 30) {
        return 'overweight'
    }else{
        return 'obese'
    }
};
const bmiNumber =interpreteBMI(bmi);
console.log(bmiNumber);
console.log(`your BMI is ${Math.round(bmi)} which is ${bmiNumber} `);