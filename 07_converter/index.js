function converter(sum, startCurrency = 'rub', finishCurrency = 'usd') {

  const currencyStore = {
    USD: 70,
    RUB: 1,
    EUR: 80,
    CNY: 11,//юань
    TRY: 5,//турецкая лира, ключевые слова в обьектах вроде можно
    BIN: 30,//беллорусский рубль
    GBP: 102,//английский фунт
    AED: 26, //дирхам ОАЭ
  };

  if (!sum || !currencyStore[finishCurrency.toUpperCase()] || !currencyStore[startCurrency.toUpperCase()] ) return null;

  function convertToRub(sum) {
    return sum * currencyStore[startCurrency.toUpperCase()]
  }

  return (convertToRub(sum) / currencyStore[finishCurrency.toUpperCase()]).toFixed(2);
}

console.log(converter(10, 'usd', 'try'))
console.log(converter(10 , 'usd', 'eur'))
console.log(converter(10 , 'AED', 'GBP'))
console.log()
