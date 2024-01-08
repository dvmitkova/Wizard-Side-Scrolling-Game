//Създаваме това, което ще се повтаря при стартиране на всяка една игра;

function start(state, game) {
    game.createWizard(state.wizard);//създаваме динамично wizard-a;

    window.requestAnimationFrame((timestamp) => gameLoop(state, game, timestamp))//timestamp - времеви
    //отпечатък от стартирането на animation frame-a;
}

function gameLoop(state, game, timestamp) {
    const { wizard } = state;//състояние;
    const { wizardElement } = game;//ДОМ изглед;

    modifyWizardPosition(state, game);

    //Spawn bugs
    if (timestamp > state.bugStats.nextSpawnTimestamp) {//ако timestamp е по-голям
        //значи е дошло време да пратим нов бъг;
        game.createBug(state.bugStats);
        state.bugStats.nextSpawnTimestamp = timestamp + Math.random() * state.bugStats.maxSpawnInterval;
    }
    
    //RenderMove wizard - render DOM - местене на човечето по екрана;
    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));//правим безкраен цикъл;
}

function modifyWizardPosition(state, game) {
    const { wizard } = state;

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
}