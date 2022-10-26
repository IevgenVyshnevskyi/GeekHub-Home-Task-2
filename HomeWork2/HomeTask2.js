
/* 1. Створити функцію multiple() яка може приймати не обмежену кількість аргументів, та перемножує їх */

function multiple() {
  var result = 1;

  for (i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}



/*2. Створити фунцію reverseString яка приймає 1 аргумент будь-якого типу, і розвертає його. Наприклад: ‘test’ -> `tset`, undefined -> ‘denifednu’ */

function reverseString(arg) {

  if (typeof arg === 'string') {
    return (arg).split('').reverse().join('');
  } else if (arg === null) {
    return String(arg).split('').reverse().join('');
  } else if (typeof arg === 'number') {
    return String(arg).split('').reverse().join('');
  } else if (typeof arg === "object") {
    return Object.values(arg).toString().split(',').reverse().join('');
  } else if (typeof arg === 'boolean') {
    return String(arg).split('').reverse().join('');
  } else if (typeof arg === 'undefined') {
    return String(arg).split('').reverse().join('');
  } else if (typeof arg === 'symbol') {
    return String(arg.description).split('').reverse().join('');
  } else if (typeof arg === 'bigint') {
    return `${arg}n`.split('').reverse().join('');
  }
}



/* 3. Створити фунцію вгадати число. Умови:
	a. Приймає число від 1-10. Перевірити що число не більше 10 і не менше 1, якщо не відповідає повернути помилку new Error(‘Please provide number in range 1 - 10’)
	b. Якщо передали не число. Помилка return new Error(“Please provide a valid number”);
	c. Далі функція генерує рандомне число від 1 до 10 і якщо задане число правильне повертає стрінгу ‘You Win!’, якщо не правильно ‘You are lose, your number is 8, the random number is 5’ */

function guessNumber(num) {
  if (typeof num !== 'number') {
    return new Error('Please provide a valid number');
  } else if (!(num >= 1 && num <= 10)) {
    return new Error('Please provide number in range 1 - 10');
  }

  let generatRandomNumber = Math.ceil(Math.random() * 10);
  if (generatRandomNumber == num) {
    return "You Win!";
  } else {
    return `You are lose, your number is ${num}, the random number is ${generatRandomNumber}`;
  }
}



/* 4. Є масив чисел (додатних, відʼємних, і впереміш). Потрібно знайти min, max, sum. Не можна використовувати методи масивів або обʼєкту Math, а тільки цикли for і while. Приклади масивів:
[3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]
[-1,-8,-2]
[1,7,3]
[1,undefined,3,5,-3]
[1,NaN,3,5,-3] */

/* a) Знаходження max */
let arr1 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[0] < arr1[i]) {
    arr1[0] = arr1[i]
  }
}
console.log(arr1[0]); // 44

let arr2 = [-1,-8,-2];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[0] < arr2[i]) {
    arr2[0] = arr2[i]
  }
}
console.log(arr2[0]); // -1

let arr3 = [1,7,3];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[0] < arr3[i]) {
    arr3[0] = arr3[i]
  }
}
console.log(arr3[0]); // 7

let arr4 = [1,undefined,3,5,-3];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[0] < arr4[i]) {
    arr4[0] = arr4[i]
  }
}
console.log(arr4[0]);  // 5

let arr5 = [1,NaN,3,5,-3];
for (let i = 0; i < arr5.length; i++) {
  if (arr5[0] < arr5[i]) {
    arr5[0] = arr5[i]
  }
}
console.log(arr5[0]);  // 5

/* b) Знаходження min */

let arr6 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1];
for (let i = 0; i < arr6.length; i++) {
  if (arr6[0] > arr6[i]) {
    arr6[0] = arr6[i]
  }
}
console.log(arr6[0]); // -12


let arr7 = [-1,-8,-2];
for (let i = 0; i < arr7.length; i++) {
  if (arr7[0] > arr7[i]) {
    arr7[0] = arr7[i]
  }
}
console.log(arr7[0]); // -8

let arr8 = [1,7,3];
for (let i = 0; i < arr8.length; i++) {
  if (arr8[0] > arr8[i]) {
    arr8[0] = arr8[i]
  }
}
console.log(arr8[0]); // 1

let arr9 = [1,undefined,3,5,-3];
for (let i = 0; i < arr9.length; i++) {
  if (arr9[0] > arr9[i]) {
    arr9[0] = arr9[i]
  }
}
console.log(arr9[0]); // -3

let arr10 = [1,NaN,3,5,-3];
for (let i = 0; i < arr10.length; i++) {
  if (arr10[0] > arr10[i]) {
    arr10[0] = arr10[i]
  }
}
console.log(arr10[0]); // -3



/* c) Знаходження sum: */

var array1 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
var sum = 0;
for (var i = 0; i < array1.length; i++) {
  if ((typeof array1[i] !== 'number') || (isNaN(array1[i]))) {
    continue;
  }
  sum += array1[i];
}
console.log(sum); // 32


