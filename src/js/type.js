import $ from 'jquery';
import Typed from 'typed.js';

export default function() {
	//Typed.js

	const options = {
		stringsElement: '#typed-strings',
		contentType:"html",
		typeSpeed:30,
		startDelay: 100,
		showCursor:true,
		onComplete: function () {
			// console.log("is calling?")
			// const header = document.querySelector("#header");
			// header.classList.add("change");
		}
	}
	const typed = new Typed ('#typed', options);
}