$(function() {
	/*分类菜单滑动效果*/
	var flag = false;
	$(".z-large-classify").click(function() {
		if (!$(this).find("ul").is(":animated")) {
			$(this).find("ul").slideDown();
			$(this).find(".fa-sort-desc").addClass("fa-rotate-180");
			flag = true;
			$(this).siblings().find("ul").slideUp();
			$(this).siblings().find(".fa-sort-desc").removeClass("fa-rotate-180");
		}
		if ((!$(this).find("ul").is(":animated")) && flag) {
			$(this).find("ul").slideUp();
			$(this).find(".fa-sort-desc").removeClass("fa-rotate-180");
		}
	});
	/*热门简介部分*/
	$("#z-hot .z-comeFrom").hover(function(){
		$(this).find("li").animate({top:'-40px'}, 500);
	},function(){
		$(this).find("li").animate({top:'0px'}, 500);
//			$("#z-hot .z-comeFrom li").stop(true,true);
	});
})

$(function(){
/*文字滚动部分*/
function $(element) {
	if (arguments.length > 1) {
		for (var i = 0, length = arguments.length, elements = []; i < length; i++) {
			elements.push($(arguments[i]));
		}
		return elements;
	}
	if (typeof element == "string") {
		return document.getElementById(element);
	} else {
		return element;
	}
}
var Class = {
	create: function() {
		return function() {
			this.initialize.apply(this, arguments);
		}
	}
}
Function.prototype.bind = function(object) {
	var method = this;
	return function() {
		method.apply(object, arguments);
	}
}
var Scroll = Class.create();
Scroll.prototype = {
	initialize: function(element, height) {
		this.element = $(element);
		this.element.innerHTML += this.element.innerHTML;
		this.height = height;
		this.maxHeight = this.element.scrollHeight / 2;
		this.counter = 0;
		this.scroll();
		this.timer = "";
		this.element.onmouseover = this.stop.bind(this);
		this.element.onmouseout = function() {
			this.timer = setTimeout(this.scroll.bind(this), 1000);
		}.bind(this);
	},
	scroll: function() {
		if (this.element.scrollTop < this.maxHeight) {
			this.element.scrollTop++;
			this.counter++;
		} else {
			this.element.scrollTop = 0;
			this.counter = 0;
		}
		if (this.counter < this.height) {
			this.timer = setTimeout(this.scroll.bind(this), 22);
		} else {
			this.counter = 0;
			this.timer = setTimeout(this.scroll.bind(this), 3126);
		}
	},
	stop: function() {
		clearTimeout(this.timer);
	}
}
var myscroll = new Scroll("D-wordWrap", 26);
var myscroll = new Scroll("z-author",130);
})