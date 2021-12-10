const paletaDeCores = document.getElementById('color-palette');
let classeSelected = document.createElement('class');
let colorBlack = document.querySelectorAll('.color')[0];

window.onload = function(){
    colorBlack.className += ' selected'
    paletaDeCores.appendChild(classeSelected)
}

//Seleciona cor na Paleta
document.getElementsByClassName('color')[0].addEventListener('click',selecionaCor);
document.getElementsByClassName('color')[1].addEventListener('click',selecionaCor);
document.getElementsByClassName('color')[2].addEventListener('click',selecionaCor);
document.getElementsByClassName('color')[3].addEventListener('click',selecionaCor);

function selecionaCor(event){
    const corSelecionada = document.querySelector('.selected');
    corSelecionada.classList.remove('selected');
    event.target.classList.add('selected');
}


//Colore com cor Selecionada
for(let i = 0; i < 25; i+=1){
   document.querySelectorAll('.pixel')[i].addEventListener('click', colorir); 
}

function colorir(event){
    let corSelecionada = document.querySelector('.selected').id;
    event.target.style.backgroundColor = corSelecionada;  
}


//Botão Limpar
let limpar = document.getElementById('clear-board').addEventListener('click', limpaPixels);;

function limpaPixels(event){
    for(let i = 0; i < 25; i+=1){
        document.querySelectorAll('.pixel')[i].style.backgroundColor='white'; 
     }
}

