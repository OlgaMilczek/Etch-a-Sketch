const conteiner = document.querySelector('#container');
const refButton = document.querySelector('#refButton');

refButton.addEventListener('click', refreshWindow);

createNewBoard(30)

function createNewBoard(size) {
    let cellsNumber = size*size;
    let cellWidth = 961/size-1;
    conteiner.style.gridTemplateColumns = `repeat(${size}, ${cellWidth}px)`;
    for (let i=0; i < cellsNumber; i++) {
        const box = document.createElement('div');
        box.classList.add('sketchBox');
        box.style.height = 540/(size);
        conteiner.appendChild(box);
        box.addEventListener('mouseenter', changeColor);
    }
}

function changeColor(element) {
    this.style.backgroundColor='black';
    let opacity = this.style.opacity;
    if (opacity == '') {
        this.style.opacity = 0.1;
    }
    else if (opacity < 1) {
        this.style.opacity = Number(opacity) + 0.1;
    }
}

function refreshWindow() {
    let newSize = prompt('Please enter table size', '');
    const boxes = document.querySelectorAll('.sketchBox');
    boxes.forEach((box)=> conteiner.removeChild(box));
    createNewBoard(newSize);
}
