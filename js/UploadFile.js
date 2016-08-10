var str; /*文件的名字*/
var total = 0; /*文档实际份数*/
var textNum = 1; /*克隆文档份数*/
var documentNum; /*克隆的文档*/
$(function() {
	/*获得文件名*/
	$(".replace-file,.fa-plus").click(function() {
		$(".dm" + textNum).find("input[type=file]").unbind();
		$(".dm" + textNum).find("input[type=file]").change(function() {
			$("#all-push").fadeIn();
			total++;
			$(".introduce-account").fadeIn();
			$(".introduce-account").find(".main-num").html(total);
			str = $(this).val();
			$(".dm" + textNum + " .text-title").val(str);
			$(".dm" + textNum + " .little-fold p span").html(str);
			documentNum = $(".dm1").clone("true ");
			documentNum.css({
				"display": "none"
			});
			documentNum.removeClass("dm1");
			documentNum.addClass("dm" + (textNum + 1));
			$(".dm" + textNum).after(documentNum);
			$(".dm" + textNum).fadeIn();
			textNum++;
		});
		$(".dm" + textNum + " .file").trigger("click");
	});
	/*折叠文档详细信息*/
	$(".fa-eject").bind('click', function() {
		if ($(this).parent().parent().find(".fold-detail").is(":visible")) {
			$(this).parent().find("p").fadeIn();
			$(this).parent().parent().find(".fold-detail").fadeOut();
			$(this).parent().parent().find(".num").animate({
				top: "7px"
			}, 100);
			$(this).addClass("fa-rotate-180");
		} else {
			$(this).parent().parent().find(".fold-detail").fadeIn();
			$(this).parent().find("p").fadeOut();
			$(this).parent().parent().find(".num").animate({
				top: "27px"
			}, 100);
			$(this).removeClass("fa-rotate-180");
		}
	});




	/*复选框默认*/
	var def = "教育类, 小学教育 ";
	/*控制类别复选框的出现*/
	$(".big-classify").change(function() {
		var index = $(this).get(0).selectedIndex + 1;
		$(this).parent().find("select").not(".big-classify").hide();
		//		alert(index);
		$(this).parent().find("select").eq(index).show();
		def = $(this).val() + ", " + $(this).parent().find("select").eq(index).val();
		$(this).parent().find("select").eq(index).change(function() {
			def = $(this).val() + ", " + $(this).parent().find("select").eq(index).val();
			//			alert(def);
		})
	});
	//   alert(def);

	/*获取下载积分*/
	$(".count").change(function() {
		var count = $(this).val();
		//		alert(count);
	});
	$(".cancel-upload").click(function() {
		var $sp = $("<span class='main-num'></span>");
		total = $(".introduce-account").find(".main-num").text();
		if (total == 1) {
			$(".introduce-account").fadeOut();
			$("#all-push").fadeOut();
			total = 0;
		} else {
			total = total - 1;
			//			alert(total);
			$(".introduce-account").find(".main-num").remove();
			$(".introduce-account .all-text").prepend($sp);
			$(".introduce-account").find(".main-num").html(total);
		}
		$(this).parent().parent().fadeOut();
	});

	/*上传时判断实际上传的文档标志*/
	$("#all-push").click(function() {
		var detaileMassage = $(".detaile-massage");
		var len = detaileMassage.length;
		for (var i = 0; i < len; i++) {
			if (detaileMassage.eq(i).is(":hidden")) {
                detaileMassage.eq(i).remove();
			}
		}
	});






















})