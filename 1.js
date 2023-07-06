// Необходимо пользователя попросить ввести температуру в градусах Цельсия, 
// преобразовать введенное пользователем значение в соответствующую температуру 
// в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): 
// Цельсий: 21, Фаренгейт: 69.8
// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
// были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Примечания: Пользователь всегда вводит корректное число.
// Советую округлить значение после расчетов, так как в некоторых случаях 
// может получиться "длинная дробь".



// Примеры: const pi= 3.14159265359; console. log (pi. toFixed (2)); //=> 3.14 
// const num= 4; console. log (num. toFixed (2)); //=> 4.00.

let temp1 = +prompt("Введите температуру в градусах Цельсия: ");
let temp2 = 9 / 5 * temp1 + 32;
temp2 = temp2.toFixed(2);

alert(`Цельсий: ${temp1}, Фаренгейт: ${temp2}`);
