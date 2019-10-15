/**
 * @class FiiView
 */

/**
 * Extend Math
 */
Math.SQRT5 = Math.sqrt(5);
Math.FII = 0.5 + Math.SQRT5 / 2;
Math.IFII = 1 - Math.FII;

/**
 * Calculates analytical value of a Fibonacci number.
 * @source http://en.wikipedia.org/wiki/Fibonacci_number#Matrix_form
 * @param n Position in Fibonacci series
 */
Math.fibonacci = function(n)
{
	n = typeof(n) != 'undefined' ? n : 1; // Default to 1
	
	var abs_n = Math.abs(n); // Position may be negative
	
	var raw_decimal = (Math.pow(Math.FII, abs_n) - Math.pow(Math.IFII, abs_n)) / Math.SQRT5;
	
	if (n < 0) {
		raw_decimal = raw_decimal * -1;
	}
	
	return Math.round(raw_decimal);
}

// Analytical value of a Fii raised to a specific power
Math.fii = function(power)
{
	power = typeof(power) != 'undefined' ? power : 1;
	
	return Math.pow(Math.FII, power);
}


function generateFiiRow(n)
{
	
	// Create DOM-element
	var element = document.createElement('tr');
	element.id = 'pos' + n;
	element.className = "row";
	element.innerHTML = "" + 
		
		"<td class='fibonacci'>" + 
		"F<span class='sub'>" + n + "</span> = " + Math.fibonacci(n) +
		"</td>" +
		
		"<td class='fii'>" +
		"&#966;<span class='super'>" + n + "</span> = " +
		Math.fii(n).toFixed(3) + "</td>" +
		
		"<td class='fii'>" +
		"&#966;<span class='super'>" + n + "/2</span> = " +
		Math.fii(n/2).toFixed(3) + "</td>" +
		
		"<td class='fii'>" +
		"&#966;<span class='super'>" + n + "/3</span> = " +
		Math.fii(n/3).toFixed(3) + "</td>" +
		
		"<td class='fii'>" +
		"&#966;<span class='super'>" + n + "/4</span> = " +
		Math.fii(n/4).toFixed(3) + "</td>" +
		
		"";
	
	return element;
}

