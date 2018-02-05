require('../scss/style.scss');

import showProject from './showProject'
// import fullpage from './fullpage'
import type from './type'
import loader from './loader'
import photoToggle from './photoToggle'

document.addEventListener("DOMContentLoaded", () => {
	showProject();
	// fullpage();
	type();
	loader();
	photoToggle();  
});

	