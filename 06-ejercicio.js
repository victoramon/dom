/* const $btn = document.querySelector('#btn');

$btn.addEventListener('click', () => {
    console.log ('Agrego elemento');
});

const $inpText = document.querySelector('#text');

/* $inpText.addEventListener('keydown', (e) => {
    console.log(e.target.value);
}); */

const list = document.querySelector ('#list');
const texto = document.querySelector ('#text');
const boton = document.querySelector ('#btn');

boton.addEventListener('click' , () => {
    let contenido = texto.value;
    let elemento = document.createElement('li');
    elemento.textContent = contenido;
    list.appendChild(elemento);
});