// @file fiimain.js

$(document).ready(function() {
	
	var container = $("#serie-container");
	var mana = new FiiManager(container);
	
	// Create first 30 rows of fiis
	mana.createRows(30);
	
	// Endless scroll down
	$(window).scroll(function() {
		if ($(window).scrollTop() + 2 >= $(document).height() - $(window).height()){
			mana.createRows(1);
		}
	});
});