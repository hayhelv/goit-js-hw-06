const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validation);

function validation(event) {
    const valueLength = event.currentTarget.value.length;
    const requiredLength = event.currentTarget.dataset.length;

    this.classList.add('invalid');
    this.classList.remove('valid');

    if (valueLength >= requiredLength) {
        this.classList.add('valid');
        this.classList.remove('invalid');
    } 
}
