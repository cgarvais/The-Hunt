let eggsFound = 0;
// let itemsFound = {};

$(function() {
	const scoreCounterText = $('.score-counter h2');

	$('body').on('click', '.egg.not-found', updateScore);

	function updateScore() {
		$this = $(this);
		$this.removeClass('not-found').addClass('found');
		eggsFound += 1;
		scoreCounterText.text(`Eggs Found: ${eggsFound}`)
	}
});

