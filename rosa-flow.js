function showHide(elementID) {
	var currentStat = document.getElementById(elementID).display;
	
	if (currentStat == "block") {
		document.getElementById(elementID).display = "none";
	}
	elseif (currentStat == "none") {
		document.getElementById(elementID).display = "block";
	}
{