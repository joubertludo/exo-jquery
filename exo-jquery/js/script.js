$(document).ready(function(){
	$("p").click(function(){
		$(this).hide()
	})
	$("#button1").click(function(){
		
	if($("p").hide());
	$("p").show();
	})
	$("#button2").click(function(){
		$(".popup").fadeIn();
		$("#c").hide();
		$("#c").fadeIn(2000);
		// $(".popup");show().append('<div id="ok">ok</div>');
	})
	$("#close").click(function(){
	    $(".popup").fadeOut();

	    

	})
	$("#button3").click(function(){
		$("p").toggle(1500);
	})
$("#flip").click(function(){
	$("#panel").slideToggle("slow");

});
// $("#panel").click(function(){
// 	$("#panel").slideUp("slow");
// })
})