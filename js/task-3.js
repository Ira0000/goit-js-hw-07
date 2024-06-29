const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
  if (input.value.trim() === '' || input.value.trim() === null) {
    output.textContent = 'Anonymus';
  } else {
    output.textContent = event.currentTarget.value;
  }
});
