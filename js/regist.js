$(function() {
	//设置Container的高度
	var h = $(window).height();
	$(".z-container").css({
		"height": "h+'px'"
	});
	//手机/邮箱验证
	var $Phone = $("#z-account");
	var re = /^1\d{10}$/;
	var reEmail = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
	var $success = $("<span class='fa fa-check-circle-o fa-lg' style='color:#8CD232'></span>");
	var $faile = $("<span class='fa fa-times-circle-o fa-lg' style='color:#C0C0C4'></span>")
	var $tip = $("<p class='tip' style='font-size:12px;display:inline-block;margin:0;'></p>").text("输入不能为空！")

	//密码验证
	var $FirstPassword = $("#z-account0");
	var $SecondPassword = $("#z-account1");
	var $tip1 = $("<p class='tip1' style='font-size:12px;display:inline-block;margin:0;'></p>").text("密码长度不能少于4！");
	var $tip2 = $("<p class='tip2' style='font-size:12px;display:inline-block;margin:0;'></p>").text("两次密码不一致！");

	//手机/邮箱验证
	$("#z-account").bind('input propertychange', function() {
		if (re.test($Phone.val()) || reEmail.test($Phone.val())) {
			$(".fa-times-circle-o").remove();
			$("#z-PhoneRegist").append($success);
			$(".tip").remove();
		} else {
			$(".fa-check-circle-o").remove();
			$("#z-PhoneRegist").append($faile);
			$(".tip").remove();
		}
	});

	//密码基本验证
	$("#z-account0").bind('input', function() {
		//密码为空
		if ($FirstPassword.val() == "") {
			$("#z-progress").hide();
			$(".tip1").remove();
		}

		if ($FirstPassword.val().length < 4) {
			$(".tip").remove();
			$("#z-progress").css("display", "inline-block");
		} else {
			//				$(".tip1").remove();
			$("#z-account0").keyup(function() {
				var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
				var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
				var enoughRegex = new RegExp("(?=.{6,}).*", "g");

				if (false == enoughRegex.test($(this).val())) {
					$("#z-Real").css({
						"width": "0px"
					});
					$("#z-progress").css("display", "inline-block")
						//密码小于六位的时候，密码强度图片都为灰色 
				} else if (strongRegex.test($(this).val())) {
					$("#z-Real").css({
						"width": "140px"
					});
					//密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
				} else if (mediumRegex.test($(this).val())) {
					$("#z-Real").css({
						"width": "100px"
					});

					//密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
				} else {
					$("#z-Real").css({
						"width": "34px"
					});

					//如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的 
				}
				return true;
			});
		}

		if ($FirstPassword.val().length > 0 && $SecondPassword.val().length > 0 && $FirstPassword.val() != $SecondPassword.val()) {
			$(".tip1").remove();
			$(".tip3").remove();
			$("#z-PasswordConfirm").append($tip2);
		}
	});

	//密码确认验证
	$("#z-account1").bind('input propertychange', function() {
		if ($SecondPassword.val().length < 4) {
			$(".tip").remove();
			$(".tip2").remove();
			$(".tip3").remove();
			$(".fa-check-circle-o").remove();
			$("#z-PasswordConfirm").append($tip1);
		} else {
			$(".fa-check-circle-o").remove();

		}
		if ($FirstPassword.val() == $SecondPassword.val() && $SecondPassword.val().length >= 4) {
			$(".tip1").remove();
			$(".tip2").remove();
			$("#z-PasswordConfirm").append($success);
		} else if ($SecondPassword.val().length >= 4) {
			$(".tip1").remove();
			$(".fa-check-circle-o").remove();
			$("#z-PasswordConfirm").append($tip2);
		}
		if ($SecondPassword.val() == "") {
			$(".tip1").remove();
			$(".tip2").remove();
			$(".fa-check-circle-o").remove();
			$("#z-PasswordConfirm").append($tip);
		}
	});
})