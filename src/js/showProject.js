export default function() {
	fetch("../data/project.json")
		.then((res) => res.json())
		.then((data) => {
			// project rendering by handlebar	
			const source   = document.getElementById("template").innerHTML;
			const section  = document.getElementById("section1"); 
			const template = Handlebars.compile(source);	
			const html = template(data);
			section.innerHTML = html;
		});
}