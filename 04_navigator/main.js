const addressLat = document.getElementById('addressLat');
const addressLong = document.getElementById('addressLong');
const positionLat = document.getElementById('positionLat');
const positionLong = document.getElementById('positionLong');

const form = document.querySelector('.form');

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  console.log(addressLat.value, addressLong.value, positionLat.value, positionLong.value)
  const catetOne = Math.abs(Number(addressLat.value) - Number(positionLat.value));
  const catetTwo = Math.abs(Number(addressLong.value) - Number(positionLong.value));
  const result = Math.sqrt(Math.pow(catetOne, 2) + Math.pow(catetTwo, 2));
  document.getElementById('result').textContent = result.toFixed(2);
})