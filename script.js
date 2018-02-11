// SOLUTION 1
function drawTree(height) {
	for (let i = 0; i < height; i++) {
		let star = '';
		// j = 0
		for (let j = 0; j < ((height - i) / 2); j++) {
			star += ' ';
		}
		for (let k = 0; k <= i; k++) {
			star += "*";
		}
		console.log(star);
	}
}

// SOLUTION 2
function drawTree(height) {
	let star = '*';
	for (let i = 0; i <= height; i++) {
		let draw = ' '.repeat((height - i) / 2) + star.repeat(i);
		console.log(draw);
	}
}
