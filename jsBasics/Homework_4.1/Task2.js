//Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків, створіть новий рядок, 
// який містить вітання для обох осіб. Виведіть результат в консоль. 
// Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.


let firstName = 'Rachel';
let secondName = 'Monica';

let greeetingString = 'Hello ' + firstName + ' and hello ' + secondName + '!';
console.log (greeetingString);

let secondGreetingString = `Hello ${firstName} and hello ${secondName}!`
console.log (secondGreetingString);
