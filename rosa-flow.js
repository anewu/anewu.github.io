function showHide(elementID) {
	console.log(document.getElementById(elementID).style.display);
	if (document.getElementById(elementID).style.display == "block") {
		document.getElementById(elementID).style.display = "none";
	} else if (document.getElementById(elementID).style.display == "none") {
		document.getElementById(elementID).style.display = "block";
	}
}