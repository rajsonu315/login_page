dateTime = function () {
	var now = new Date();
	var hours = now.getHours();
	var greet;

	if (hours < 12) {
		greet = "Good Morning,";
	} else if (hours < 16) {
		greet = "Good Afternoon,";
	} else {
		greet = "Good Evening,";
	}

	$('#time').html(greet);
};

menuDropdowns = function () {
	$('.dropdown').each(function () {
		const links = $(this).find('.links');
		const h = links.height();

		links.css('height', '0');

		$(this).click(function () {
			if ($(this).toggleClass('js-opened').hasClass('js-opened')) {
				links.css('height', h);
			} else {
				links.css('height', 0);
			};

		});
	});
};

$(document).ready(function () {

	menuDropdowns();
	dateTime();

	$('.js-toggle-menu').click(function () {
		$('.menu').toggleClass('active');
	});

});



//////////////////////////
////////////////////
///////////////
///////////////
/////////
////////
/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function() {
    $('.table').DataTable({
      //disable sorting on last column
      "columnDefs": [
        { "orderable": false, "targets": 5 }
      ],
      language: {
        //customize pagination prev and next buttons: use arrows instead of words
        'paginate': {
          'previous': '<span class="fa fa-chevron-left"></span>',
          'next': '<span class="fa fa-chevron-right"></span>'
        },
        //customize number of elements to be displayed
        "lengthMenu": 'Display <select class="form-control input-sm">'+
        '<option value="10">10</option>'+
        '<option value="20">20</option>'+
        '<option value="30">30</option>'+
        '<option value="40">40</option>'+
        '<option value="50">50</option>'+
        '<option value="-1">All</option>'+
        '</select> results'
      }
    })  
} );