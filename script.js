'use strict'

const days = [
    'Воскреснье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
]
const weekendDayIndex = [0, 6];
const currentDayIndex = new Date().getDay();
const currentDay = days[currentDayIndex];

// console.log(Date());
// console.log(currentDayIndex);

// console.log(`Текущий день: ${currentDay}`);

function printDay(index) {
    const textStyle = `text ${currentDayIndex === index ? 'italic' : ''} ${weekendDayIndex.includes(index) ? 'bold' : ''}`
    document.write(`<div class='${textStyle}'>${days[index]}</div>`)
}

for (let i = 0; i < days.length; i++) {
    printDay(i);
}

const arrFirst = [
    '321',
    '124',
    '1251',
    '522',
    '7623',
    '4362',
    '312'
];

arrFirst.forEach((item) => {
    if (item.startsWith('3') || item.startsWith('7')) {
        console.log(item);
    }
});


const arrSecond = [
    '721',
    '124',
    '7251',
    '322',
    '4623',
    '4362',
    '612'
];

function checkFirstNumber([firstNumber]) {
    return firstNumber === '3' || firstNumber === '7'
};

console.log(arrSecond.filter(checkFirstNumber));

// const arrThird = [
//     321,
//     124,
//     1251,
//     522,
//     7623,
//     4362,
//     312
// ];

// function checkFirstNumber(number) {
//     let firstNumber = number;

//     while (number > 10) firstNumber /= 10;
//     firstNumber = Math.floor(firstNumber);
//     return firstNumber === 3 || firstNumber === 7;

































// let date = new Date();
// let weekday = date.getDay();

// let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// let lineBreak = [];

// for (let j = 5; j < 7; j++) {
//     week[j] = `<b>${week[j]}</b>`
// };


// for (let i = 0; i < week.length; i++) {
//     lineBreak = lineBreak + week[i] + '<br \/>'
// };

// console.log(lineBreak);
// document.write(lineBreak);
// document.write(date);
// document.write(' ' + weekday);

// week[5] = `<b>${week[5]}</b>`;
// week[6] = `<b>${week[6]}</b>`;

// if (weekday = 0) {
//     week[6] = `<i>${week[6]}</i>`;
// } else if (weekday = 1) {
//     week[0] = `<i>${week[0]}</i>`;
// }  else if (weekday = 2) {
//     week[1] = `<i>${week[1]}</i>`;
// }  else if (weekday = 3) {
//     week[2] = `<i>${week[2]}</i>`;
// }  else if (weekday = 4) {
//     week[3] = `<i>${week[3]}</i>`;

// }  else

// if (weekday = 5) {
//     week[4] = `<i>${week[4]}</i>`;
// }

// else if (weekday = 6) {
//     week[5] = `<i>${week[5]}</i>`;
// }

// for (let d = 0; d < week.length; d++) {
//     week[d] = `<i>${week[d]}</i>`;
// }