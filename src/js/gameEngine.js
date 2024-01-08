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
        state.wizard.posX += wizard.speed;
    }

    if (state.keys.KeyW) {//Ако е натиснат бутон W:
        state.wizard.posY -= wizard.speed;
    }

    if (state.keys.KeyA) {//Ако е натиснат бутон D:
        state.wizard.posX -= wizard.speed;
    }

    if (state.keys.KeyS) {//Ако е натиснат бутон W:
        state.wizard.posY += wizard.speed;
    }


    //RenderMove wizard - render DOM - местене на човечето по екрана;
    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));//правим безкраен цикъл;
}