const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginChoose = document.querySelector('.authorBtn');
const header = document.querySelector('.header');

// registerLink.addEventListener('click', () => {
//     wrapper.classList.add('active');
// });

// loginLink.addEventListener('click', () => {
//     wrapper.classList.remove('active');
// });

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

loginChoose.addEventListener('click', () => {
    setTimeout(function () {
        header.classList.remove('d-none')
        document.querySelector('.authorityLogin').classList.add('disable');
        document.querySelector('.authorityLogin').style.display = "none";
        wrapper.classList.add('active-popup');
        wrapper.style.display = "flex";
    }, 1000)

});
