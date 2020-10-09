const callPeewee = {};
callPeewee.$pKey = $('div.pKey');

callPeewee.init = function () {
	// event handler for clicking on any Pee-Wee key
	callPeewee.$pKey.on('click', function () {
		const $this = $(this);
		const currentClip = $this.find('audio')[0];

		// play audio
		currentClip.play();

		// transforms button on play
		$this.addClass('clipPlay');

		// class removed when mouse moves away
		$this.on('mouseup mouseout', function () {
			$this.removeClass('clipPlay');
		});
	});

	// to accept keyboard number inputs
	$(document).on('keydown', function (e) {
		let keyNumber = e.key;
		keyNumber = parseInt(keyNumber);
		let currentClip = $('#' + keyNumber)[0];
		let currentImg = $('#img' + keyNumber);

		// play audio
		currentClip.play();

		// add class
		currentImg.addClass('clipPlay');

		// remove class when number button released
		$(document).on('keyup', function () {
			currentImg.removeClass('clipPlay');
		});
	});
};

$(function () {
	callPeewee.init();
});
