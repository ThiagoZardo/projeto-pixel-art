const paletaDeCores = document.getElementById('color-palette');
let classeSelected = document.createElement('class');
let colorBlack = document.querySelectorAll('.color')[0];
let colorRed = document.querySelectorAll('.color')[1];
let colorBlue = document.querySelectorAll('.color')[2];
let colorGreen = document.querySelectorAll('.color')[3];

window.onload = function(){
    colorBlack.className += ' selected'
    paletaDeCores.appendChild(classeSelected)
}

document.getElementsByClassName('color')[0].addEventListener('click',selecionaCor);
document.getElementsByClassName('color')[1].addEventListener('click',selecionaCor);
document.getElementsByClassName('color')[2].addEventListener('click',selecionaCor);
document.getElementsByClassName('color')[3].addEventListener('click',selecionaCor);

function selecionaCor(event){
    const corSelecionada = document.querySelector('.selected');
    corSelecionada.classList.remove('selected');
    event.target.classList.add('selected');
}