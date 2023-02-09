'use strict'

let numberOne = parseFloat(prompt('Введите первое число'));
console.log('Первая переменная: ' + (numberOne));

let numberTwo = parseFloat(prompt('Введите второе число')) ;
console.log('Вторая переменная: ' + (numberTwo));

// console.log(`${20 + 10}`);
// console.log(`${20 - 10}`);
// console.log(`${20 / 10}`);
// console.log(`${20 * 10}`);
// console.log(`${20 % 10}`);


console.log('Математические действия с введенными переменными:');

console.log(`${'+ : ' + (numberOne + numberTwo).toFixed(1)}`);
console.log(`${'- : ' + (numberOne - numberTwo).toFixed(1)}`);
console.log(`${'/ : ' + (numberOne / numberTwo).toFixed(1)}`);
console.log(`${'* : ' + (numberOne * numberTwo).toFixed(1)}`);
console.log(`${'% : ' + (numberOne % numberTwo).toFixed(1)}`);