var array2 = [-1,-8,-2];
var sum = 0;
for (var i = 0; i < array2.length; i++) {
  if ((typeof array2[i] !== 'number') || (isNaN(array2[i]))) {
    continue;
  }
  sum += array2[i];
}
console.log(sum); // -11


var array3 = [1,7,3];
var sum = 0;
for (var i = 0; i < array3.length; i++) {
  if ((typeof array3[i] !== 'number') || (isNaN(array3[i]))) {
    continue;
  }
  sum += array3[i];
}
console.log(sum); //11

var array4 = [1,undefined,3,5,-3];
var sum = 0;
for (var i = 0; i < array4.length; i++) {
  if ((typeof array4[i] !== 'number') || (isNaN(array4[i]))) {
    continue;
  }
  sum += array4[i];
}
console.log(sum);  // 6


var array5 = [1,NaN,3,5,-3];
var sum = 0;
for (var i = 0; i < array5.length; i++) {
  if ((typeof array5[i] !== 'number') || (isNaN(array5[i]))) {
    continue;
  }
  sum += array5[i];
}
console.log(sum); // 6


/* 5. Задачка. Приклади:
// [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
// [7, 0, 1, 3, 4, 1, 2, 1] // 9
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
// [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
// [2, 2, 2, 2, 2] // 0 */


