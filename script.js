document.addEventListener('DOMContentLoaded', function () {
    const next1 = document.getElementById('next1');
    const next2 = document.getElementById('next2');
    const prev2 = document.getElementById('prev2');
    const prev3 = document.getElementById('prev3');
    const progressBarSteps = document.querySelectorAll('.step');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const confirm_pass = document.querySelector('.confirm-password');
    const first = document.querySelector('.staticContainer');
    const first_rails = document.querySelector('#first-rails');
    const second_rails = document.querySelector('#second-rails');
    const firstLine = document.querySelector('#firstLine');
    const secondLine = document.querySelector('#secondLine');
    const errorMessage = document.getElementById('error-message');
    const nume = document.querySelector('.name');
    const surname = document.querySelector('.surname');
    const phone = document.querySelector('.phone');
    const address = document.querySelector('.address');
    const submit = document.querySelector('.submit')

    next1.addEventListener('click', () => {
        let valid = true;
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const confirmPassValue = confirm_pass.value.trim();

        if (emailValue === '' || !emailValue.includes('@')) {
            email.classList.add('shake');
            email.style.border = '1px solid red';
            errorMessage.style.visibility = 'visible';
            valid = false;
        }

        if (passwordValue === '' || passwordValue !== confirmPassValue) {
            password.classList.add('shake');
            confirm_pass.classList.add('shake');
            password.style.border = '1px solid red';
            confirm_pass.style.border = '1px solid red';
            errorMessage.style.visibility = 'visible';
            valid = false;
        }

        if (valid) {
            first.classList.add('notNice');
            first_rails.classList.add('nice');
            progressBarSteps[1].classList.add('active');
            firstLine.classList.add('active');
        }

        setTimeout(() => {
            email.classList.remove('shake');
            password.classList.remove('shake');
            confirm_pass.classList.remove('shake');
            email.style.border = '1px solid #ccc';
            password.style.border = '1px solid #ccc';
            confirm_pass.style.border = '1px solid #ccc';
            errorMessage.style.visibility = 'hidden';
        }, 500);
    });


    next2.addEventListener('click', () => {
        first_rails.classList.add('notNice');
        second_rails.classList.add('nice');
        progressBarSteps[2].classList.add('active');
        secondLine.classList.add('active');
    });


    submit.addEventListener('click', () => {
        let valid = true;
        const nameValue = nume.value.trim();
        const surnameValue = surname.value.trim();
        const phoneValue = phone.value.trim();
        const addressValue = address.value.trim();

        if (nameValue === '') {
            nume.classList.add('shake');
            nume.style.border = '1px solid red';
            errorMessage.style.visibility = 'visible';
            valid = false;
        }

        if (surnameValue === '') {
            surname.classList.add('shake');
            surname.style.border = '1px solid red';
            errorMessage.style.visibility = 'visible';
            valid = false;
        }

        if (phoneValue === '') {
            phone.classList.add('shake');
            phone.style.border = '1px solid red';
            errorMessage.style.visibility = 'visible';
            valid = false;
        }

        if (addressValue === '') {
            address.classList.add('shake');
            address.style.border = '1px solid red';
            errorMessage.style.visibility = 'visible';
            valid = false;
        }

        if (valid) {
            alert('Form Submitted Successfully!');
        }

        setTimeout(() => {
            nume.classList.remove('shake');
            surname.classList.remove('shake');
            phone.classList.remove('shake');
            address.classList.remove('shake');
            nume.style.border = '1px solid #ccc';
            surname.style.border = '1px solid #ccc';
            phone.style.border = '1px solid #ccc';
            address.style.border = '1px solid #ccc';
            errorMessage.style.visibility = 'hidden';
        }, 500);
    });

    prev2.addEventListener('click', () => {
        first_rails.classList.remove('nice');
        first.classList.remove('notNice');
        progressBarSteps[1].classList.remove('active');
        firstLine.classList.remove('active');
    });

    prev3.addEventListener('click', () => {
        first_rails.classList.remove('notNice');
        second_rails.classList.remove('nice');
        progressBarSteps[2].classList.remove('active');
        secondLine.classList.remove('active');
    });
});
