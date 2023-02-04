'use strict'

let money = 100000;
let profit = 'Фриланс';
let expenses = 'Питание, Проезд, ЖКХ';
let purpose = 60000;
let period = 11;

console.log('Месячный бюджет ' + typeof money + ' Дополнительный доход ' + typeof profit);

console.log('Длина строки ' + expenses.length + ' символов');

console.log(`Период равен ${period}-ти месяцам`);

console.log(`Цель: заработать ${purpose} рублей`);

let budgetOfDay = money / 30;

console.log(Math.floor(budgetOfDay) + ' рублей/день');

console.log('Дополнительное задание');

console.log(expenses.toLowerCase());

console.log(expenses.split(','));