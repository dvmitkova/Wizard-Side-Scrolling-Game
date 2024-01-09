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

    if (state.keys.Space) {
        game.wizardElement.style.backgroundImage = 'url("/src/images/wizard-fire.png")'
        
        game.createFireball(wizard, state.fireball);
    } else {
        game.wizardElement.style.backgroundImage = 'url("/src/images/wizard.png")'
    }

    //Spawn bugs
    if (timestamp > state.bugStats.nextSpawnTimestamp) {//ако timestamp е по-голям
        //значи е дошло време да пратим нов бъг;
        game.createBug(state.bugStats);
        state.bugStats.nextSpawnTimestamp = timestamp + Math.random() * state.bugStats.maxSpawnInterval;
    }
    
    //Render bugs movement
    let bugElements = document.querySelectorAll('.bug');
    bugElements.forEach(bug => {
        let posX = parseInt(bug.style.left);

        if (posX > 0) {
            bug.style.left = posX - state.bugStats.speed + 'px';
        } else {
            bug.remove();
        } 
    });

    //Render fireballs
    document.querySelectorAll('.fireball').forEach(fireball => {
        let posX = parseInt(fireball.style.left);

        //Detect collision
        bugElements.forEach(bug => {//проверяваме за всеки един бъг дали има колизия с всеки един файърбол
            if (detectCollision(bug, fireball)) {
                bug.remove();
                fireball.remove();
            }
        })

        if (posX > game.gameScreen.offsetWidth) {
            fireball.remove();
        } else {
            fireball.style.left = posX + state.fireball.speed + 'px';
        }
    })

    //Render wizard movement - render DOM - местене на човечето по екрана;
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

function detectCollision(objectA, objectB) {
    let first = objectA.getBoundingClientRect();
    let second = objectB.getBoundingClientRect();

    let hasCollision = !(first.top > second.bottom || first.bottom < second.top || first.right < second.left || first.left > second.right);

    return hasCollision;
}