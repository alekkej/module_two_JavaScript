'use strict'

function sumSalaries(salaries) {
    let sum = 0;
    for (const salary of Object.values(salaries)) {
        sum += salary;
    } 
    return sum;
}

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

console.log('Сумма зарплат: ' + sumSalaries(salaries) );

// const sum = salaries.Ann + salaries.John + salaries.Pete

let studentScores = {
    Коля: 99,
    Вася: 35,
    Петя: 70,
    Таня: 95,
    Оля: 50,
    Саша: 20,
}

for (const key of Object.keys(studentScores)) {
    // console.log(key + ' ' + studentScores[key]);
    if (studentScores[key] < 80) {
        console.log('Студент ' + key + ' не проходит отбор');
    } else {
        console.log(key + ' ' + studentScores[key]);
    };
}

// console.log(Object.values(studentScores));

// function studentScoresCheck(params) {
//     for (const key of Object.keys(studentScores)) {
//         console.log(studentScores[key]);
//         for (let k = 0; k < Object.keys.length; k++) {
//             const check = studentScores[k];
//             if (studentScores[k] < 80) {
//                 delete studentScores[k];
//             } else {
//                 console.log(studentScores[k]);
//             }       
//         }
//     }
// }

// studentScoresCheck()

