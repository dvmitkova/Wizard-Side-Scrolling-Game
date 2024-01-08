//При започване на нова игра инициализираме състоянието на играча;

let startX = Math.floor(Math.random() * 1000);//всеки път стартира от различно място;
let startY = Math.floor(Math.random() * 500)

function initState() {
    const state = {//тук събираме инфо за цялата ни игра;
        player: 'Pesho',
        wizard: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 10,
        },
        bugStats: {
            width: 50,
            height: 50,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
        },
        keys: {
            KeyA: false,
            KeyS: false,
            KeyD: false,
            KeyW: false,
        }
    }

    return state;
};