//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://coffeescript.org/
var counter = 0;

function slideSwitch() {
    var $active = $('#slideshow IMG.active');
    var $next = $active.next();  

    if (counter >2)  //This loop resets the slideshow to the start
    	{    	
    	$active = $('#first');
    	$active.addClass('active');
    	 counter = 0;
    	 return;
    	 }
    counter++;

    $next.addClass('active');
    
    $active.removeClass('active');
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});
