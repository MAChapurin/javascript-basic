function moonAlgoritm(str) {
  return str
    .match(/\d/g)
    .map((el) => Number(el))
    .reduce((acc, el, index) => {
      if (index % 2 !== 0) return (acc += el);
      const res = el * 2;
      if (res > 9) {
        return (acc += res - 9);
      } else {
        return (acc += res);
      }
    }, 0) % 10 === 0
}

const card1 = '1234-3456-6738-7403';
const card2 = '4561 2612 1234 5464';
const card3 = '4  5  6  1     2  6  1  2     1  2  3  4     5  4  6  7';
//Номера последних двух карт взяты с википедии, результат сходиться

console.log(moonAlgoritm(card1));
console.log(moonAlgoritm(card2));
console.log(moonAlgoritm(card3));
