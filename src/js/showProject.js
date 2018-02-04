export default function() {
	$.getJSON("../data/project.json", function(data){
		// project rendering by handlebar	
		var source   = document.getElementById("template").innerHTML;
		var template = Handlebars.compile(source);	
		var html = template(data);
		$('#section1').html(html);
	});
}