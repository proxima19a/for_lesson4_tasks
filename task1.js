const favoriteDrink = "coffee";
const numberOfCups = 5;
const isColdDrink = true;
const studentsFavoriteDrink = null;
const carOwner = undefined;
const itCompany = {
  name: "The Best IT Company",
  numberOfDevelopers: 500,
  isProductCompany: true
};
const id = Symbol("id");
const bigIntNumber2 = 20n;

console.log(
  Number(favoriteDrink),
  Boolean(favoriteDrink),
  String(favoriteDrink)
);
console.log(Number(numberOfCups), Boolean(numberOfCups), String(numberOfCups));
console.log(Number(isColdDrink), Boolean(isColdDrink), String(isColdDrink));
console.log(
  Number(studentsFavoriteDrink),
  Boolean(studentsFavoriteDrink),
  String(studentsFavoriteDrink)
);
console.log(Number(carOwner), Boolean(carOwner), String(carOwner));
console.log(Number(itCompany), Boolean(itCompany), String(itCompany));
// console.log(Number(id), Boolean(id), String(id));
console.log(
  Number(bigIntNumber2),
  Boolean(bigIntNumber2),
  String(bigIntNumber2)
);

let firstName='Patric'; //string
console.log(Number(firstName), Boolean(firstName), String(firstName));
let age=23;  //number
console.log(Number(age), Boolean(age), String(age));
let adult=true; //boolean
console.log(Number(adult), Boolean(adult), String(adult));
let car=null;  //null
console.log(Number(car), Boolean(car), String(car));
let charisma=undefined; //undefined
console.log(Number(charisma), Boolean(charisma), String(charisma));
let seconds=30n; //bigint
console.log(Number(seconds), Boolean(seconds), String(seconds));
let jod={
  position: "manager",
  experience: 3,
  salary: 120
}; //object
console.log(Number(jod), Boolean(jod), String(jod));
let socSecurity=Symbol("socSecurity"); //symbol
//console.log(Number(socSecurity), Boolean(socSecurity), String(socSecurity));
