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

getComputerChoice(3);
