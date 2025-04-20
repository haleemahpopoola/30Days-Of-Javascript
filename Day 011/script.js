'use strict'
const textBox = document.getElementById("textBox");
 const farahent = document.getElementById("farahent")
 const celcius = document.getElementById("celcius")
 const result =document.getElementById("result").textContent=''
 let temp;
 function convert(){
    if (farahent.checked) {
       temp=Number(textBox.value)
       temp =temp*9 /5 +32
       document.getElementById("result").textContent=temp.toFixed(1)+ "F"
    } else if (celcius.checked) {
        temp=Number(textBox.value)
        temp =(temp-32) *(5/9)
        document.getElementById("result").textContent= temp.toFixed(1) + "c"
    }else{
        document.getElementById("result").textContent= 'select a unit'
    }
 }