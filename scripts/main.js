gridSize = 16; 

$(document).ready(function() {
	createGrid(gridSize, gridSize);

	$('.gridSquare').hover(function() {
		$(this).addClass("gridSquareClicked");
	});

	$('#button').click(function() { 
		gridSize = prompt("Please enter size", gridSize); 
		if (gridSize !== null) {
			$('#container').html(""); 
			createGrid(gridSize, gridSize); 
		}
	});
}); 

function createGrid(size, remains) {
	if (remains === 0) {
		return; 
	} else {
		for (var i = 0; i < size; i++) {
			$('#container').append("<div class='gridSquare'></div>"); 
		}
		$('#container').append("<br />");
		remains = remains - 1; 
		createGrid(size, remains); 
	}
}
