//Дефинираме всички обекти, които визуализираме (ДОМ обекти);

function initGameObjects() {
    const startScreen = document.querySelector('.start-screen');
    const gameScreen = document.querySelector('.game-screen');

    return {
        startScreen,
        gameScreen,
        createWizard(initialState) {
            let wizardElement = document.createElement('div');
            wizardElement.classList.add('wizard');
            //задаваме големината на нашия wizard според initialState, който сме задали предварително;
            wizardElement.style.height = initialState.height + 'px';
            wizardElement.style.width = initialState.width + 'px';

            wizardElement.style.left = initialState.startX + 'px';
            wizardElement.style.top = initialState.startY + 'px';

            this.wizardElement = wizardElement;
            gameScreen.appendChild(wizardElement);

            return wizardElement;
        }
    }
}