$(document).ready(function(){
		
		$("#normal").click(function() 						//For normal grey to black 
		{
			createGrid(); 									//create the grid
			$(".block").hover(function(){ //On Hovering over the div, change that specific div's background colour to black
				$(this).css("background-color" , "black");
			});
		});
		$("#random").click(function(){ 						//for normal grey to a random colour
			createGrid(); 									//create the grid
			
			$(".block").hover(function(){ //On Hovering over the div, change that specific div's background colour to a random colour
				$(this).css("background-color", getRandomColour());
			});
		});
		$("#incremental").click(function(){
			createGrid(); 									//create the grid
			$(".block").hover(function(){ //On Hovering over the div, reduce that specific div's opacity by 10%, unless opacity is 0
				var opacity = $(this).css("opacity");
				if(opacity > 0)
				{
					$(this).css("opacity", opacity - 0.1);
				}
			})
		})
		
});

var createGrid = function(){ 								//Create grid function
	$("#table").empty(); 									//empty the table of any previous elements
			var numBlocks = prompt("Enter a number between 1 and 125"); 	//prompt for the number of blocks per row and column
			if(numBlocks < 1 || numBlocks > 125) 			//checking whether the number of blocks is valid
			{
				alert("Please enter a valid number.");
				return;
			}
			var dim = $("#table").width()/numBlocks; 		//obtain the dimension of each block
			
						
			for(var i = 0; i < numBlocks; i++) 				//loop i from 0 to numBlocks - 1 for numBlocks rows
			{
				$("#table").append('<tr></tr>') 			//create the table rows
				for(var j = 0; j < numBlocks; j++) 			//loop j from 0 to numBlocks - 1 for numBlocks columns
				{
					$("table").children().last().append('<td><div class = "block"></div></td>'); //append the blocks to the last tr
				}
			}	
			$(".block").css("width", dim + "px"); 			//set the width of the block
			$(".block").css("height", dim + "px"); 			// set the height of the block
};

function getRandomColour() { 								//random colour generator
    var hexDigits = "0123456789ABCDEF".split(''); 			//get array of all possible hex values
    var colour = "#";
    for (var i = 0; i < 6; i++ ) { 							//loop for all xix values of the hex colour
        colour += hexDigits[Math.floor(Math.random() * 16)]; //get hex colour randomly
    }
    return colour;
 };
    