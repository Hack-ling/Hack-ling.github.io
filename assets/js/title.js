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

var titleText = ["$", "$ h", "$ ha", "$ hac", "$ hack", "$ hackl", "$ hackli", "$ hacklin", "$ hackling", "$ hackling.", "$ hackling.p", "$ hackling.pw", "$ hackling.p", "$ hackling.",  "$ hackling",  "$ hacklin", "$ hackli", "$ hackl", "$ hack", "$ hac", "$ ha", "$ h"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
