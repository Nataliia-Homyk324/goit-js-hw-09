const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');


const localStorageKey = 'feedback-form-state';



if (localStorage.getItem(localStorageKey)) {
  // Отримуємо об'єкт зі збереженими даними
  const savedData = JSON.parse(localStorage.getItem(localStorageKey));
  
  // Заповнюємо поля форми зі збереженими даними
  input.value = savedData.email;
  textarea.value = savedData.message;
}



form.addEventListener('input', (event) => {
  // Отримуємо значення поля вводу та текстової області
  const email = input.value.trim();
  const message = textarea.value.trim();
  
  // Створюємо об'єкт feedback
  const feedback = {
    email: email,
    message: message
  };
  //Зберігаємо об'єкт в локальному сховищі
    localStorage.setItem(localStorageKey, JSON.stringify(feedback));
  
});

form.addEventListener('submit', event => {
    event.preventDefault();
    const email = input.value.trim();
    const message = textarea.value.trim()  ;
  
  if (email && message) {
    console.log({email, message});
    input.value = '';
    textarea.value = '';
    localStorage.removeItem(localStorageKey);
  } else {
    alert('Будь ласка, заповніть усі поля');
  }
})
