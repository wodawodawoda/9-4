// SOLUTION 1
function drawTree(height) {
	for (i = 0; i < height; i++) {
		var star = '';
		// j = 0
		for (j = 0; j < ((height -i) / 2); j++) {
			star += ' ';
		}
		for (k = 0; k <= i; k++) {
			star += "*";
		}
		console.log(star);
	}
}

// SOLUTION 2
function drawTree(height) {
	var star = '*';
	for (i = 0; i <= height; i++) {
		var draw = ' '.repeat((height - i) / 2) + star.repeat(i);
		console.log(draw);
	}
}