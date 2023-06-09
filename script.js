const container = document.querySelector('.container');

let n = 16;

function createSquares() {
    for(i=0;i<(n*n);i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid black'
        div.style.width = `${600/n}px`
        div.style.height = `${600/n}px`
        div.classList.add('box');
        div.setAttribute('onmouseenter', 'color(this)');
        container.appendChild(div);
    }
}

createSquares();

function mathRandom() {
    return Math.ceil(Math.random() * 255)
} 

function color(x) {
    x.style.background = `rgb(${mathRandom()},${mathRandom()},${mathRandom()}`;
}

const btn = document.querySelector('.how');

function button() {
    const box = document.querySelectorAll('.box');
    box.forEach(item => container.removeChild(item));
    n = prompt('How many squares per side do you want?');
    n = Number(n);
    createSquares();
}


btn.addEventListener('click', button);