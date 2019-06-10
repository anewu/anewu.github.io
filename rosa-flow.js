function showHide(elementID) {
	if(document.getElementById(elementID).style.display == "block") {
		document.getElementById(elementID).style.display = "none";
	} else if(document.getElementById(elementID).style.display == "none") {
		document.getElementById(elementID).style.display = "block";
	}
}