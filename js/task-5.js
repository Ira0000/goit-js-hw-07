function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorButton = document.querySelector('.change-color');

function changeBodyColor() {
  const body = document.querySelector('.body');
  const colorName = document.querySelector('.color');
  const color = getRandomHexColor();

  colorName.innerHTML = color;
  body.style.backgroundColor = color;

  console.log(body.style.backgroundColor);
}
changeColorButton.addEventListener('click', changeBodyColor);
