import $ from 'jquery';

export default function () {
	//loader
    $('#loader').delay(900).fadeOut(800);
    $('#loader-inside').delay(600).fadeOut(300);
    $("main").show();
}