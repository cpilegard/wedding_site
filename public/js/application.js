$(document).ready(function() {
  $('.rsvp_link').on('click', function() {
  	$('html,body').animate({
		   scrollTop: $("#rsvp").offset().top
		}, 1000);
		return false;
  });

  $('.location_link').on('click', function() {
  	$('html,body').animate({
		   scrollTop: $("#map").offset().top
		}, 1000);
		return false;
  });

  $('.accomodation_link').on('click', function() {
  	$('html,body').animate({
		   scrollTop: $("#accomodation").offset().top
		}, 1000);
		return false;
  });

  $('.info_link').on('click', function() {
  	$('html,body').animate({
		   scrollTop: $("#info").offset().top
		}, 1000);
		return false;
  });

  $('.navbar-brand').on('click', function() {
  	$('html,body').animate({
		   scrollTop: $("body").offset().top
		}, 1000);
		return false;
  });

  $('button').on('click', function(e) {
  	e.preventDefault();
  	var name = $('#name-input').val();
  	var status = $('#status-input').val();
  	$.ajax({
  		url: '/rsvp',
  		type: 'post',
  		data: { name: name, status: status }
  	}).done(function() {
  		$('form').slideUp();
  		$('form').closest('div').append('<h2>Thanks '+name+'!</h2>');
  	}).fail(function() {
  		$('form').slideUp();
  		$('form').closest('div').append('<h2 style="color:red;">Oops, something went wrong. Please try again later!</h2>');
  	});
  });
});
