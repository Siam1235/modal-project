'use strict';

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const modalOverly = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');


const openModal = function(){
    modal.classList.remove('hidden');
    modalOverly.classList.remove('hidden');
}

const againCloseModal = function(){
    modal.classList.add('hidden');
    modalOverly.classList.add('hidden');
}



for(let i = 0; i < showModal.length; i++){
    showModal[i].addEventListener('click',  openModal);
}

closeModal.addEventListener('click', againCloseModal);
modalOverly.addEventListener('click', againCloseModal); 


window.addEventListener('keypress', function(e){
    console.log(e);
    if(e.key === 'c'){
        if(!modal.classList.contains('hidden')){
            againCloseModal();
        }
    }
});