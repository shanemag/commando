// This callback function is called when the content script has been 
// injected and returned its results
function onPageInfo(o) { 
	var input = o;
	var tokens = o.split('');
    document.getElementById("title").value = o.title; 
    document.getElementById("url").value = o.url; 
} 

function addBookmark(f) {
	var xhr = new XMLHttpRequest();
	var parseUrl = "http://localhost:3000/parse";

	xhr.open("GET", parseUrl, false);

	var input = document.getElementById("input").value
	var tokens = input.split(' ');
	var params = "command?" + tokens.join("+");

	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(params);
}