$(document).ready(function(){

$("#S1").children().hide();
$("#a1").children().hide();
$(".sit_1").fadeIn(2000);
$(".choice_1").fadeIn(4000);


$(".choice_1").click(function(){
	$(".sit_1").hide();
	$(".choice_1").hide();
	$(".sit_2").fadeIn(4000);
	$(".choice_2a").fadeIn(8000);
	$(".choice_2b").fadeIn(8000);

	// I feel like this could be more efficient with an if e/lse statement, but how?


	});


$(".choice_2a").click(function(){
	$(".sit_2").hide();
	$("#cave").fadeOut(4000);
	$(".choice_2a").hide();
	$(".choice_2b").hide();
	$(".sit_3a").fadeIn(4000);
	
	

	});


$(".choice_2b").click(function(){
	$(".sit_2").hide();
	$(".choice_2a").hide();
	$(".choice_2b").hide();
	$(".sit_3b").fadeIn(4000);
	$(".choice_3a").fadeIn(4000);
	$(".choice_3b").fadeIn(4000);



	});


$(".choice_3a").click(function(){
	$(".sit_3b").hide();
	$(".choice_3a").hide();
	$(".choice_3b").hide();
	$(".sit_4a").fadeIn(3000);
	$(".choice_4a").fadeIn(4000);
	$(".choice_4b").fadeIn(4000);


	});



$(".choice_3b").click(function(){
	$(".sit_3b").hide();
	$(".choice_3a").hide();
	$(".choice_3b").hide();
	$(".sit_4b").fadeIn(3000);
	$(".choice_5b").fadeIn(3000);


	
	});



$(".choice_4a").click(function(){
	$(".sit_4a").hide();
	$(".choice_4a").hide();
	$(".choice_4b").hide();
	$(".sit_5").fadeIn(3000);
	$(".choice_5a").fadeIn(3000);



	 });

$(".choice_4b").click(function(){
	$(".sit_4a").hide();
	$(".choice_4a").hide();
	$(".choice_4b").hide();
	$(".sit_5").fadeIn(3000);
	$(".choice_5a").fadeIn(3000);




	 });
	


});







