var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
	this.classList.toggle("active");
	var contentas = this.nextElementSibling;
	if (contentas.style.maxHeight){
	    contentas.style.maxHeight = null;
	} else {
	    contentas.style.maxHeight = contentas.scrollHeight + "px";
	}
    });
}
