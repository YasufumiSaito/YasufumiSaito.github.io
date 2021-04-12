import Handlebars from 'handlebars/dist/handlebars.min.js';
import horizontalScroll from './hscroll'

export default function() {
	fetch("../data/selected.json")
		.then((res) => res.json())
		.then((data) => {
			// console.log(data)
			// project rendering by handlebar	
			const source   = document.getElementById("template").innerHTML;
			const section  = document.getElementById("handlebar"); 
			const template = Handlebars.compile(source);	
			const html = template(data);
			section.innerHTML = html;
		}).then( () => horizontalScroll());
}