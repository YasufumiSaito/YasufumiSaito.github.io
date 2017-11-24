$(document).ready(function() {
	
	$.getJSON("js/project.json", function(data){
		// project rendering by handlebar	
		var source   = document.getElementById("template").innerHTML;
		var template = Handlebars.compile(source);	
		var html = template(data);
		$('#section1').html(html);
		
		//Fullpage.js
		$('#fullpage').fullpage({
			anchors: ['1', '2', '3','4'],
			sectionsColor: ['#8FB98B',"#2c3e50",'#DE564B',"#2c3e50"],
			slidesNavigation: true,
			scrollingSpeed:600,
			continuousVertical: true,
		});
	});
	
	//Typed.js
	$("#typed").typed({
		stringsElement: $('#typed-strings'),
		contentType:"html",
		typeSpeed:20,
		startDelay: 50,
		backSpeed: 50,
		backDelay: 1500,
		showCursor:true,
		loop:true
	})

	//loader
    $('#loader').delay(900).fadeOut(800);
    $('#loader-inside').delay(600).fadeOut(300);
    $("#fullpage").show();

    // Story toggle
    $("#switch0").click(function(){
		$("#photo0").toggleClass('hidden');
	});
	$("#switch1").click(function(){
		$("#photo1").toggleClass('hidden');
	});	
	$("#switch2").click(function(){
		$("#photo2").toggleClass('hidden');
	});
	$("#switch3").click(function(){
		$("#photo3").toggleClass('hidden');
	});
	$("#switch4").click(function(){
		$("#photo4").toggleClass('hidden');
	});
	$("#switch5").click(function(){
		$("#photo5").toggleClass('hidden');
	});
	// $("#switch6").click(function(){
	// 	$("#photo6").toggleClass('hidden');
	// });
	   			
});
	