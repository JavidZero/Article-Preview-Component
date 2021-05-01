const btn = document.querySelector('.container .text .user .share');
const social = document.querySelector('.container .text .user .social');

btn.addEventListener('click', ()=>{

    btn.classList.toggle('add');
    social.classList.toggle('add');
})