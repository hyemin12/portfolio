$(function(){

//<!------ main ------>
	//toggle
	$(".toggle").click(function(){
		var toggle = $(this).attr("class");
		if(toggle == "toggle"){
			$(".toggle").addClass("change");
			$(".nav").stop().animate({left:0});
		}else{
			$(".toggle").removeClass("change");
			$(".nav").stop().animate({left:"100%"});
		}
	})
	$(".nav li").click(function(){
		$(".toggle").removeClass("change");
		$(".nav").stop().animate({left:"100%"});
	});
});
