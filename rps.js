let computerScore = 0;
let humanScore = 0;
let humanSelection;
let computerSelection;

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

function getHumanChoice() {
	let choice = prompt("Choose between Rock, Paper and Scissor:");
	return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice == computerChoice) {
		console.log("Round ended as a Draw!");
		console.log(
			"Both picked " +
				humanChoice.charAt(0).toUpperCase() +
				humanChoice.slice(1)
		);
	} else if (humanChoice == "rock" && computerChoice == "scissor") {
		console.log("You won! Rock beats Scissor!");
		humanScore++;
	} else if (humanChoice == "paper" && computerChoice == "rock") {
		console.log("You won! Paper beats Rock!");
		humanScore++;
	} else if (humanChoice == "scissor" && computerChoice == "paper") {
		console.log("You won! Scissor beats Paper!");
		humanScore++;
	} else {
		console.log(
			"You lost! " +
				computerChoice.charAt(0).toUpperCase() +
				computerChoice.slice(1) +
				" beats " +
				humanChoice.charAt(0).toUpperCase() +
				humanChoice.slice(1)
		);
		computerScore++;
	}
}
/*
function playGame() {
	for (let i = 0; i < 5; i++) {
		humanSelection = getHumanChoice();
		computerSelection = getComputerChoice(3);
		playRound(humanSelection, computerSelection);
	}
	if (humanScore < computerScore) {
		console.log("You lost the Game!");
		console.log("Computer won: " + computerScore + " Round!");
		console.log("You won: " + humanScore + " Rounds");
	} else if (humanScore == computerScore) {
		console.log("Game ended as a Draw! Both won: " + humanScore + " Rounds");
	} else {
		console.log("You won the Game!");
		console.log("You won: " + humanScore + " Round!");
		console.log("Computer won: " + computerScore + " Rounds");
	}
}

playGame();

*/
