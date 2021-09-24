const $btn = document.querySelector('#btn');

/* mouseover para que lo lanze con tan solo pasar el mouse por encima */
$btn.addEventListener('click', () => {
    console.log('Me presionaste');
});

const $inpText = document.querySelector('#text');

$inpText.addEventListener('keydown', (e) => {
    console.log(e.target.value);
});