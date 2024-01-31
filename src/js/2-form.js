const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

const localStorageKey = "feedback-form-state";
if (localStorage.getItem(localStorageKey)) {
  // Отримуємо об'єкт зі збереженими даними
  const savedData = JSON.parse(localStorage.getItem(localStorageKey));
  
  // Заповнюємо поля форми зі збереженими даними
  input.value = savedData.mail;
  textarea.value = savedData.massage;
}

form.addEventListener('input', (event) => {
  // Отримуємо значення поля вводу та текстової області
  const mail = input.value;
  const massage = textarea.value;
  
  // Створюємо об'єкт feedback
  const feedback = {
    mail: mail,
    massage: massage
  };
  //Зберігаємо об'єкт в локальному сховищі
    localStorage.setItem(localStorageKey, JSON.stringify(feedback));
  
});

form.addEventListener("submit", event => {
    event.preventDefault();
    const email = input.value;
    const message = textarea.value;
    console.log({email, message});
    input.value = '';
    textarea.value = '';
    localStorage.removeItem(localStorageKey);
})
