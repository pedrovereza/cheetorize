var laughSymbols = [ "a", "e", "i", "o", "u", "h"];


function cheetorize(original) {
	var length = Math.floor(Math.random() * 140);
	var output = "";


	for (var i = 0; i < length; i++){
		var symbol  = laughSymbols[Math.floor(Math.random() * laughSymbols.length)];

		if (Math.random() > 0.5) {
			symbol = symbol.toUpperCase();
		}

		output += symbol;
	}

	return output;
}
