//Дефинираме всички обекти, които визуализираме (ДОМ обекти);

function initGameObjects() {
    const startScreen = document.querySelector('.start-screen');
    const gameScreen = document.querySelector('.game-screen');

    return {
        startScreen,
        gameScreen,
    }
}