const $body = document.querySelector('body');
const $selector = document.querySelector('#colors');

$selector.addEventListener('change', (e) => {
    if(e.target. value === 'red') {
        $body.className = '';
        $body.classList.add('red');
    }else if (e.target.value === 'blue') {
            $body.className = '';
            $body.classList.add('blue');
    }else if(e.target. value === 'green') {
        $body.className = '';
        $body.classList.add('green');
    }
});