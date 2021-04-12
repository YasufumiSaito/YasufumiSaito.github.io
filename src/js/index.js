require('../scss/style.scss');

import showProject from './showProject'
import loader from './loader'
import vhFix from './vhFix'

document.addEventListener("DOMContentLoaded", () => {
	showProject();
	loader();
	vhFix();
});

	