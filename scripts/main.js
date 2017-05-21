gridSize = 16; 

$(document).ready(function() {
	createGrid(gridSize, gridSize);

	$('.gridSquare').click(function() {
		$(this).toggleClass("gridSquareClicked");
	});

	$('#button').click(function() { 
		reset(); 
	});
}); 

function createGrid(size, remains) {
	if (remains === 0) {
		return; 
	} else {
		for (var i = 0; i < 16; i++) {
			$('#container').append("<div class='gridSquare'></div>"); 
		}
		$('#container').append("<br />");
		remains = remains - 1; 
		createGrid(size, remains); 
	}
}

function reset() {
	
}
