import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import Brick from './brick.js';
import {buildLevel, level_1 } from './levels.js';

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
}


export default class Game {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

    }
    start() {
        this.gamestate = GAMESTATE.RUNNING;

        // Creating the paddle
        this.paddle = new Paddle(this);
        // Creating the ball
        this.ball = new Ball(this);
        // Creating the bricks
        let bricks = buildLevel(this, level_1);



        this.gameObjects = [
            this.ball,
            this.paddle,
            ...bricks
        ]

        //Initating players controls
        new InputHandler(this.paddle, this);

    }
    togglePause(){
        if(this.gamestate == GAMESTATE.PAUSED){
            this.gamestate = GAMESTATE.RUNNING

        }else{
            this.gamestate = GAMESTATE.PAUSED
        }

    }

    update(deltaTime) {
        if(this.gamestate == GAMESTATE.PAUSED) return;

        if(this.gamestate == GAMESTATE.RUNNING){

            this.gameObjects.forEach( (Object) =>
                Object.update(deltaTime)
            )

            this.gameObjects = this.gameObjects.filter( object => !object.markedForDeletion);
        
        }
    }

    draw(ctx) {
        this.gameObjects.forEach((Object) =>
            Object.draw(ctx)
        )
    }

}