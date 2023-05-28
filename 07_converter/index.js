function converter(sum, startCurrency = 'rub', finishCurrency = 'usd') {
  if (!sum) return null;

  const currencyStore = {
    usd: 70,
    rub: 1,
    eur: 80,
    cny: 11,//юань
    try: 5,//турецкая лира, ключевые слова в обьектах вроде можно
    bin: 30,//беллорусский рубль
    gbp: 102,//английский фунт
    aed: 26, //дирхам ОАЭ
  };

  function convertToRub(sum) {
    return sum * currencyStore[startCurrency]
  }

  if (!currencyStore[finishCurrency]) return null;

  return currencyStore[startCurrency] ? (convertToRub(sum) / currencyStore[finishCurrency]).toFixed(2) : null;
}

console.log(converter(10, 'usd', 'try'))
console.log(converter())
