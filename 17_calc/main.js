const container1 = document.createElement('div');
container1.classList.add('container');
const input1 = document.createElement('input');
input1.classList.add('input', 'input1');
input1.setAttribute('type', 'number');
const input2 = document.createElement('input');
input2.classList.add('input', 'input2');
input2.setAttribute('type', 'number');
container1.append(input1, input2);

const container2 = document.createElement('div');
container2.classList.add('container');
const btnAdd = document.createElement('button');
btnAdd.classList.add('btn');
btnAdd.textContent = '+';
btnAdd.addEventListener('click', ()=> {
  answer.textContent = Number(input1.value) + Number(input2.value);
  input1.value = '';
  input2.value = '';
});
const btnMinus = document.createElement('button');
btnMinus.classList.add('btn');
btnMinus.textContent = '-';
btnMinus.addEventListener('click', ()=> {
  answer.textContent = Number(input1.value) - Number(input2.value);
  input1.value = '';
  input2.value = '';
})
const btnMult = document.createElement('button');
btnMult.classList.add('btn');
btnMult.textContent = '*'
btnMult.addEventListener('click', ()=> {
  answer.textContent = Number(input1.value) * Number(input2.value);
  input1.value = '';
  input2.value = '';
});
const btnDiv = document.createElement('button');
btnDiv.classList.add('btn');
btnDiv.textContent = '/';
btnDiv.addEventListener('click', ()=> {
  answer.textContent = Number(input1.value) / Number(input2.value);
  input1.value = '';
  input2.value = '';
});
container2.append(btnAdd,btnMinus,btnMult,btnDiv);

const container3 = document.createElement('div');
container3.classList.add('container');
const answer = document.createElement('span');
answer.classList.add('answer');
container3.append(answer);

const app = document.querySelector('.app');
app.append(container1,container2,container3);