function getResult(arg) {

   let array = `${arg}`.split(',').map(function(e) {
      return (+e)
   });

   let result = 0;

   /* 1. Опрацювання 1-го нижнього рядка*/

   while (((array[0] <= 0) || (array[array.length - 1] <= 0)) || ((array[0] <= 0) && (array[array.length - 1] <= 0))) {
      if (array[0] <= 0) {
         array.shift();
      }
      if (array[array.length - 1] <= 0) {
         array.pop();
      }
      if ((array[0] <= 0) && (array[array.length - 1] <= 0)) {
         array.shift();
         array.pop();
      }
   }
   let arrayWithZero1 = array.filter(function(e) { //  новий масив з усіма значеннями менше/рівно 0, що у свою чергу є коміркою де є вода
      return e <= 0
   });
   let arrayWithZero1Lenght = arrayWithZero1.length; //  довжина масиву є к-стю комірок з водою
   result += arrayWithZero1Lenght; //  загальна к-сть усіх комірок з водою


   /* 2. Опрацювання 2-го нижнього рядка*/
   let array2 = array.map(function(e) {
      return e - 1
   });
   while (((array2[0] <= 0) || (array2[array2.length - 1] <= 0)) || ((array2[0] <= 0) && (array2[array2.length - 1] <= 0))) {
      if (array2[0] <= 0) {
         array2.shift();
      }
      if (array2[array2.length - 1] <= 0) {
         array2.pop();
      }
      if ((array2[0] <= 0) && (array2[array2.length - 1] <= 0)) {
         array2.shift();
         array2.pop();
      }
   }
   let arrayWithZero2 = array2.filter(function(e) { //  новий масив з усіма значеннями менше/рівно 0, що у свою чергу є коміркою де є вода
      return e <= 0
   });
   let arrayWithZero2Lenght = arrayWithZero2.length; //  довжина масиву є к-стю комірок з водою
   result += arrayWithZero2Lenght; // 3 - загальна к-сть усіх комірок з водою


   /* 3. Опрацювання 3-го нижнього рядка*/
   let array3 = array2.map(function(e) {
      return e - 1
   });
   while (((array3[0] <= 0) || (array3[array3.length - 1] <= 0)) || ((array3[0] <= 0) && (array3[array3.length - 1] <= 0))) {
      if (array3[0] <= 0) {
         array3.shift();
      }
      if (array3[array3.length - 1] <= 0) {
         array3.pop();
      }
      if ((array3[0] <= 0) && (array3[array3.length - 1] <= 0)) {
         array3.shift();
         array3.pop();
      }
   }
   let arrayWithZero3 = array3.filter(function(e) { //  новий масив з усіма значеннями менше/рівно 0, що у свою чергу є коміркою де є вода
      return e <= 0
   });
   let arrayWithZero3Lenght = arrayWithZero3.length; //  довжина масиву є к-стю комірок з водою
   result += arrayWithZero3Lenght; //  загальна к-сть усіх комірок з водою


   /* 4. Опрацювання 4-го нижнього рядка*/
   let array4 = array3.map(function(e) {
      return e - 1
   });
   while (((array4[0] <= 0) || (array4[array4.length - 1] <= 0)) || ((array4[0] <= 0) && (array4[array4.length - 1] <= 0))) {
      if (array4[0] <= 0) {
         array4.shift();
      }
      if (array4[array4.length - 1] <= 0) {
         array4.pop();
      }
      if ((array4[0] <= 0) && (array4[array4.length - 1] <= 0)) {
         array4.shift();
         array4.pop();
      }
   }
   let arrayWithZero4 = array4.filter(function(e) { //  новий масив з усіма значеннями менше/рівно 0, що у свою чергу є коміркою де є вода
      return e <= 0
   });
   let arrayWithZero4Lenght = arrayWithZero4.length; //  - довжина масиву є к-стю комірок з водою
   result += arrayWithZero4Lenght; //  загальна к-сть усіх комірок з водою


   /* 5. Опрацювання 5-го нижнього рядка*/
   let array5 = array4.map(function(e) {
      return e - 1
   });
   while (((array5[0] <= 0) || (array5[array5.length - 1] <= 0)) || ((array5[0] <= 0) && (array5[array5.length - 1] <= 0))) {
      if (array5[0] <= 0) {
         array5.shift();
      }
      if (array5[array5.length - 1] <= 0) {
         array5.pop();
      }
      if ((array5[0] <= 0) && (array5[array5.length - 1] <= 0)) {
         array5.shift();
         array5.pop();
      }
   }
   let arrayWithZero5 = array5.filter(function(e) { // - новий масив з усіма значеннями менше/рівно 0, що у свою чергу є коміркою де є вода
      return e <= 0
   });
   let arrayWithZero5Lenght = arrayWithZero5.length; // - довжина масиву є к-стю комірок з водою
   result += arrayWithZero5Lenght; //  - загальна к-сть усіх комірок з водою


   /* 6. Опрацювання 6-го нижнього рядка*/

   let array6 = array5.map(function(e) {
      return e - 1
   });
   while (((array6[0] <= 0) || (array6[array6.length - 1] <= 0)) || ((array6[0] <= 0) && (array6[array6.length - 1] <= 0))) {
      if (array6[0] <= 0) {
         array6.shift();
      }
      if (array6[array6.length - 1] <= 0) {
         array6.pop();
      }
      if ((array6[0] <= 0) && (array6[array6.length - 1] <= 0)) {
         array6.shift();
         array6.pop();
      }
   }
   let arrayWithZero6 = array6.filter(function(e) { // - новий масив з усіма значеннями менше/рівно 0, що у свою чергу є коміркою де є вода
      return e <= 0
   });
   let arrayWithZero6Lenght = arrayWithZero6.length; // - довжина масиву є к-стю комірок з водою
   result += arrayWithZero6Lenght; //  - загальна к-сть усіх комірок з водою


   /* 7. Опрацювання 7-го нижнього рядка*/

   let array7 = array6.map(function(e) {
      return e - 1
   });
   while (((array7[0] <= 0) || (array7[array7.length - 1] <= 0)) || ((array7[0] <= 0) && (array7[array7.length - 1] <= 0))) {
      if (array7[0] <= 0) {
         array7.shift();
      }
      if (array7[array7.length - 1] <= 0) {
         array7.pop();
      }
      if ((array7[0] <= 0) && (array7[array7.length - 1] <= 0)) {
         array7.shift();
         array7.pop();
      }
   }
   let arrayWithZero7 = array7.filter(function(e) { // - новий масив з усіма значеннями менше/рівно 0, що у свою чергу є коміркою де є вода
      return e <= 0
   });
   let arrayWithZero7Lenght = arrayWithZero7.length; // - довжина масиву є к-стю комірок з водою
   result += arrayWithZero7Lenght; //  - загальна к-сть усіх комірок з водою


   /* 8. Опрацювання 8-го нижнього рядка*/

   let array8 = array7.map(function(e) {
      return e - 1
   });
   while (((array8[0] <= 0) || (array8[array8.length - 1] <= 0)) || ((array8[0] <= 0) && (array8[array8.length - 1] <= 0))) {
      if (array8[0] <= 0) {
         array8.shift();
      }
      if (array8[array8.length - 1] <= 0) {
         array8.pop();
      }
      if ((array8[0] <= 0) && (array8[array8.length - 1] <= 0)) {
         array8.shift();
         array8.pop();
      }
   }
   let arrayWithZero8 = array8.filter(function(e) { // - новий масив з усіма значеннями менше/рівно 0, що у свою чергу є коміркою де є вода
      return e <= 0
   });
   let arrayWithZero8Lenght = arrayWithZero8.length; // - довжина масиву є к-стю комірок з водою
   result += arrayWithZero8Lenght; //  - загальна к-сть усіх комірок з водою


   /* 9. Опрацювання 9-го нижнього рядка*/

   let array9 = array8.map(function(e) {
      return e - 1
   });
   while (((array9[0] <= 0) || (array9[array9.length - 1] <= 0)) || ((array9[0] <= 0) && (array9[array9.length - 1] <= 0))) {
      if (array9[0] <= 0) {
         array9.shift();
      }
      if (array9[array9.length - 1] <= 0) {
         array8.pop();
      }
      if ((array9[0] <= 0) && (array9[array9.length - 1] <= 0)) {
         array9.shift();
         array9.pop();
      }
   }
   let arrayWithZero9 = array9.filter(function(e) { // - новий масив з усіма значеннями менше/рівно 0, що у свою чергу є коміркою де є вода
      return e <= 0
   });
   let arrayWithZero9Lenght = arrayWithZero9.length; // - довжина масиву є к-стю комірок з водою
   result += arrayWithZero9Lenght; //  - загальна к-сть усіх комірок з водою
   console.log(result);
}

   getResult([ ]);