'use strict'
//random password generator
function generatePassword(lenght, includeUppercase, includeLowercase, includeSymbols,includeNumbers) {
    const lowecasechars='abcdefghijklmnopqrstuvwxyz'
    const uppercasechars ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const symbolschars='~!@##$%^&*()_+'
    const numberchars = 1234567890

    let allowedchar =''
    let password =''
    allowedchar += includeLowercase ?lowecasechars: ''
    allowedchar += includeUppercase ?uppercasechars: ''
    allowedchar += includeSymbols ? symbolschars: ''
    allowedchar += includeNumbers ? numberchars:''
    if (lenght <= 0) {
        return (`password must include 1`)
    } else {
        
    }


    for (let i = 0; i < lenght; i++) {
        const randompass = Math.trunc(Math.random()*allowedchar.length);
        password +=allowedchar[randompass]
        
    }

return password;
}
const passwordLenght =12
const includeUppercase = true
const includeLowercase =true
const includeSymbols = true
const includeNumbers =true


const password =generatePassword(passwordLenght, includeUppercase, includeLowercase, includeSymbols,includeNumbers);
console.log(`GeneratePassword : ${password}`);