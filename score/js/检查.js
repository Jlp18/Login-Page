
//判断学生姓名是否为中文
function isChinese(str){
	var reg=/^[\u4E00-\u9FA5]{2,4}$/;
	return reg.test(str);
}

//判断成绩是否合法
function isRight(str){
	if((str*10%5!=0)||str>100||str<0||str=="") {
		return true;
	}
	return false;
}

function check(){
	var get_student_name=document.getElementById("StudentName").value;
	if(!isChinese(get_student_name)){
		alert("学生姓名非法，请重新输入");
		document.getElementById("StudentName").value="";
		document.getElementById("StudentName").focus();
		return false;
	}
	var get_java=document.getElementById("Java").value;
	if(isRight(get_java)){
		alert("Java成绩非法，请重新输入");
		document.getElementById("Java").value="";
		document.getElementById("Java").focus();
		return false;
	}
	var get_oop=document.getElementById("OOP").value;
	if(isRight(get_oop)){
		alert("OOP成绩非法，请重新输入");
		document.getElementById("OOP").value="";
		document.getElementById("OOP").focus();
		return false;
	}
	var get_web=document.getElementById("Web").value;
	if(isRight(get_web)){
		alert("Web成绩非法，请重新输入");
		document.getElementById("Web").value="";
		document.getElementById("Web").focus();
		return false;
	}
	var get_db=document.getElementById("DB").value;
	if(isRight(get_db)){
		alert("DB成绩非法，请重新输入");
		document.getElementById("DB").value="";
		document.getElementById("DB").focus();
		return false;
	}
	return true;
}
