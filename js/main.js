$(document).ready(function(){

$("#S1, #a1").children().hide();
$(".sit_1").fadeIn(3000);
$(".choice_1").fadeIn(4000);


$(".choice_1").click(function(){
	$(".sit_1, .choice_1").hide();
	$(".sit_2, .choice_2a, .choice_2b").fadeIn(4000);


	});




$(".choice_2a").click(function(){
	$(".sit_2, .choice_2a, .choice_2b").hide();
	$(".sit_3a").fadeIn(3000);
	
	

	});




$(".choice_2b").click(function(){
	$(".sit_2, .choice_2a, .choice_2b").hide();
	$(".sit_3b, .choice_3a, .choice_3b").fadeIn(4000);




	});


$(".choice_3a").click(function(){
	$(".sit_3b, .choice_3a, .choice_3b").hide();
	$(".sit_4a").fadeIn(3000);
	$(".choice_4a, .choice_4b").fadeIn(4000);


	});



$(".choice_3b").click(function(){
	$(".sit_3b, .choice_3a, .choice_3b").hide();
	$(".sit_4b, .choice_5b").fadeIn(4000);

	
	});



$(".choice_4a").click(function(){
	$(".sit_4a, .choice_4a, .choice_4b").hide();
	$(".sit_5, .choice_5a").fadeIn(3000);



	 });

$(".choice_4b").click(function(){
	$(".sit_4a, .choice_4a, .choice_4b").hide();
	$(".sit_5, .choice_5a").fadeIn(3000);



	 });
	


});







