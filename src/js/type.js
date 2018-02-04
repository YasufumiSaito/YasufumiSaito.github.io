export default function() {
	//Typed.js
	$("#typed").typed({
		stringsElement: $('#typed-strings'),
		contentType:"html",
		typeSpeed:20,
		startDelay: 50,
		backSpeed: 50,
		backDelay: 1500,
		showCursor:true,
		loop:true
	});
}