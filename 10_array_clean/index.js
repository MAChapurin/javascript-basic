function arrayOperation(arr, fn) {
  const result = [];
  for (const item of arr) {
    if (fn(item)) {
      continue;
    } else {
      result.push(item);
    }
  }
  return result;
}

function isOdd(num) {
  return num % 2 === 0 ? false : true;
}

function isEven(num) {
  return num % 2 !== 0 ? false : true;
}

function moreThanTen(num) {
  return num > 10;
}

function multiplesOfThree(num) {
  return num % 3 === 0;
}

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

console.log('\n');
console.log('Исходный массив: ' , numbers);
console.log('\n');
console.log('Удаление всех нечетных элементов');
console.log(arrayOperation(numbers, isOdd));
console.log('\n');
console.log('Удаление всех четных элементов');
console.log(arrayOperation(numbers, isEven));
console.log('\n');
console.log('Удаление всех элементов больше 10');
console.log(arrayOperation(numbers, moreThanTen));
console.log('\n');
console.log('Удаление всех элементов кратных трем');
console.log(arrayOperation(numbers, multiplesOfThree));
