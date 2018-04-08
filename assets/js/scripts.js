
/*  jQuery(document).ready(function() {

    $('.page-container form').submit(function(){
        var username = $(this).find('.username').val();
        var password = $(this).find('.password').val();
        if(username == '') {
        	alert("请输入用户名！");
            $(this).find('.error').fadeOut('fast', function(){
               $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
		
        if(password == '') {
        	alert("请输入密码！")
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
            });
            return false;
        }
    });

    $('.page-container form .username, .page-container form .password').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });

});*/

function do_reg(){
	alert("注册成功")
}
function check(form){
	if(form.username.value==""){
		alert("请输入用户名");
		return false;
	}
	if(form.password.value==""){
		alert("请输入密码");
		return false;
	}
	return true;
}
function check1(form){
	if(form.newName.value==""){
		alert("用户名不能为空！");
		return false;
	}
	if(form.newPassword.value==""){
		alert("密码不能为空！")
		return false;
	}
	if(form.newPassword.value!=form.repeat_new_password.value){
		alert("密码错误，重新输入");
		return false;
	}
	return true;
}
