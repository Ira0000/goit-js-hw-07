function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const number = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', createBoxes);

function createBoxes() {
  let inputValue = number.value;
  if (inputValue < 1 || inputValue > 100) {
    console.log('The number must be between 1 and 100');
  } else {
    const boxesDiv = document.querySelector('.boxes');
    boxesDiv.innerHTML = '';
    let size = 30;
    let newBox = '';
    for (let i = 0; i < inputValue; i += 1) {
      newBox += `<div class="new-box" style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`;
      size += 10;
    }
    boxesDiv.insertAdjacentHTML('beforeend', newBox);
  }
  number.value = '';
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  const boxesDiv = document.querySelector('.boxes');
  boxesDiv.innerHTML = '';
}
