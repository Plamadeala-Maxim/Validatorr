const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const prev2 = document.getElementById('prev2');
const prev3 = document.getElementById('prev3');
const steps = document.querySelectorAll('.form-step');
const progressBarSteps = document.querySelectorAll('.step');

next1.addEventListener('click', () => {
    steps[0].classList.remove('active');
    steps[1].classList.add('active');
    progressBarSteps[0].classList.remove('active');
    progressBarSteps[1].classList.add('active');
});

next2.addEventListener('click', () => {
    steps[1].classList.remove('active');
    steps[2].classList.add('active');
    progressBarSteps[1].classList.remove('active');
    progressBarSteps[2].classList.add('active');
});

prev2.addEventListener('click', () => {
    steps[1].classList.remove('active');
    steps[0].classList.add('active');
    progressBarSteps[1].classList.remove('active');
    progressBarSteps[0].classList.add('active');
});

prev3.addEventListener('click', () => {
    steps[2].classList.remove('active');
    steps[1].classList.add('active');
    progressBarSteps[2].classList.remove('active');
    progressBarSteps[1].classList.add('active');
});
