const displayContainer = document.querySelector(".container");
const modalContainer = document.querySelector('.modal-container');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    displayContainer.classList.remove('hide');
})

modalContainer.addEventListener( 'click', (event) => {
    const btn = event.target.name;
    if( btn === "close"){
        displayContainer.classList.add('hide');
    }
})