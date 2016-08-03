$(document).ready(function(){


var spanWidth = $('.text1 span').width();
	$('.text1').animate( {width: spanWidth }, 3000);


$(".continue1").click (function() {
	$(".text1").hide();
	$(".text2").show();
	$(".continue1").hide();
	$(".continue2").show();

var spanWidth = $('.text2 span').width();
	$('.text2').animate( {width: spanWidth }, 2000);
	
});


$(".continue2").click (function() {
	$(".text2").hide();
	$(".text3").show()
	$(".continue2").hide();
	$(".continue3").show();


var spanWidth = $('.text3 span').width();
	$('.text3').animate( {width: spanWidth }, 4000);

});


$(".continue3").click (function() {
	$(".text3").hide();
	$(".text4").show()
	$(".continue3").hide();
	$(".continue4").show();

var spanWidth = $('.text4 span').width();
	$('.text4').animate( {width: spanWidth }, 4000);

});




});










