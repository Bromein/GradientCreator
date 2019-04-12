var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');


function changeIt() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')'
    css.textContent = 'Copy this code into your CSS: ' + body.style.background + ';';
}

color1.addEventListener('input', changeIt);
color2.addEventListener('input', changeIt);



