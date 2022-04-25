

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const actionMessege_p = document.getElementById("action-messege");

function getComputerChoise(){
    const choices =['r', 'p', 's']
    return choices[Math.floor( Math.random()*3) ]
}
function win(userChoice, computerChoice){
    if (userChoice ==='p'){
        result_div.innerHTML = "🖐️ Covers 👊";
    }else if (userChoice ==='s'){
        result_div.innerHTML = "✌️ Cuts 🖐️";
    }else if (userChoice ==='r'){
        result_div.innerHTML = "👊 Breaks ✌️";
    }
    document.querySelector(`.${userChoice}`).style.border = " 6px solid skyblue";
    document.querySelector(`.${userChoice}`).style.backgroundColor  = " green";
    document.querySelector(`.${computerChoice}`).style.border = " 6px solid salmon";
    document.querySelector(`.${computerChoice}`).style.backgroundColor  = " red";
    userScore++;
    userScore_span.innerHTML = userScore;;
    actionMessege_p.innerHTML = "YOU WIN! 👏";
    setTimeout(function() {
        document.querySelector(`.${userChoice}`).style.border = "6px solid white";
        document.querySelector(`.${userChoice}`).style.backgroundColor  = " #24272E";
        document.querySelector(`.${computerChoice}`).style.border = "6px solid white";
        document.querySelector(`.${computerChoice}`).style.backgroundColor  = " #24272E";
    }, 600)
}
function lose(userChoice, computerChoice){
    if (computerChoice ==='p'){
        result_div.innerHTML = "👊 Covered by 🖐️";
    }else if (computerChoice ==='s'){
        result_div.innerHTML = "🖐️ was Cut by ✌️";
    }else if (computerChoice ==='r'){
        result_div.innerHTML = "✌️ Destoryed by 👊";
    }
    document.querySelector(`.${userChoice}`).style.border = " 6px solid skyblue";
    document.querySelector(`.${userChoice}`).style.backgroundColor  = " red";
    document.querySelector(`.${computerChoice}`).style.border = "6px solid salmon";
    document.querySelector(`.${computerChoice}`).style.backgroundColor  = " green";
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    actionMessege_p.innerHTML = "YOU LOSE! 😝";
    setTimeout(function() {
        document.querySelector(`.${userChoice}`).style.border = "6px solid white";
        document.querySelector(`.${userChoice}`).style.backgroundColor  = " #24272E";
        document.querySelector(`.${computerChoice}`).style.border = "6px solid white";
        document.querySelector(`.${computerChoice}`).style.backgroundColor  = " #24272E";
    }, 600)
}
function draw(userChoice, computerChoice){
    if (computerChoice ==='p'){
        result_div.innerHTML = "🖐️ 🤝 🖐️";
    }else if (computerChoice ==='s'){
        result_div.innerHTML = "✌️ 🤝 ✌️";
    }else if (computerChoice ==='r'){
        result_div.innerHTML = "👊 🤝 👊";
    }
    actionMessege_p.innerHTML = "IT IS A DRAW! 🤝";
    setTimeout(function() {
        document.querySelector(`.${userChoice}`).style.border = "6px solid white";
        document.querySelector(`.${userChoice}`).style.backgroundColor  = " #24272E";
        document.querySelector(`.${computerChoice}`).style.border = "6px solid white";
        document.querySelector(`.${computerChoice}`).style.backgroundColor  = " #24272E";
    }, 600)
}

function game(userChoice){
    const computerChoice = getComputerChoise()

    switch (userChoice + computerChoice) {
        case 'pr':
        case 'sp':
        case 'rs':
            win(userChoice, computerChoice)
            break;

        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice)
            break;
            
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice)
            break;
    }
}

function main(){
    rock_div.addEventListener("click", function(){
        game('r')
    });
    
    paper_div.addEventListener("click", function(){
        game('p')
    });
    
    scissors_div.addEventListener("click", function(){
        game('s')
    });
};

main();
