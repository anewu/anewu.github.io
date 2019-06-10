function showHide(elementID) {
	if(document.getElementById(elementID).style.display == "block") {
		document.getElementById(elementID).style.display = "none";
	} else {
		document.getElementById(elementID).style.display = "block";
	}
}