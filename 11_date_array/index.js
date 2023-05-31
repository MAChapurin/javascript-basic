function isDate(arr) {
  let regexp = /[\-\(\)\.\/,]/g;
  return arr
    .map((el) => {
      const divider = el.match(regexp);
      if (divider) {
        const [day, month, year] = el.split(divider[0]);
        // const checkDay = Number(day) <= 31 && Number(day) >= 1;
        // const checkMonth = Number(month) <= 12 && Number(month) >= 1;
        const checkDayOrMonth =
          (Number(day) <= 31 &&
            Number(day) >= 1 &&
            Number(month) <= 12 &&
            Number(month) >= 1) ||
          (Number(day) <= 12 &&
            Number(day) >= 1 &&
            Number(month) <= 31 &&
            Number(month) >= 1);
        const checkYear =
          year.length === 4 && typeof (Number(year) === 'number');
        //Представим что валидные только четырехзначные числа
        return checkDayOrMonth && checkYear ? el : null;
      }
    })
    .filter((el) => el);
}

const data = [
  '32-01-2022',
  '10-01-2022',
  'random string',
  '10.12.2023',
  '11/13/2024',
  '11/11/2024',
  'lsdkfj',
  '12,12,2024',
  '12,12,24',
];

console.log('Начальный массив:', data);
console.log('\n');
console.log('Отсортированный массив: ', isDate(data));
