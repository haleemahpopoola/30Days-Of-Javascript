'use strict'

//code from Day 2 to test for conditional operators//
const studentName ='haleemah'
const score1 = 80
const score2 = 85
const score3 = 75
const attendance =10//in percentage
console.log(studentName,score1, score2, score3, attendance);
const avgScore =(score1 + score2 + score3)/3
console.log(avgScore);

//ternary operators//
const grade = avgScore>=90 ? console.log(`exellent`): console.log(`good`);


//switch statement//
const language1 ='chinese';
switch (language1) {
    case 'chinese':
        console.log('Most number of native speaker');
        break;
    case 'spanish':
        console.log('2nd place in number of native speaker');
        break;
    case 'english':
        console.log('3rd place in number of native speaker');   
        break 
    case 'arabic':
        console.log('4th place');
        break
    default:
        console.log('great language too');
        break;
}


//mini-project//
const Days ='sunday'
switch (Days) {
    case 'Monday':
        console.log('Jollof Rice');
        break;
    case 'Tuesday':
        console.log('Spagetti');
    case 'Wednesday':
        console.log('Yam Porridge');
    case 'Thursday':
        console.log('Fried Rice');
    case 'Friday':
        console.log('Beans and Plantain');
    case 'Sarturday':
        console.log('Sharwama');
    default:
        console.log('Indomie');
        break;
}