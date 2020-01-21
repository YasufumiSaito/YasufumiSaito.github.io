require('../scss/style.scss');

import showProject from './showProject'
import type from './type'
import loader from './loader'
import photoToggle from './photoToggle'

document.addEventListener("DOMContentLoaded", () => {
	showProject();
	type();
	loader();
	photoToggle();  
});

	