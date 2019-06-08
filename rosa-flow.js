function showHide(elementID) {
	var currentStat = document.getElementById(elementID).style.display;
	
	if (currentStat == "block") {
		document.getElementById(elementID).style.display = "none";
	} else if (currentStat == "none") {
		document.getElementById(elementID).style.display = "block";
	}
}