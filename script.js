window.onload = function(){
    const paletaDeCores = document.getElementById('color-palette');

    let colorBlack = document.querySelectorAll('.color')[0];
    let colorRed = document.querySelectorAll('.color')[1];
    let colorBlue = document.querySelectorAll('.color')[2];
    let colorGreen = document.querySelectorAll('.color')[3];

    let classeSelected = document.createElement('class');
    colorBlack.className += ' selected'
    paletaDeCores.appendChild(classeSelected)

}