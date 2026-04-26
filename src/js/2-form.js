const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = {
    email: '',
    message: '',
};

const saveData = localStorage.getItem(STORAGE_KEY);

if (saveData) {
    formData = JSON.parse(saveData);

    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
}

form.addEventListener('input', event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value.trim();

    formData[fieldName] = fieldValue;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();

    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields!');
        return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);

    form.reset();

    formData = {
        email: '',
        message: '',
    };
});