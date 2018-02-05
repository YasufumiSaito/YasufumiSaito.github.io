import $ from 'jquery';
import Typed from 'typed.js';

export default function() {
	//Typed.js

	const options = {
		stringsElement: '#typed-strings',
		contentType:"html",
		typeSpeed:100,
		startDelay: 100,
		backSpeed: 100,
		backDelay: 1500,
		showCursor:true,
		loop:true
	}
	const typed = new Typed ('#typed', options);
}