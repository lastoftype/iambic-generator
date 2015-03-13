jQuery(document).ready(function($) {

	var $poem_input = $('.poem-input h1'),
		data_count 	= parseInt($poem_input.attr('data-count')),
		pent_array 	= [
			'I didn\'t even take',
			'the recent test',
			'i got a freaking',
			'legendary quest',
			'i ride a downward spriral round',
			'just sitting watching people jump around',
			'in moral life however they were too',
			'all 5 malaysian fighters won the fight'
		];

	$('body').on('click', '.sextant', function(event) {
		event.preventDefault();
		
		var $this 		= $(this),
			text 		= $this.find('h2').text(),
			added_count = data_count++;
		
		if(data_count % 6 == 0 && data_count > 0){
			// If it's been 5, add a comma
			$poem_input.append('<span class="typed animated" data-counted="'+data_count+'">, </span>');
		} else {
			$poem_input.append('<span class="typed animated" data-counted="'+data_count+'">&nbsp;</span>');
		}
		$('[data-counted="'+data_count+'"]').typed({
            strings: [text+' '],
            typeSpeed: 0,
            showCursor: false,
            // character for cursor
        });

		// Increase count by 1
		$poem_input.attr('data-count',added_count);

		// Get new text
		$('.sextant').each(function(index, el) {
			var $this = $(this);
			var h2 = $this.find('h2');
				h2.text(getRandomValue(pent_array));
				h2.addClass('animated fadeInUp');
		});

	});

	/*
	* @name randomPent
	* @param {Array} array 
	* @returns random value
	*/
	function getRandomValue(array){
		 return array[Math.floor(Math.random() * array.length)];
	}

});