const header = document.querySelector("header");

window.addEventListener ("scroll" , function() {
    header.classList.toggle ("sticky" , window.scrolly > 0);
});

let menu = document.querySelector('#menu-icon');
let navigation = document.querySelector('.navigation');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navigation.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navigation.classList.remove('active');
};
