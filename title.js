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

var titleText = ["$", "$ w", "$ we", "$ wee", "$ weeb", "$ weebw", "$ weebwa", "$ weebwar", "$ weebware", "$ weebware.", "$ weebware.x", "$ weebware.xy", "$ weebware.xyz", "$ weebware.xy",  "$ weebware.x",  "$ weebware", "$ weebwar", "$ weebwa", "$ weebw", "$ weeb", "$ wee", "$ we", "$ w"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
