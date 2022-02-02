const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget);     
    // console.log(formData);

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert('Bсе поля должны быть заполнены');
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}
