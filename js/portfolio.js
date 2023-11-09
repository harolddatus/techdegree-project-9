//Get modal element
const modal = document.querySelector('.modal');
//Get Modal element
const btn = document.querySelector('.btn-contact-info');
//Get close button
const modalClose = document.querySelector('.modal-close');

//listen for click
btn.addEventListener('click', openModal);

//listen for close click
modalClose.addEventListener('click', closeModal);

function openModal(){
modal.style.display ='block';
}

function closeModal(){
  modal.style.display ='none';
}

