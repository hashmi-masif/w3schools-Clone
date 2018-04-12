	$(document).ready(function(){


	
		//Scroll event handler for bar opacity and animation
	$( window ).scroll(function() {
		 test = document.querySelector("body").scrollTop;
			 
					
		  if(test>250)
				{
				$("#hi").animate({left:'49%'},1000);
	$("#web_developer").animate({left:'33%'},1000);
	$(".go").animate({top:'110%'},1000);
	$("ul").removeClass("opa1");
	if(test>600){
		$("ul").addClass("opa1");
		if(test>970){
			$("#what_l").animate({left:'60%'},1000);
	$("#intro2").animate({left:"50%"},1000);
			$("#logo2").css({"display":"block"});
			$("#logo2").animate({left:'10%'},1000);
			
			if(test>1250){
				$("#goal").animate({left:"10%"},1000);
				$("#intro3").animate({left:"10%"},1000);
				$("#logo3").css({"display":"block"});
			$("#logo3").animate({left:'70%'},1000);
			}
		}
	}
	
			}


		});
	

		$("#name").fadeIn(5000);
		$("#log").fadeIn(2000);
$("#intro").fadeIn(7000);
var x=0;

$(window).resize(function(){
var y=$(window).width();
if(y>700){
	$("li").removeClass("display");
			$("li").addClass("elm");
			$("ul").removeClass("opa");
			$("#web_developer").removeClass("align");
}
});

//icon for menu event
$("#menu_icon").click(
	function(){
				if(x===0){
			$("li").addClass("display");
			$("li").removeClass("elm");
				$("ul").addClass("opa");

			x++;
		}else{
			$("li").removeClass("display");
			$("li").addClass("elm");
			$("ul").removeClass("opa");
			x--;
		}
});
	$("#linkd").click(function(){
		window.open("https://linkedin.com/in/asif-hashmi-73502b146");
	});
	
	$("#twit").click(function(){
		window.open("https://twitter.com/Udolf69");
	});
	
		$("#twit").click(function(){
		window.open("https://twitter.com/Udolf69");
	});
		$("#fb").click(function(){
		window.open("https://www.facebook.com/Udolf007");
	});
	
	});