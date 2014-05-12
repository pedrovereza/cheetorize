var cheetorize = (function () {

    var laughSymbols = [ "a", "e", "i", "o", "u", "h", "s"];

    function cheetorize(original) {
	    var length = Math.floor(Math.random() * 140);

	    return  laughAsCheeto(length);
    }

    function laughAsCheeto(laughLength){
	    var laugh = "";

	    for (var i = 0; i < laughLength; i++){
		    var symbol  = laughSymbols[Math.floor(Math.random() * laughSymbols.length)];

            if (Math.random() > 0.5) {
                symbol = symbol.toUpperCase();
            }

		    laugh += symbol;
	    }

	    return laugh;
    }

    function convert(source, target) {
        var original = document.getElementById(source);
        var cheetorized = document.getElementById(target);

        cheetorized.value = cheetorize(original.value);
    }

    return {
        convert: convert
    }
}());
