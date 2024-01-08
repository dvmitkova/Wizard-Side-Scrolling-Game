//Създаваме това, което ще се повтаря при стартиране на всяка една игра;

function start(state, game) {
    window.requestAnimationFrame(gameLoop.bind(null, state, game))//bind свързва ф-ята
    //с подадените параметри state и game и винаги, когато я извикаме, се подават по референция.
}

function gameLoop(state, game) {
    console.log(state.player);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));//правим безкраен цикъл;
}