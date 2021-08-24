const menuBtn = document.querySelector('.menu');
const navPage = document.querySelector('.nav-page');

let isOpen = false

function openToggle(){
    if(isOpen){
        navPage.classList.remove('open');
        menuBtn.classList.remove('open');

        isOpen = false;
    }
    else{
        navPage.classList.add('open');
        menuBtn.classList.add('open');

        isOpen = true
    }
}

menuBtn.addEventListener('click' , openToggle);