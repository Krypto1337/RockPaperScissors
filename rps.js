let computerScore = 0;
let humanScore = 0;

const divRoundResult = document.querySelector(".round");
const divScore = document.querySelector(".score");
const divWinner = document.querySelector(".winner");
const divResetScore = document.querySelector(".reset");
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissor = document.querySelector(".scissor");

btnRock.onclick = () => {
	if (humanScore == 5 || computerScore == 5) {
		divResetScore.textContent = "";
		divWinner.textContent = "";
		humanScore = 0;
		computerScore = 0;
	}
	playRound(btnRock.textContent.toLowerCase(), getComputerChoice(3));
	updateScore(humanScore, computerScore);
	declareWinner(humanScore, computerScore);
};

btnPaper.onclick = () => {
	if (humanScore == 5 || computerScore == 5) {
		divResetScore.textContent = "";
		divWinner.textContent = "";
		humanScore = 0;
		computerScore = 0;
	}
	playRound(btnPaper.textContent.toLowerCase(), getComputerChoice(3));
	updateScore(humanScore, computerScore);
	declareWinner(humanScore, computerScore);
};
btnScissor.onclick = () => {
	if (humanScore == 5 || computerScore == 5) {
		divResetScore.textContent = "";
		divWinner.textContent = "";
		humanScore = 0;
		computerScore = 0;
	}
	playRound(btnScissor.textContent.toLowerCase(), getComputerChoice(3));
	updateScore(humanScore, computerScore);
	declareWinner(humanScore, computerScore);
};
function getComputerChoice(max) {
	let choice = Math.floor(Math.random() * max);
	switch (choice) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissor";
	}
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice == computerChoice) {
		divRoundResult.textContent = "Round ended as a Draw!";
		divRoundResult.textContent =
			"Both picked " +
			humanChoice.charAt(0).toUpperCase() +
			humanChoice.slice(1);
	} else if (humanChoice == "rock" && computerChoice == "scissor") {
		divRoundResult.textContent = "You won! Rock beats Scissor!";
		humanScore++;
	} else if (humanChoice == "paper" && computerChoice == "rock") {
		divRoundResult.textContent = "You won! Paper beats Rock!";
		humanScore++;
	} else if (humanChoice == "scissor" && computerChoice == "paper") {
		divRoundResult.textContent = "You won! Scissor beats Paper!";
		humanScore++;
	} else {
		divRoundResult.textContent =
			"You lost! " +
			computerChoice.charAt(0).toUpperCase() +
			computerChoice.slice(1) +
			" beats " +
			humanChoice.charAt(0).toUpperCase() +
			humanChoice.slice(1);
		computerScore++;
	}
}

function updateScore(human, computer) {
	divScore.textContent = `Your score: ${human}	-	Computer score: ${computer}`;
}

function declareWinner(human, computer) {
	if (human == 5) {
		divWinner.textContent = "Gratz, you won!";
		divResetScore.textContent = "Resetting score.....";
	}
	if (computer == 5) {
		divWinner.textContent = "Jeez, you lost to a Computer!";
		divResetScore.textContent = "Resetting score.....";
	}
}
