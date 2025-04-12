'use strict'
for (let voter = 0; voter <=50; voter++) {
    console.log(`voter number ${voter} is currently voting`);;
    
}
const listOfNeighbour =[
    ['Canada','Mexico',],
    ['Spain'],
    ['Norway','Sweden','Russian']
];


for (let i = 0; i <listOfNeighbour.length; i++){
    for (let y = 0; y <listOfNeighbour[i].length; y++)
        console.log(`neighbour ${listOfNeighbour[i][y]}`);

}
//task activities//
for (let i = 1; i <= 10; i++) {
    console.log(`Number: ${i}`);
  }
  
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(`Even: ${i}`);
    }
  }
  
  for (let i = 10; i >= 1; i--) {
    console.log(`Countdown: ${i}`);
  }
  
  const favMovies = ["karma", "tangled", "taxi-driver", "John Wick"];
  
  for (let i = 0; i < favMovies.length; i++) {
    console.log(`🎬 Movie ${i + 1}: ${favMovies[i]} is one of my favs!`);
  }
  
  

  let count = 5;
  while (count >= 1) {
    console.log(`(While) Countdown: ${count}`);
    count--;
  }
  
  let random =0
  let attempts =0
  const target =7
  
  while (random !== target) {
    random = Math.floor(Math.random() * 10) + 1;
    attempts++;
    console.log(`🎲 Rolled: ${random}`);
  }
  console.log(`🎯 Target hit after ${attempts} attempts!`);



// Mini Project //

const scores = [70, 85, 40, 90]; 

let total = 0;
let passedCount = 0;
for (let i = 0; i < scores.length; i++) {
  console.log(`Score: ${scores[i]}`);
  total += scores[i];

  if (scores[i] >= 50) {
    passedCount++;
  }
}

const average = total / scores.length;

console.log(`Average Score: ${average}`);
console.log(`Passed Students: ${passedCount}`);
