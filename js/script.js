$(document).ready(function(){

	if ($(window).width() < 992){

		$(".main-nav").hide();
		
	}

	$(window).resize(function(){
		if ($(window).width() < 992){

			if (!$(".x-icon").is(":visible")){
				$(".main-nav").hide();
			} else{
				$(".bars-icon").show();
			}
			
		} else {

			$(".main-nav").show();
			$(".x-icon").hide();
		}

	});

	$(".bars-icon").click(function(){

		$(".main-nav").slideDown(500);
		$(".bars-icon").hide();
		$(".x-icon").show();

	});

	$(".x-icon").click(function(){

		$(".main-nav").slideUp(500);
		$(".bars-icon").show();
		$(".x-icon").hide();

	});

});