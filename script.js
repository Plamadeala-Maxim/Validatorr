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




next1.addEventListener('click', () => {
    if(email.value.endsWith('@gmail.com') && password.value === confirm_pass.value || email.value.endsWith('@mail.ru') ){ 
        first.classList.add('notNice')
        first_rails.classList.add('nice')
        progressBarSteps[1].classList.add('active')
        firstLine.classList.add('active')
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
    alert('Account Created')
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
