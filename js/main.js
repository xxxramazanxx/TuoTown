const burgerBtn   = document.querySelector('#burger-btn');
const popup       = document.querySelector('#popup');
const burgerClose = document.querySelector('#burg-arrow');


burgerBtn.addEventListener('click', hambHandler);

function hambHandler (e) {
    popup.classList.toggle('popup-open'); 
}

burgerClose.addEventListener('click', hambHandler);

function hambHandler (e) {
    popup.classList.toggle('popup-open'); 
}