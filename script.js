const paletaDeCores = document.getElementById('color-palette');
let classeSelected = document.createElement('class');
let colorBlack = document.querySelectorAll('.color')[0];
let quadro = document.querySelector('#pixel-board').children; 

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






//Quadro com tamanho definido pelo usuário
let vqv = document.querySelector('#generate-board');
vqv.addEventListener('click', trocaTamanho);
let textBox = document.querySelector('#board-size').value

function trocaTamanho(number){
    let textBox = document.querySelector('#board-size').value
    
    if(textBox == ''){
        alert('"Board inválido!"')
    }else{
        apagaPixels();
        number = textBox;  
        pixelDinamico(number);
        for(let i = 0; i < document.querySelectorAll('.pixel').length; i+=1){  
            let print = document.querySelectorAll('.pixel')
            print[i].addEventListener('click', colorir); 
        }
    }
}

pixelDinamico(5);




//Colore com cor Selecionada
for(let i = 0; i < document.querySelectorAll('.pixel').length; i+=1){  
    let print = document.querySelectorAll('.pixel')
    print[i].addEventListener('click', colorir); 
}

function colorir(event){
    console.log('Me clicou')
    let corSelecionada = document.querySelector('.selected').id;
    event.target.style.backgroundColor = corSelecionada;  
}



//Botão Limpar
let limpar = document.getElementById('clear-board').addEventListener('click', limpaPixels);;

function limpaPixels(event){
    for(let i = 0; i < document.querySelectorAll('.pixel').length; i+=1){
        document.querySelectorAll('.pixel')[i].style.backgroundColor='white'; 
    }
}


//Pixel Dinâmico 

function pixelDinamico(number){ 
    let quadroDesenho = document.querySelector('#pixel-board');  
    for(i = 0; i < number; i+=1){
        let linhaDePixel = document.createElement('section');
        //console.log('primeira parte do for')
            for(j = 0; j < number; j+=1){
                //console.log('Iniciou For de dentro')
                let pixel = document.createElement('div');
                pixel.classList.add('pixel');
                linhaDePixel.appendChild(pixel);
            }
       //console.log('finalizou o 1º for')
        quadroDesenho.appendChild(linhaDePixel);
    }
    return number;
} 



//Apaga Pixels
function apagaPixels(){
    for(let i = quadro.length -1; i >= 0; i-=1){
        quadro[i].remove();
    }
}



