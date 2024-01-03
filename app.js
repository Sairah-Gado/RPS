function computerChoice(){
    const choices = ["Rock", "Paper","Scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
function rockImg(){
    playGame("Rock")
}
function paperImg(){
    playGame("Paper")
}
function scissorImg(){
    playGame("Scissor")
}

function playGame(playerChoice){
    const computer = computerChoice();
    let result = "";

    if(playerChoice === computer){
        result = "It's a tie!"
    }else if(
        (playerChoice === "Rock" && computer === "Scissor")||
        (playerChoice === "Paper" && computer === "Rock")||
        (playerChoice === "Scissor" && computer === "Paper")
    ){
        result = "You win!"
    }else{
        result = "You lose!"
    }

    document.querySelector('#result').textContent = `"You chose ${playerChoice} and computer chose ${computer}. ${result}"`

}