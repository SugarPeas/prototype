function StartMove() {
	var cssBGImage=new Image();
	cssBGImage.src="city.jpg";

	window.cssMaxWidth=cssBGImage.width;
	window.cssXPos=0;
	setInterval("HorzMoveBackGround()",50);
}

function HorzMoveBackGround () {
	window.cssXPos=window.cssXPos+1;
	if (window.cssXPos>=window.cssMaxWidth) {
	window.cssXPos=0;
	}
	toMove=document.getElementById("container");
	toMove.style.backgroundPosition=window.cssXPos+"px 0px";

}