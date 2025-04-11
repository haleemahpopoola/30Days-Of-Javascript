'use strict';
const populy = ['nideria','ghana','colombia','tanzania'];
console.log(populy.length===4);


const neighbourCountyr = new Array('korean','china','japan');
console.log(neighbourCountyr);
neighbourCountyr.push('utopia');
console.log(neighbourCountyr);
neighbourCountyr.pop('utopia'),
console.log(neighbourCountyr);
if (!neighbourCountyr.includes('germany')) {
    console.log(`peobably not a centrak european country :D`);
};
console.log(neighbourCountyr);
neighbourCountyr [neighbourCountyr.indexOf('korean')] ='republic of korea';
console.log(neighbourCountyr);

//task activities//
const favFood =[
    'semovita',
    'rice',
    'beans',
    'yam',
    'spagetti'
]
console.log(favFood);
favFood[favFood.indexOf('beans')] = 'pounded-yam';
console.log(favFood);
favFood.push('pap');
console.log(favFood);
favFood.pop('pap');
console.log(favFood);
console.log(favFood.includes('pizza'));
console.log(favFood.indexOf('rice'));
console.log(favFood.length);
console.log(favFood);


//mini-project//
const toDoList =[

];
console.log(toDoList);
toDoList.push('Assignment');
toDoList.push('code');
toDoList.unshift('sleep')
console.log(toDoList);;
console.log(toDoList.length);
console.log(toDoList.includes('code'));