function getComputerChoice(max) {
	let choice = Math.floor(Math.random() * max);
	switch (choice) {
		case 0:
			console.log("Computer picked Rock");
			break;
		case 1:
			console.log("Computer picked Paper");
			break;
		case 2:
			console.log("Computer picked Scissor");
			break;
	}
}

function getHumanChoice() {
	let choice = prompt("Choose between Rock, Paper and Scissor:");
	console.log(choice);
}

getHumanChoice();
getComputerChoice(3);
