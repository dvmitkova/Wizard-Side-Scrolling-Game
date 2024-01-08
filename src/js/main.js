let state = initState();//инициализираме стейта, защото вече глобалният скоуп знае за съществуването
//на state от това, че сме поставили gameScript в index.html преди main скрипта;
let game = initGameObjects();

const availableKeys = [
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyW',
]

document.addEventListener('keydown', (e) => {//при натискане на бутон:
    if (availableKeys.includes(e.code)) {
        state.keys[e.code] = true;
    }
    
});

document.addEventListener('keyup', (e) => {//при пускане на бутон:
    if (availableKeys.includes(e.code)) {
        state.keys[e.code] = false;
    }
    
})

game.startScreen.addEventListener('click', (e) => {
    game.startScreen.classList.add('hidden');//при натискане на бутона Старт, той се скрива;
    game.gameScreen.classList.remove('hidden');//премахваме клас .hidden, за да се покаже екранът;

    //Start game
    start(state, game);
});


