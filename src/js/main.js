let state = initState();//инициализираме стейта, защото вече глобалният скоуп знае за съществуването
//на state от това, че сме поставили gameScript в index.html преди main скрипта;
let game = initGameObjects();


game.startScreen.addEventListener('click', (e) => {
    //първо скриваме текущия екран;
    game.startScreen.classList.add('hidden');//при натискане на бутона Старт, той се скрива;
    game.gameScreen.classList.remove('hidden');//премахваме клас .hidden, за да се покаже екранът;
});


