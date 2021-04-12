import $ from 'jquery';
import Typed from 'typed.js';

export default function() {

	const options = {
		typeSpeed:50,
		startDelay: 500,
		showCursor:true,
		cursorChar: '|',
		smartBackspace: true,
		backDelay: 1000,
		backSpeed: 30,
		strings: ["Hello, I'm Yasufumi Saito", "I'm a <strong>DATA + VISUAL JOURNALIST</strong>", "I code + make visual stories","with focusing on Asia"],
		onComplete: function () {
			console.log("is calling?")
			const header = document.querySelector("#intro");
			header.classList.add("hide");
			const work = document.querySelector("#work");
			work.classList.add("show");
		}
	}
	const typed = new Typed ('#typed', options);
	
}