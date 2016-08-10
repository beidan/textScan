var validator;
$(document).ready(function(){
	validator = $("#c-commentForm").validate({
	
		rules:{
			"c-login":{
				required:true,
				ownlogin:true
			},
			"c-password":{
				required:true,
				minlength:3,
			}
		},
		messages:{
	       "c-login":{
	       	 required: "账号不能为空！",
		  },
		 "c-password":{
            required: "密码不能为空！",
			minlength:"密码长度必须大于3位",
		
		  }
		},
		groups:{
			login1:"c-login c-password"
		},
//		errorPlacement:function(error,element){
//			error.insertAfter("#c-fo1");
//		},
		highlight:function(element,errorClass,validClass){
			$(element).addClass("c-notpass").removeClass("c-pass").removeClass("c-imgpo");
		},
		unhighlight:function(element,errorClass,validClass){
			$(element).removeClass("c-notpass").addClass("c-pass").removeClass("c-imgpo");
		},
        
	});
         $.validator.addMethod("ownlogin",function(value,element,params){
         	var ownlogin=/(^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$)|(^1\d{10}$)/;
         	return this.optional(element)||(ownlogin.test(value));
         },"请输入手机号码或者邮箱");

})
