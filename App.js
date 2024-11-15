let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const gamedraw = () => {
    msg.innerText = "Game Was Draw! Play Again";
    msg.style.backgroundColor = "Grey";
}

const showWinner = (userWin,userchoice,compChoice) => {
    if (userWin){
        userscore++;
        userScore.innerText = userscore;
        msg.innerText = `You Win  Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green"
    }
        else{
            compscore++;
            compScore.innerText = compscore;
            msg.innerText = `You Lose!  ${compChoice} beats  Yours ${userchoice}`;
            msg.style.backgroundColor = "Red"
        }

    };


const genCompchoice = () => {
    const options = ["rock","paper","scissor"];
    const randInx =  Math.floor(Math.random() *3);
    return options[randInx];
}

const playgame = (userchoice) => {
     const compChoice = genCompchoice();    
     if (userchoice === compChoice){
        gamedraw();
     }
     else{
        let userWin = true;
        if(userchoice === "rock"){
           userWin =  compChoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
             userWin = compChoice === "scissor" ? false : true;
        }
            else{
               userWin =  compChoice === "rock" ? false : true;

            }
            showWinner(userWin,userchoice,compChoice);
            
        }
     }



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice)
        

    })
})