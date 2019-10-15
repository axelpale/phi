/**
 * Something
 * 
 * Requires: JQuery
 * 
 * Constructor
 * @param parent_element A element where new rows are created
 */
function FiiManager(parent_element) {
	
	this.parent_ = parent_element;
	this.counter_ = -6;
}

/**
 * Append a number of rows at the end of parent element
 */
FiiManager.prototype.createRows = function(count) {
	if (count < 1) return;
	
	for (var i = 0; i < count; i++) {
		var new_row = generateFiiRow(this.counter_);
		this.parent_.append(new_row);
		this.counter_++;

	}
}