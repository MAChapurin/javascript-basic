function isDate(arr) {
  let regexp = /[\-\(\)\.\/,]/g;
  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month, 0);
    return date.getDate();
  }
  return arr
    .map((el) => {
      const divider = el.match(regexp);
      if (divider) {
        const [day, month, year] = el.split(divider[0]);
        const checkDay = Number(day) <= getLastDayOfMonth(year, month) && Number(day) >= 1;
        const checkMonth = Number(month) <= 12 && Number(month) >= 1;
        const checkYear =
          year.length === 4 && typeof (Number(year) === 'number');
        //Представим что валидные только четырехзначные числа
        return checkDay && checkMonth && checkYear ? el : null;
      }
    })
    .filter((el) => el);
}

const data = [
  '28/02/2023',
  '29/02/2023',
  '29/02/2024',//Високосный год
  '29/02/1123',
  '29/02/1124',//Високосный год
  '32-01-2022',
  '30-02-2022',
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

// const d = "01/30/2024";
// const [dd,mm,yy] = d.split('/')
// console.log(new Date(yy, mm, dd))

