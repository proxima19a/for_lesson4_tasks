console.log("console.log");
console.log(String(console.log));
console.log(Number(console.log));
console.log(Boolean(console.log));

console.log("{ name: ‘Maxim’ }");
console.log(String({ name: "Maxim" }));
console.log(Number({ name: "Maxim" }));
console.log(Boolean({ name: "Maxim" }));

console.log("Symbol(‘key’)");
console.log(String(Symbol("key")));
// console.log(Number(Symbol('key')));
console.log(Boolean(Symbol("key")));

console.log("Number");
console.log(String(Number));
console.log(Number(Number));
console.log(Boolean(Number));

console.log("пустая строка");
console.log(String(""));
console.log(Number(""));
console.log(Boolean(""));

console.log("0");
console.log(String(0));
console.log(Number(0));
console.log(Boolean(0));

console.log("-10");
console.log(String(-10));
console.log(Number(-10));
console.log(Boolean(-10));

console.log("-10");
console.log(String("-105"));
console.log(Number("-105"));
console.log(Boolean("-105"));


console.log(String(console.log));
// Возвращает: "function () { [native code] }"
console.log(String({ name: 'Maxim' }));
// Возвращает: "[object Object]"
console.log(String(Symbol('key')));
// Возвращает: "Symbol(key)"
console.log(String(Number));
// Возвращает: "function Number() { [native code] }"
console.log(String(''));
// Возвращает: ""
console.log(String(0));
//Возвращает: "0"
console.log(String(-10));
// Возвращает: "-10"
console.log(String('-105'));
// Возвращает: "-105"

