const refs = {
  form: document.querySelector('.login-form'),
};

const onFormSubmit = event => {
  event.preventDefault();
  console.log("Form submitted");

  const formData = {
    email: refs.form.elements.email.value.trim(),
    password: refs.form.elements.password.value.trim(),
  };

  if (Object.values(formData).includes('')) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formData);
  
  refs.form.reset();
};

refs.form.addEventListener('submit', onFormSubmit);