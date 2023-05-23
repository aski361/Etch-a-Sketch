const container = document.querySelector('.container');

const n = 16;

for(i=0;i<(n*n);i++) {
    const div = document.createElement('div');
    div.style.border = '1px solid black'
    div.style.width = `${600/n}px`
    div.style.height = `${600/n}px`
    div.classList.add('box');
    div.setAttribute('onmouseenter', 'color(this)');
    container.appendChild(div);
}

function mathRandom() {
    return Math.ceil(Math.random() * 255)
} 



function color(x) {
    x.style.background = `rgb(${mathRandom()},${mathRandom()},${mathRandom()}`;
  }