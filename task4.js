// 1 - NaN
console.log(Number(" 1 2 3 4 5"));
// 2 - NaN
console.log(Number("1234 5"));
// 3 - 12345
console.log(Number("12345"));
// 4 - 'false'
console.log(String(false));
// 5 - false
//console.log(Boolean(0000000));
// 6 - true
console.log(Boolean(0.0000001));
// 7 - 'undefined'
console.log(String(undefined));
// 8 - NaN
console.log(Number("100f"));
// 9 - 100
console.log(Number("100"));
// 10 - 1
console.log(Number("000001"));

// // 1
// console.log(Number(' 1 2 3 4 5')); //"12345" number - ошибка, правоильный ответ - NaN
// // 2
// console.log(Number('1234 5')); //"12345" number - ошибка, правоильный ответ - NaN
// // 3
// console.log(Number('12345')); // "12345" number
// // 4
// console.log(String(false)); // "false" string
// // 5
// console.log(Boolean(0000000)); // "false" boolean
// // 6
// console.log(Boolean(0.0000001)); // "true" boolean
// // 7
// console.log(String(undefined)); // "undefined" string
// // 8
// console.log(Number('100f')); // "NaN"
// // 9
// console.log(Number('100')); // "100" number
// // 10
// console.log(Number('000001')); // "1" number
