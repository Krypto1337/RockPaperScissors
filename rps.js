let globalScore = 0;
let humanScore = 0;

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
	} else if (humanChoice == "paper" && computerChoice == "rock") {
		console.log("You won! Paper beats Rock!");
	} else if (humanChoice == "scissor" && computerChoice == "paper") {
		console.log("You won! Scissor beats Paper!");
	}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

playRound(humanSelection, computerSelection);
