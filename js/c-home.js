$(function() {

	//	全选功能按钮
	var $cchoice = $(".c-owndevote [name='items']");
	$("#checkall1").bind("click", function() {
		$cchoice.prop("checked", $(this).prop("checked"));
		if ($(this).prop("checked")) {
			$(this).parent().parent().parent().find("a").css("display", "block");
		} else {
			$(this).parent().parent().parent().find("a").css("display", "none");
		}
	});
	var $ccoll = $(".c-owncoll [name='items']");
	$("#checkall2").bind("click", function() {
		$ccoll.prop("checked", $(this).prop("checked"));
		if ($(this).prop("checked")) {
			$(this).parent().parent().parent().find("a").css("display", "block");
		} else {
			$(this).parent().parent().parent().find("a").css("display", "none");
		}
	});
	var $cdown = $(".c-owndown [name='items']");
	$("#checkall3").bind("click", function() {
		$cdown.prop("checked", $(this).prop("checked"));
		if ($(this).prop("checked")) {
			$(this).parent().parent().parent().find("a").css("display", "block");
		} else {
			$(this).parent().parent().parent().find("a").css("display", "none");
		}
	});
	//全选功能

	//	显示删除图标
	$(".c-addtrash tr").hover(
		function() {
			$(this).children().eq(2).children().css("display", "block");
			$(this).children().eq(3).children().css("display", "block");
		}, function() {
			$(this).children().eq(2).children().css("display", "none");
			$(this).children().eq(3).children().css("display", "none");
		}
	);
	//	显示删除图标

	//显示文本框
	$(".c-controlrevise").click(function() {
		
		if ($(".c-ownedit").text() == "编辑") {
		
		} else {

			var cprimary = $(this).parent().parent().find("a").text();
			$(this).parent().parent().find("input").val(cprimary);
			$(this).parent().parent().find("input").show();
			$(this).parent().parent().find("button").show();
			$(this).parent().parent().find(".c-filehide").hide();
		}
	});
	//显示文本框

	//隐藏文本框
	$(".c-textsave").click(function() {
		if ($(this).text() == "确定") {
			var textvalue = $(this).parent().find("input").val();
			$(this).parent().find("a").text(textvalue);
			$(this).parent().find("a").show();
			$(this).parent().find("input").hide();
			$(this).parent().find("button").hide();
		} else {
			$(this).parent().find("a").show();
			$(this).parent().find("input").hide();
			$(this).parent().find("button").hide();
		}
	})


	//隐藏文本框


	//	回到顶部按钮
	
	
	
	$(".c-touphov").hover(
		function() {
			$(".c-toup a").first().show();
			$(this).addClass("c-toupbut");
		}, function() {
			$(".c-toup a").first().hide();
			$(this).removeClass("c-toupbut");
		}
	);
	$(window).scroll(function() {
		if ($(window).scrollTop() > 200) {
			$(".c-touphov").fadeIn(500);
		} else {
			$(".c-touphov").fadeOut(500);
		}
	});
	//当点击跳转链接后，回到页面顶部位置 
	$(".c-touphov").bind("click", function() {
		$("body,html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	//	回到顶部按钮

	//	显示编辑头像文字
	$(".c-ownmsge a").hover(
		function() {
			$(this).find("div").show("slow");
		}, function() {
			$(this).find("div").hide("slow");
		}
	);

	//	编辑保存功能
	$("#cform").find("input").prop("disabled", true);
	$("#cform").find("textarea").prop("disabled", true);
	$("#cform").find("select").prop("disabled", true);
	$(".c-saveedit").click(function() {
		if ($(this).html() == "编辑") {
			$("#cform").find("input").removeProp("disabled");
			$("#cform").find("textarea").removeProp("disabled");
			$("#cform").find("select").removeProp("disabled");
			$(this).html("保存");
		} else {
			$("#cform").find("input").prop("disabled", true);
			$("#cform").find("textarea").prop("disabled", true);
			$("#cform").find("select").prop("disabled", true);
			$(this).html("编辑");
		}
	});

	// 我的文档编辑保存功能
	$("table").find(":checkbox").prop("disabled", true);
	$("table").find("select").prop("disabled", true);
	$(".c-save button").click(function() {
		if ($(this).html() == "编辑") {
			$("table").find("select").removeProp("disabled");
			$("table").find(":checkbox").removeProp("disabled");
			$(this).html("保存");

		} else {
			$("table").find(":checkbox").prop("disabled", true);
			$("table").find(":checkbox").prop("checked", false);
			$("table").find("select").prop("disabled", true);
			$(this).html("编辑");
		}
	});

	//选择推荐图片
	$(".c-suggest-img div").bind("click", function() {
		$(this).addClass("c-selectimg");
		$(this).siblings().removeClass("c-selectimg");
	});


//密码验证
     $("#c-pswchange").validate({
		rules:{
			"c-firstpsw":{
				required:true
			},
			"c-lastpsw":{
				required:true,
				minlength:3,
			},
			"c-lastpswagain":{
				equalTo:"#c-lastpsw"
			}
		},
		messages:{
	       "c-firstpsw":{
	       	 required: "请输入原始密码！",
		  },
		 "c-lastpsw":{
            required: "初始密码不能为空！",
			minlength:"密码长度必须大于3位",
		 },
		 "c-lastpswagain":{
			equalTo:"两次输入的密码不一致"
		 }
		},
		groups:{
			login1:"c-firstpsw c-lastpsw c-lastpswagain"
		}

        
	});


})