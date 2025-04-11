'use strict';
const myCountry = {
    country :'Nigeria',
    capital :'Africa',
    language:['yoruba','igbo','hausa'],
    population: 220,
    neighbour: ['korean','china','japan'],

    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbour.length} neibouring countries and a capital called ${this.capital}.`);
    },
    checkIsland: function(){
        this.isIsland =true ? console.log(!this.neighbour):console.log(this.neighbour);
    }
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbour.length} neibouring countries and a capital called ${myCountry.capital}.`);


//task activities//
const person ={
    Name: 'muideen',
    Age: 22,
    country: 'nigeria'
};
console.log(person);
person.hobby=['reading','coding','cooking'];
console.log(person);
console.log(person["Age"]);
person.Age= 25;
console.log();person;
delete(person.country);
console.log(person);
person.introduce =function(){
    console.log( this.Name );
};
person.introduce();


const profile ={
    fullName: 'popoola',
    age: 20,
    hobbies:["coding","sleeping","reading"],
    isstudent: true

};
console.log(profile);
profile.introduces=function(){
    console.log(`hi i'm ${this.fullname}, i'm ${this.age} years old and my hobbies are ${this.hobbies}.`);
};
profile.introduces();