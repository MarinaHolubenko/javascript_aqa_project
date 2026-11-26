// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

const PI = Math.PI;
let radius = 25;

let cirscleArea = PI * radius ** 2;
console.log (cirscleArea.toFixed(2));


// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

let rectangularLength = 15.2;
let rectangularWidth = 17.5;

let rectangularArea = rectangularLength * rectangularWidth;

console.log (rectangularArea);

// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
//Округліть кожне отримане значення до 2 значень після крапки

let cylinderRadius = 5;
let cylinderHeight = 3.5;
let cylinderArea = PI * (cylinderRadius ** 2) * cylinderHeight;

console.log (cylinderArea.toFixed(2));
