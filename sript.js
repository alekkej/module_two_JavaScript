'use strict'

let money = 100000;
let profit = 'Фриланс';
let expenses = 'Питание, проезд';
let purpose = 500000;
let period = 6;

console.log('Месячный бюджет', money, 'рублей', typeof money);
console.log(profit, typeof profit);
console.log('Длина переменной ежемесячных расходов ' + expenses.length + ' кодовых значений', typeof expenses);
console.log('Период равен', period, 'месяцев');
console.log('Цель заработать', purpose, 'рублей');

let budgetDay = money / 30;
console.log('Дневной бюджет', budgetDay, 'рублей');

console.log('Дополнительное задание:');

function splitExpenses(expenses, separator) {
    let arrayOfExpenses = expenses.split(separator);
    console.log('Массив содержит ' + arrayOfExpenses.length + ' элемента/ов');
}

let space = ' ';
let massiveExpenses = expenses.split(/[,]/);

splitExpenses(expenses, space);
console.log(expenses .toLowerCase());
console.log(massiveExpenses);










