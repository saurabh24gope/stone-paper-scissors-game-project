let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const showWinner = (userWin, userchoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }

};

const drawGame= () => {
    console.log("The Game was draw.");
    msg.innerText = "Draw,Play Again!";
    msg.style.backgroundColor = "#081b31";

};

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}


const playGame = (userchoice)=>{
    console.log("user choice:",userchoice);
    const compChoice = genCompChoice();
    console.log("comp choice:",compChoice);

    if(userchoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice==="rock"){
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userchoice==="paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin, userchoice, compChoice);
    }

}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked:",userchoice);
        playGame(userchoice);
    });
});