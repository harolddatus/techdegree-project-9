//Get modal element
const modal = document.querySelector('modal');
//Get Modal element
const btn = document.getElementsByClassName('contact-btn-modal');
//Get close button
const close = document.getElementsByClassName('modal-close');

//listen for click
btn.addEventListener('click', openModal);

//listen for close click
close.addEventListener('click', closeModal);

function openModal(){
modal.style.display ='block';
}

function closeModal(){
  modal.style.display ='none';
}

