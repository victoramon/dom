const edad = document.querySelector('#edad');
const input = document.querySelector('#input');

const writeAge = () => {
    const imputValue = input.value;
    const mensaje = imputValue >=18 ? 'Eres mayor de edad' : 'Eres menor de edad';
    edad.textContent = mensaje;
}