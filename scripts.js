
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        //left arrow
        moveLeft();
    }
    else if (e.keyCode == '39') {
        // right arrow
        moveRight();
    }
}

function init() {
	var cssBGImage=new Image();
	cssBGImage.src="city.jpg";

	window.cssMaxWidth=cssBGImage.width;
	window.cssXPos=0;
}

function moveRight () {
		window.cssXPos=window.cssXPos-15;
		var toMove=document.getElementById("container");
		toMove.style.backgroundPosition=window.cssXPos+"px 0px";
}


function moveLeft () {
	window.cssXPos=window.cssXPos+5;

	var toMove=document.getElementById("container");
	toMove.style.backgroundPosition=window.cssXPos+"px 0px";

}
