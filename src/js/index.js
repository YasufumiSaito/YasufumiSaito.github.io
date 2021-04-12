require('../scss/style.scss');

import showProject from './showProject'
import loader from './loader'

document.addEventListener("DOMContentLoaded", () => {
	showProject();
	loader();
});

	