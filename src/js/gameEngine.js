//Създаваме това, което ще се повтаря при стартиране на всяка една игра;

function start(state, game) {
    game.createWizard(state.wizard);//създаваме динамично wizard-a;
    
    window.requestAnimationFrame(gameLoop.bind(null, state, game))//bind свързва ф-ята
    //с подадените параметри state и game и винаги, когато я извикаме, се подават по референция.
}

function gameLoop(state, game) {
    const { wizard } = state;//състояние;
    const { wizardElement } = game;//ДОМ изглед;


    //Move wizard - state
    if (state.keys.KeyD) {//Ако е натиснат бутон D:
        wizard.posX = Math.min(wizard.posX + wizard.speed, game.gameScreen.offsetWidth - wizard.width);
    }

    if (state.keys.KeyW) {//Ако е натиснат бутон W:
        wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
        //По-голямата ст-ст от двете - wizard.posY - wizard.speed или 0;
    }

    if (state.keys.KeyA) {//Ако е натиснат бутон D:
        wizard.posX = Math.max(wizard.posX - wizard.speed, 0);
    }

    if (state.keys.KeyS) {//Ако е натиснат бутон W:
        wizard.posY = Math.min(wizard.posY + wizard.speed, game.gameScreen.offsetHeight - wizard.height);
        //по-малката от двете ст-сти - втората е крайната точка на екрана;
    }


    //RenderMove wizard - render DOM - местене на човечето по екрана;
    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));//правим безкраен цикъл;
}