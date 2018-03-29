$(document).ready(()=>{

	$(".drop-down").hide();

	$("#navbar").hover(()=>{
		$(".item").removeClass('position-1')
		$(".item").removeClass('position-2')
		$(".item").removeClass('position-3')
		$(".item").addClass('position')
		$(".drop-down").show();
	})


	$("#home").hover(()=>{
		$(".item").removeClass('position')
		$(".item").removeClass('position-2')
		$(".item").removeClass('position-3')
		$(".item").addClass('position-1')
		$(".drop-down").show();
	})


	$("#link").hover(()=>{
		$(".item").removeClass('position-1')
		$(".item").removeClass('position')
		$(".item").removeClass('position-3')
		$(".item").addClass('position-2')
		$(".drop-down").show();
	})


	$("#about").hover(()=>{
		$(".item").removeClass('position-1')
		$(".item").removeClass('position-2')
		$(".item").removeClass('position')
		$(".item").addClass('position-3')
		$(".drop-down").show();
	})

});