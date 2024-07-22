let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice = () => {
    const choices = ["Rock","Paper","Scissors"];
    const Idx = Math.floor(Math.random() *3);
    return choices[Idx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "game was draw! try again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, compChoice, userChoice) => {
    if(userWin) {
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WON! you beat ${compChoice} by ${userChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE! Comp beat ${userChoice} by ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice",userChoice)
    const compChoice = genCompChoice();
    console.log("comp choice",compChoice);

    if (userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "Rock") {
           userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true;
        }else{
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, compChoice, userChoice); 
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})