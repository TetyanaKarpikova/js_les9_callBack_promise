// 1- Зробити розпорядок дня CallBack Hell
// let timeClock = 6.5;

// function wakeUp(time, cb) {
//     console.log('Подивись котра година...');
//     setTimeout(() => {
//         // console.log('WakeUp');
//         if (time < 6.1) {
//             cb('Ще є час поспати.', null);
//         } else {
//             cb(null, `Час вставати, на часах ${time}`);
//         }
//     }, 1000);
// }

// function breakFast(hour, cb) {
//     setTimeout(() => {
//         if (hour > 7) {
//             cb('Не встигаєшь поснідати', null);
//         } else {
//             cb(null, `Час для сніданку ${hour}`)
//         }
//     }, 2000);
// }

// function goingToWork(time, cb) {
//     setTimeout(() => {
//         if (time > 7.3) {
//             cb('Біжи на маршрутку', null);
//         } else {
//             cb(null, `Маєшь час пройтись пішки ${time}`);
//         }
//     }, 1500);
// }

// function work(time, cb) {
//     setTimeout(() => {
//         if (time < 8) {
//             cb("Ура, п'ємо каву, встигли", null);
//         } else {
//             cb(null, 'Працюємо...')
//         }
//     }, 4000);
// }

// function lunch(time, cb) {
//     setTimeout(() => {
//         if (time > 12 && time < 13) {
//             cb('Ходімо на обід', null);
//         } else {
//             cb(null, `Час працювати  ${time}`);
//         }
//     }, 2000);
// }

// function afternoon(time, cb) {
//     setTimeout(() => {
//         if (time < 17) {
//             cb('Ще працюємо ', null);
//         } else {
//             cb(null, 'Йдемо додому ');
//         }
//     }, 4000);
// }

// function lesson(time, cb) {
//     setTimeout(() => {
//         if (time < 20) {
//             cb('Підготуйся до лекції', null);
//         } else {
//             cb(null, `Лекція - Чатік уважніше ${time}`);
//         }
//     }, 2500);
// }

// function goBed(time, cb) {
//     setTimeout(() => {
//         if (time < 24) {
//             cb('Робимо домашнє завдання ', null);
//         } else {
//             cb(null, `Час лягати спати ${time}`);
//         }
//     }, 1500);
// }

// wakeUp(timeClock, (err, wakeUp) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(wakeUp);
//         timeClock += 0.3;
//         timeClock = +timeClock.toFixed(2);
//         breakFast(timeClock, (err, haveDinner) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(haveDinner);
//                 timeClock += Math.random();
//                 timeClock = +timeClock.toFixed(2);
//                 goingToWork(timeClock, (err, takeAll) => {
//                     if (err) {
//                         console.log(err, " it's bad");
//                     } else {
//                         console.log(takeAll);
//                         timeClock += (Math.random() * (4 - 1) + 1);
//                         timeClock = +timeClock.toFixed(2);
//                         work(timeClock, (err, workTime) => {
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(workTime, `на годиннику ${timeClock}`)
//                                 timeClock += 4;
//                                 lunch(timeClock, (err, lunchTime) => {
//                                     if (err) {
//                                         console.log(err, timeClock);
//                                     } else {
//                                         console.log(lunchTime);
//                                         timeClock += 4;
//                                         timeClock = +timeClock.toFixed(2);
//                                         afternoon(timeClock, (err, afterLunch) => {
//                                             if (err) {
//                                                 console.log(err, '(((((');
//                                             } else {
//                                                 console.log(afterLunch, ` ${timeClock}`);
//                                                 timeClock += 2.5;
//                                                 lesson(timeClock, (err, chatick) => {
//                                                     if (err) {
//                                                         console.log(err);
//                                                     } else {
//                                                         console.log(chatick);
//                                                         timeClock += 3;
//                                                         goBed(timeClock, (err, timeSleep) => {
//                                                             if (err) {
//                                                                 console.log(err);
//                                                             } else {
//                                                                 console.log(timeSleep);
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }

// });


// 2-- Зробити розпорядок дня Promise
// let timeClock = 6.5;

// function wakeUp(time) {
//     console.log('Подивись котра година...');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time < 6.1) {
//                 reject('Ще є час поспати.');
//             } else {
//                 resolve(time);
//             }
//         }, 1000);
//     })
// }

// function breakFast(hour) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (hour > 7) {
//                 reject('Не встигаєшь поснідати');
//             } else {
//                 resolve(hour);
//             }
//         }, 2000);
//     })
// }

// function goingToWork(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time > 7.3) {
//                 reject('Біжи на маршрутку');
//             } else {
//                 resolve(time);
//             }
//         }, 1500);
//     })
// }

// function work(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time < 8) {
//                 reject("Ура, п'ємо каву, встигли");
//             } else {
//                 resolve(time);
//             }
//         }, 4000);
//     })
// }

// function lunch(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time > 12 && time < 13) {
//                 reject('Ходімо на обід');
//             } else {
//                 resolve(time);
//             }
//         }, 2000);
//     })
// }

// function afternoon(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time < 17) {
//                 reject('Ще працюємо ');
//             } else {
//                 resolve(time);
//             }
//         }, 4000);
//     })
// }

// function lesson(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time < 20) {
//                 reject('Підготуйся до лекції');
//             } else {
//                 resolve(time);
//             }
//         }, 2500);
//     })
// }

// function goBed(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time < 24) {
//                 reject('Робимо домашнє завдання ');
//             } else {
//                 resolve(time);
//             }
//         }, 1500);
//     })
// }

// wakeUp(timeClock)
//     .then(timeClock => {
//         console.log(`Час вставати, на часах ${timeClock}`);
//         timeClock += 0.3;
//         return breakFast(timeClock);
//     })
//     .then(value => {
//         console.log(`Час для сніданку ${value}`);
//         value += Math.random();
//         value = +value.toFixed(2);

//         return goingToWork(value);
//     })
//     .then(value => {
//         console.log(`Маєшь час пройтись пішки ${value}`);
//         value += (Math.random() * (4 - 1) + 1);
//         value = +value.toFixed(2);

//         return work(value);
//     })
//     .then(value => {
//         console.log('Працюємо...');
//         value += 4;

//         return lunch(value);
//     })
//     .then(value => {
//         console.log(`Час працювати ${value}`);
//         value += 4;
//         value = +value.toFixed(2);

//         return afternoon(value);
//     })
//     .then(value => {
//         console.log('Йдемо додому ');
//         value += 2.5;

//         return lesson(value);
//     })
//     .then(value => {
//         console.log(`Лекція - Чатік уважніше `);
//         value += 3;

//         return goBed(value);
//     })
//     .then ( value => {
//         console.log(`Час лягати спати ${value}`);
//     })
//     .catch(reason => {
//         console.log(reason);
//     })
//     .finally(() => {
//         console.log('Done');
//     })


