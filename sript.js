'use strict'

let salary = Number(prompt('Ваш месячный доход?'));
console.log('Месячный доход ' + salary + ' руб.');


let expenses = prompt('Перечислите возможные расходы за период через запятую');
console.log('Категории расходов ' + expenses);

let requiredExpenses = Number(prompt('Во сколько обойдутся обязательные статьи расходов?'));
console.log('Обязательные расходы ' + requiredExpenses + ' руб.');


let hasDeposit = confirm('Есть ли у Вас вклад в банке?');
console.log(`${hasDeposit ? 'Есть вклад' : 'Вклада нет'}`);

let budgetPerMonth = salary - requiredExpenses;
console.log('Бюджет на месяц ' + budgetPerMonth + ' руб.');

let budgetPerDay = Math.floor(budgetPerMonth / 30);
console.log('Бюджет на день ' + budgetPerDay + ' руб.');

let purpose = Number(prompt('Сколько нужно накопить?'));
console.log('Нужно накопить ' + purpose + ' руб.');
let months = Math.ceil(purpose / budgetPerMonth);

if (budgetPerMonth > 0) {
    console.log('Вы придете к цели через ' + months + ' месяца/-ев');
} else {
    console.log('Нет бюджета для накоплений');
}

if (budgetPerDay < 0) {
    console.log('Что-то пошло не так');
} else if (budgetPerDay > 6000) {
    console.log('У Вас высокий уровень дохода');
} else if (budgetPerDay < 3000) {
    console.log('У Вас уровень дохода ниже среднего');
} else {
    console.log('У Вас средний уровень дохода');
}