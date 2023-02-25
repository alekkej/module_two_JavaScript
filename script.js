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

const currentDayIndex = new Date().getDay();
const currentDay = days[currentDayIndex];

// console.log(Date());
// console.log(currentDayIndex);

console.log(`Текущий день: ${currentDay}`);

function printDay(index) {
    document.writeIn(days[index])
}

for (let i = 0; i < days.length; i++) {
    printDay(i);
}




































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

