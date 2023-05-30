function crypto(str) {
  const splitString = str.split('');
  const center = Math.ceil(splitString.length / 2);
  const left = splitString.splice(0,center).reverse().join('');
  return left + splitString.reverse().join('');
}

function check(password_1, password_2) {
  return crypto(password_1) === password_2;
}


console.log(crypto('hello'))
console.log(crypto('password'))
console.log(check('lehol', 'hello'));
console.log(check('helol', 'hello'));
console.log(check('ssapdrow', 'password'))
console.log(check('ssaprow', 'password'))