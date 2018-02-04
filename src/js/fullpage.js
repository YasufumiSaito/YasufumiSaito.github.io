export default function () {
	//Fullpage.js
	$('#fullpage').fullpage({
		anchors: ['1', '2', '3','4'],
		sectionsColor: ['#8FB98B',"#2c3e50",'#DE564B',"#2c3e50"],
		slidesNavigation: true,
		scrollingSpeed:600,
		continuousVertical: true,
	});
}