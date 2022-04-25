import detectCollision from "./collisionDetection.js";

export default class Ball {
    constructor(game){
        this.img = document.getElementById('img_ball')
        this.game = game;


        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.position= { x: 10, y: 400};
        this.speed = {x: 2, y: -2};
        this.size = 12;
    }

    draw(ctx) {
        ctx.drawImage(this.img, 
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size);

    }

    update(deltaTime){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        // if ball hits wall
        if (this.position.x < 0 || (this.position.x + this.size) > this.gameWidth) this.speed.x = -this.speed.x;
        if (this.position.y < 0 || (this.position.y + this.size) > this.gameHeight) this.speed.y = -this.speed.y;

        if(detectCollision(this, this.game.paddle)){
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }

    }

}