$(document).ready(function() {
  $('.rsvp_link').on('click', function(e) {
  	console.log('clicked');
  	$('html,body').animate({
		   scrollTop: $("#rsvp").offset().top
		}, 1000);
		return false;
  });

  $('.location_link').on('click', function(e) {
  	console.log('clicked');
  	$('html,body').animate({
		   scrollTop: $("#map").offset().top
		}, 1000);
		return false;
  });

  $('.accomodation_link').on('click', function(e) {
  	console.log('clicked');
  	$('html,body').animate({
		   scrollTop: $("#accomodation").offset().top
		}, 1000);
		return false;
  });

  $('.info_link').on('click', function(e) {
  	console.log('clicked');
  	$('html,body').animate({
		   scrollTop: $("#info").offset().top
		}, 1000);
		return false;
  });

  $('.navbar-brand').on('click', function(e) {
  	console.log('clicked');
  	$('html,body').animate({
		   scrollTop: $("body").offset().top
		}, 1000);
		return false;
  });
});
