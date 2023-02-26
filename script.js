'use strict'


let salary = Number(prompt('Ваш месячный доход?'));
// console.log('Месячный доход ' + salary + ' руб.');

let profit = (prompt('Дополнительные источники заработка через запятую'));
// console.log(`Дополнительные источники заработка: ${profit}`);

let extraMoney = Number(prompt(`Возможный доход из дополнительных источников: ${profit}`));
// console.log(`Дополнительный доход: ${extraMoney}`);

let expenses = prompt('Перечислите возможные расходы за период через запятую');
// console.log('Категории расходов ' + expenses);

let requiredExpenses = Number(prompt('Во сколько обойдутся обязательные статьи расходов?'));
// console.log('Обязательные расходы ' + requiredExpens1es + ' руб.');



let hasDeposit = confirm('Есть ли у Вас вклад в банке?');
// console.log(`${hasDeposit ? 'Есть вклад' : 'Вклада нет'}`);

// let budgetPerMonth = salary - requiredExpenses;
// console.log('Бюджет на месяц ' + budgetPerMonth + ' руб.');
let accumulatedIncome = []

const getAccumulatedIncome = () => {
    accumulatedIncome = Number((salary + extraMoney) - requiredExpenses)
}

getAccumulatedIncome()
console.log('Накопления за месяц: ' + accumulatedIncome + ' руб.');

let budgetPerDay = Math.floor(accumulatedIncome / 30);
// console.log('Бюджет на день ' + budgetPerDay + ' руб.');

let purpose = Number(prompt('Сколько нужно накопить?'));
// console.log('Нужно накопить ' + purpose + ' руб.');
let months = Math.ceil(purpose / accumulatedIncome);



const getTargetMonth = () => {
    return purpose / accumulatedIncome
    // if (accumulatedIncome > 0) {
    //     console.log('Вы придете к цели через ' + months + ' месяца/-ев');
    // } else {
    //     console.log('Нет бюджета для накоплений');
    // }
    
    // if (budgetPerDay < 0) {
    //     console.log('Что-то пошло не так');
    // } else if (budgetPerDay > 6000) {
    //     console.log('У Вас высокий уровень дохода');
    // } else if (budgetPerDay < 3000) {
    //     console.log('У Вас уровень дохода ниже среднего');
    // } else {
    //     console.log('У Вас средний уровень дохода');
    // } 
    // return
}

getTargetMonth()

console.log(`Ваш бюджет на месяц с учетом ваших расходов составляет:  ${accumulatedIncome}`);
console.log(`Ваша цель накопить ${purpose} руб. с учетом всех ваших расходов будет достигнута через ${getTargetMonth()} месяца`);
console.log('Дневной бюджет', budgetPerDay);



// if (accumulatedIncome > 0) {
//     console.log('Вы придете к цели через ' + months + ' месяца/-ев');
// } else {
//     console.log('Нет бюджета для накоплений');
// }

// if (budgetPerDay < 0) {
//     console.log('Что-то пошло не так');
// } else if (budgetPerDay > 6000) {
//     console.log('У Вас высокий уровень дохода');
// } else if (budgetPerDay < 3000) {
//     console.log('У Вас уровень дохода ниже среднего');
// } else {
//     console.log('У Вас средний уровень дохода');
// }
