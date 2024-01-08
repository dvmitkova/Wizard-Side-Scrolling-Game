const startScreen = document.querySelector('.start-screen');
const gameScreen = document.querySelector('.game-screen');

startScreen.addEventListener('click', (e) => {
    //първо скриваме текущия екран;
    e.currentTarget.classList.add('hidden');//при натискане на бутона Старт, той се скрива;
    gameScreen.classList.remove('hidden');//премахваме клас .hidden, за да се покаже екранът;
});