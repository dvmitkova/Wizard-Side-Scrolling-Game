//При започване на нова игра инициализираме състоянието и;

function initState() {
    const state = {//тук събираме инфо за цялата ни игра;
        player: 'Pesho',
        wizard: {
            width: 82,
            height: 100,
            startX: Math.floor(Math.random() * 1000),//всеки път стартира от различно място;
            startY: Math.floor(Math.random() * 500),
        }
    }

    return state;
};