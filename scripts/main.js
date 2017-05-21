gridSize = 16; 

$(document).ready(function() {
	createGrid(gridSize, gridSize);

	$(document).on("mouseleave", ".gridSquare", function() {
		$(this).addClass("gridSquareClicked");
	});

	/*$(".gridSquare").live("hover", function() { 
		$(this).addClass("gridSquareClicked");
	});*/

	$('#button').click(function() { 
		gridSize = prompt("Please enter size", gridSize); 
		if (gridSize !== null) {
			$('div.gridSquare').removeClass('gridSquareClicked');
			$('#container').html(""); 
			createGrid(gridSize, gridSize); 
		}
	});

	$(".gridSquare").hover(function() {
		$(this).addClass("gridSquareClicked");
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
