﻿function showTime() {
	var currentDate = new Date();
	var startDate = new Date(2024, 12);
	var date3 = currentDate - startDate;
	var days = Math.floor(date3 / (24 * 3600 * 1000)) + 30;
	var leave1 = date3 % (24 * 3600 * 1000);     //计算天数后剩余的毫秒数
	var hours = Math.floor(leave1 / (3600 * 1000));
	var leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数
	var minutes = Math.floor(leave2 / (60 * 1000));
	var leave3 = leave2 % (60 * 1000);          //计算分钟数后剩余的毫秒数
	var seconds = Math.round(leave3 / 1000);
	if (minutes < 10)
		minutes = "0" + minutes;
	if (seconds < 10)
		seconds = "0" + seconds;
	var currentTimeString = "<br><br><br>谢莎小可爱:<br>"
		+ "我们已经相知相爱:<br> "
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp"
		+ "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + days + " </c>天 "
		+ "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + hours + " </c>小时 "
		+ "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + minutes + " </c>分钟 "
		+ "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + seconds + " </c>秒<br>"
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp只愿执子之手,与子偕老.<br>"
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
		+ "<c style=\"color: #CCCCCC; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:20px\" >----刘时印   2025-06-22</c>"
		+ "<br><a href='index2.html' id='accept'>同意</a>";
	document.getElementById("show").innerHTML = currentTimeString;  //改这地方
	window.setTimeout("showTime()", 1000);
} 
