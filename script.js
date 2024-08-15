const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const prev2 = document.getElementById('prev2');
const prev3 = document.getElementById('prev3');
const steps = document.querySelectorAll('.form-step');
const progressBarSteps = document.querySelectorAll('.step');
const twitter = document.querySelector('.twitter')
const facebook = document.querySelector('.facebook')
const google_plus = document.querySelector('.google-plus')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const confirm_pass = document.querySelector('.confirm-password')
const submit = document.querySelector('.submit')
const phone = document.querySelector('.phone')
const first = document.querySelector('.staticContainer')
const first_rails = document.querySelector('#first-rails')
const second_rails = document.querySelector('#second-rails')
const firstLine = document.querySelector('#firstLine')
const secondLine = document.querySelector('#secondLine')
const email_trim = email.value.trim();
const errorMessage = document.getElementById('error-message');
const passwordValue = password.value.trim();
const confirmPassValue = confirm_pass.value.trim();
const nume = document.querySelector('.name')
const surname = document.querySelector('.surname')
const address = document.querySelector('.address')
const nameValue = nume.value.trim();
const surnameValue = surname.value.trim();
const phoneValue = phone.value.trim();
const addressValue = address.value.trim();




next1.addEventListener('click', () => {
    if(email.value.endsWith('@gmail.com') && password.value === confirm_pass.value || email.value.endsWith('@mail.ru') ){ 
        first.classList.add('notNice')
        first_rails.classList.add('nice')
        progressBarSteps[1].classList.add('active')
        firstLine.classList.add('active')
    }
    if(email_trim === ''){
        email.classList.add('shake')
        errorMessage.style.visibility = 'visible'
        email.style.border = '1px solid red'
        setTimeout(()=>{
            email.classList.remove('shake')
            errorMessage.style.visibility = 'hidden'
            email.style.border = '1px solid #ccc'
        }, 200);
    }
    if(passwordValue === ''){
        password.classList.add('shake')
        errorMessage.style.visibility = 'visible'
        password.style.border = '1px solid red'
        setTimeout(()=>{
            password.classList.remove('shake')
            errorMessage.style.visibility = 'hidden'
            password.style.border = '1px solid #ccc'
        }, 200);
    }
    if(confirmPassValue === ''){
        confirm_pass.classList.add('shake')
        errorMessage.style.visibility = 'visible'
        confirm_pass.style.border = '1px solid red'
        setTimeout(()=>{
            confirm_pass.classList.remove('shake')
            errorMessage.style.visibility = 'hidden'
            confirm_pass.style.border = '1px solid #ccc'
        }, 200);
    }
});

next2.addEventListener('click', () => {
    if(twitter.value.startsWith('https://x.com/') && facebook.value.startsWith('https://www.facebook.com/')){
        first_rails.classList.add('notNice')
        second_rails.classList.add('nice')
        progressBarSteps[2].classList.add('active')
        secondLine.classList.add('active')
}
});


submit.addEventListener('click', ()=>{
    if(nameValue === ''){
        nume.classList.add('shake')
        errorMessage.style.visibility = 'visible'
        nume.style.border = '1px solid red'
        setTimeout(()=>{
            nume.classList.remove('shake')
            errorMessage.style.visibility = 'hidden'
            nume.style.border = '1px solid #ccc'
        }, 200);
    }
    if(surnameValue === ''){
        surname.classList.add('shake')
        errorMessage.style.visibility = 'visible'
        surname.style.border = '1px solid red'
        setTimeout(()=>{
            surname.classList.remove('shake')
            errorMessage.style.visibility = 'hidden'
            surname.style.border = '1px solid #ccc'
        }, 200);
    }
    if(phoneValue === ''){
        phone.classList.add('shake')
        errorMessage.style.visibility = 'visible'
        phone.style.border = '1px solid red'
        setTimeout(()=>{
            phone.classList.remove('shake')
            errorMessage.style.visibility = 'hidden'
            phone.style.border = '1px solid #ccc'
        }, 200);
    }
    if(addressValue === ''){
        address.classList.add('shake')
        errorMessage.style.visibility = 'visible'
        address.style.border = '1px solid red'
        setTimeout(()=>{
            address.classList.remove('shake')
            errorMessage.style.visibility = 'hidden'
            address.style.border = '1px solid #ccc'
        }, 200);
    }
    alert('Ce dulceata esti')
      
})


prev2.addEventListener('click', () => {
    first_rails.classList.remove('nice')
    first.classList.remove('notNice')
    progressBarSteps[1].classList.remove('active')
    firstLine.classList.remove('active')
});

prev3.addEventListener('click', () => {
    first_rails.classList.remove('notNice')
    second_rails.classList.remove('nice')
    progressBarSteps[2].classList.remove('active')
    secondLine.classList.remove('active')
});
