jQuery(document).ready(function(){

// Define function that computer will run upon clicking the "UPDATE" button (#submit-btn)
function changeCity(event){

	// Prevent default functions from running
	event.preventDefault();

	// Associate variable called city to input/value of form field (#city-type)
	var city = jQuery('#city-type').val();

	// Take user input and turn all letters to lowercase then get rid of extra spaces or new lines
	city = city.toLowerCase().trim();

	// Array of image sources
	var px = ['images/nyc.jpg', 'images/sf.jpg', 'images/la.jpg', 'images/austin.jpg', 'images/sydney.jpg'];

	// List conditionals that will associate a specific user input to an image and change body background image to corresponding city
	if (city == 'new york' || city == 'new york city' || city == 'nyc') {
	jQuery('body').attr('class', 'nyc');
	// Reset the user input field after it is submitted
	jQuery('#city-type').val('');
	console.log("New York City");
	}

	else if (city == 'san francisco' || city == 'sf' || city == 'bay area') {
	jQuery('body').attr('class', 'sf');
	// Reset the user input field after it is submitted
	jQuery('#city-type').val('');
	console.log("San Francisco");
	}

	else if (city == 'los angeles' || city == 'la' || city == 'lax') {
		jQuery('body').attr('class', 'la');
	// Reset the user input field after it is submitted
	jQuery('#city-type').val('');
	console.log("Los Angeles");
	}

	else if (city == 'austin' || city == 'atx') {
	jQuery('body').attr('class', 'austin');
	// Reset the user input field after it is submitted
	jQuery('#city-type').val('');
	console.log("Austin");
	}

	else if (city == 'sydney' || city == 'syd') {
	jQuery('body').attr('class', 'sydney');
	// Reset the user input field after it is submitted
	jQuery('#city-type').val('');
	console.log("Sydney");
	}

	else if (city == 'quezon city' || city == 'quezon' || city == 'qc') {
	jQuery('body').attr('class', 'quezon');
	// Reset the user input field after it is submitted
	jQuery('#city-type').val('');
	console.log("Quezon City");
	}

	else {
	jQuery('body').attr('class', 'asgard');
	jQuery('#city-type').val('');
	console.log("Asgard!");
	}

}

// Upon clicking "UPDATE" button (#submit-btn), computer will run corresponding function
jQuery('#submit-btn').click(changeCity);


})