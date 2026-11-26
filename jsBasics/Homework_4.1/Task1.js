//Створіть програму, в якій ви оголосите змінні для кожного з примітивних типів даних: 
// рядок, число, буль, null та undefined. Присвойте їм значення та виведіть кожну змінну на консоль.

const thisIsNumber = 18;
let thisIsString = `This string contains number: ${thisIsNumber}`;
let isAdult = thisIsNumber >= 18 ? 'Yes':'No';
let optionalString = null;
let undefinedString = 'undefinied';

console.log (thisIsNumber);
console.log (thisIsString);
console.log (isAdult);
console.log (optionalString);
console.log (undefinedString);
