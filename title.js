if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 600);

}

var x = 0;

var titleText = ["$", "$ c", "$ cu", "$ cut", "$ cuti", "$ cutie", "$ cutie.", "$ cutie.p", "$ cutie.pw", "$ cutie.p", "$ cutie.", "$ cutie.", "$ cutie", "$ cuti",  "$ cut",  "$ cut", "$ cu", "$ c"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
