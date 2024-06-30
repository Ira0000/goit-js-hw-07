const submitForm = document.querySelector('.login-form');

console.dir(submitForm);

submitForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const info = {
    email: formElements.email.value.trim(),
    password: formElements.password.value.trim(),
  };
  if (info.email === '' || info.password === '') {
    return alert('All form fields must be filled in');
  } else {
    console.log(info);
  }
  event.currentTarget.reset();
}
