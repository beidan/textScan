/*谷歌浏览器中*/
window.onscroll = function() {
		var h = $(window).scrollTop();
		if (h > 300) {
			$("header").fadeIn("slow");
		} else {
			$("header").fadeOut();
		}
	}
	/*收藏图标点击变化*/
$(function() {
	$(".store").click(function() {
		var defaut = $(this).find("a>span").hasClass("fa-heart-o");
		//		alert(defaut);
		if (defaut) {
			$(this).find("a>span").removeClass("fa-heart-o");
			$(this).find("a>span").addClass("fa-heart");
			$(this).find("a>span").css({
				"color": "#F65150"
			});
		} else {
			$(this).find("a>span").removeClass("fa-heart");
			$(this).find("a>span").addClass("fa-heart-o");
			$(this).find("a>span").css({
				"color": "#BA0000"
			});
		}
	});
	/*阅读全屏显示效果*/
	$(".fa-arrows-alt").click(function() {
		var b = $(".big-read").is(":hidden");
		if (b) {;
			$("#normal").hide();
			$(".big-read").show();
		} else {
			$("#normal").show();
			$(".big-read").hide()
		}
	});
})