// Створіть програму, яка генерує таблицю множення для обраного числа за допомогою 
// кожного з циклів for, while .

// Виберіть число для якого потрібно згенерувати таблицю множення.
// Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
// Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.

console.log ("Таблиця множення - цикл for")
const number = 5;

for (let i = 1; i <= 10; i++){
    let multiplyResult = number * i;
    console.log (`${number} x ${i} = ${multiplyResult}`)
}
console.log ("\nТаблиця множення - цикл while")
let i = 1;
while (i<=10){
    let multiplyResult = number * i;
    console.log (`${number} x ${i} = ${multiplyResult}`);
    i++;
}