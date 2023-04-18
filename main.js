let player = document.querySelector('.player');

let mgLeft = 0;
let mgTop = 0;
let step = 20;

function moveTop(){
    mgTop -= step;
}

function moveBottom() {
    mgTop += step;
}

function moveLeft(){
    mgLeft -= step;
} 

function moveRight() {
    mgLeft += step;
}

function renderLocation(){
    player.style.marginTop = mgTop + 'px'
    player.style.marginLeft = mgLeft + 'px'
}

function resetPosition(){
    mgTop = 0;
    mgLeft = 0;
    renderLocation();
}

function handleKeyDown(event) {
    switch(event.key) {
        case 'w':
            moveTop();
            break;
        case 's':
            moveBottom();
            break;
        case 'a':
            moveLeft();
            break;
        case 'd':
            moveRight();
            break;
        case ' ':
            resetPosition();
            break;
    }
    renderLocation()
}

document.addEventListener('keydown', handleKeyDown);