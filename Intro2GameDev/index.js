import Game from './src/game.js';
// GAME LOGIC
const Game_Width = 800;
const Game_Height = 600;
// canvas
let canvas = document.getElementById("gameScreen");
// contex
let ctx = canvas.getContext('2d');
//Clearing the screen - because when something drawn it will stay
ctx.clearRect(0, 0, Game_Width, Game_Height);


let game = new Game(Game_Width, Game_Height);

game.start()

let lastTime = 0
function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, Game_Width, Game_Height);

    game.update(deltaTime)
    game.draw(ctx)



    requestAnimationFrame(gameLoop);

}


requestAnimationFrame(gameLoop);
