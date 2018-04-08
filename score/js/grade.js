 
//函数
            var sum_java=0;
			var sum_oop=0;
			var sum_web=0;
			var sum_db=0;
			var sum=0;
			var count=0;
			function dosubmit(){
				count=count+1;
				var StudentName=document.getElementById("StudentName").value; //获取数据
				var Java=document.getElementById("Java").value;
				if(parseInt(Java)>100&&parseInt(Java)<0){
					alert("Java成绩非法，重新输入");
					document.getElementById("Java").value="";
				}
				sum_java+=parseInt(Java);
				var OOP=document.getElementById("OOP").value;
				sum_oop+=parseInt(OOP);
				var Web=document.getElementById("Web").value;
				sum_web+=parseInt(Web);
				var DB=document.getElementById("DB").value;
				sum_db+=parseInt(DB);
				average=((parseInt(Java)+parseInt(OOP)+parseInt(Web)+parseInt(DB))/4);
				sum+=average;
				var row=document.getElementById("TableA").insertRow();
				if(row!=null){
					var cell1=row.insertCell();  //向表格中填充单元格
				    cell1.innerHTML=StudentName;  //向表格中填充数据
				    //cell1.align="center";
				    var cell2=row.insertCell();
				    cell2.innerHTML=Java;
		            //cell2.align="center";
				    var cell3=row.insertCell();
				    cell3.innerHTML=OOP;
				    //cell3.align="center";
				    var cell4=row.insertCell();
				    cell4.innerHTML=Web;
				    //cell4.align="center";
				    var cell5=row.insertCell();
				    cell5.innerHTML=DB;
				    //cell5.align="center";
				    var cell6=row.insertCell();
			        cell6.innerHTML=average;
				    //cell6.align="center";
				    var cell7=row.insertCell();
				    if(average>=90&&average<=100){
				    	cell7.innerHTML="A";
				    }
				    else if(average>=80&&average<90){
				    	cell7.innerHTML="B";
				    }
				    else if(average>=60&&average<80){
				    	cell7.innerHTML="C";
				    }
				    else{
				    	cell7.innerHTML="D";
				    }
				    
				}
				document.getElementById("StudentName").value="";
				document.getElementById("Java").value="";
				document.getElementById("OOP").value="";
				document.getElementById("Web").value="";
				document.getElementById("DB").value=""; 	
				return false;  //onsubmit 第一个函数必须返回真 逻辑错误 哎呀呀
			}
			function return_sum(){   //结束功能 ，计算平均分
				var row=document.getElementById("TableB").insertRow();
				if(row!=null){
					var x=row.insertCell();
					x.innerHTML="每科平均成绩为:";
					var y=row.insertCell();
					y.innerHTML=(sum_java/count).toFixed(2); //保留两位小数
					var z=row.insertCell();
					z.innerHTML=(sum_oop/count).toFixed(2);
					var p=row.insertCell();
					p.innerHTML=(sum_web/count).toFixed(2);
					var q=row.insertCell();
					q.innerHTML=(sum_db/count).toFixed(2);
					var k=row.insertCell();
					k.innerHTML=(sum/count).toFixed(2);
					var r=row.insertCell();
					r.innerHTML="共计 "+count+"人";
				}
			}
			