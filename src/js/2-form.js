const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const emailField = form.elements.email;
const messageField = form.elements.message;

const localStorageKey = 'feedback-form-state';
const localStorageData = JSON.parse(localStorage.getItem(localStorageKey));

if (localStorageData) {
  emailField.value = localStorageData.email;
  messageField.value = localStorageData.message;

  formData.email = localStorageData.email;
  formData.message = localStorageData.message;
}

form.addEventListener('input', () => {
  formData.email = emailField.value.trim();
  formData.message = messageField.value.trim();

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
  return;
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(`formData`, formData);

  localStorage.removeItem(localStorageKey);

  formData.email = '';
  formData.message = '';

  form.reset();
});
