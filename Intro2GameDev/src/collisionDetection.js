export default function detectCollision(ball, gameObject){

    // if ball hits gameObject
    let topOfBall = ball.position.y;
    let bottomOfBall = ball.position.y + ball.size;

    let topOfgameObject = gameObject.position.y;
    let bottomOfgameObject = gameObject.position.y + gameObject.height;

    let leftOfgameObject = gameObject.position.x;
    let rightOfgameObject = gameObject.position.x + gameObject.width;

    if (bottomOfBall >= topOfgameObject 
        && ball.position.x >= leftOfgameObject
        && ball.position.x + ball.size <= rightOfgameObject
        ){
            return true;
    }else{
        return false;
    }
}