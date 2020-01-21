// JavaScript Document
$(function() {
	$(".grid-gallery").children().click(function(e) {
		$(".slider").empty();
		$(this).clone().appendTo(".slider");
	})
})