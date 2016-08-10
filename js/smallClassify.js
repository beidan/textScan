$(function() {
	$(".catalogue").tabs({
		fx: {
			opacity: "toggle",
			height: "fadeOut"
		},
		event: "mousemove"
	});
	$(".catalogue .detail-classify li").each(function() {
		$(this).find("a").hover(function() {
//			$(this).css({"background":"red"});
			$(this).addClass("detail-active");
			$(this).parent().siblings().find("a").removeClass("detail-active");
		});
	});
})