var cheetorize = (function () {

    var laughSymbols = [ "a", "e", "i", "o", "u", "h", "s"];

    function setCharAt(str, index, chr) {
        return str.substr(0,index) + chr + str.substr(index+1);
    }

    function cheetorize(original) {
		return addFakeTypoTo(original);
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

	function addFakeTypoTo(word) {
		if (word.length < 3)
			return word;

        if (word.length % 2 != 0) {
            var mid = (word.length-1) / 2;
            var tmp = word[mid+1];
            word = setCharAt(word, mid+1, word[mid-1]);
            word = setCharAt(word, mid-1, tmp);
        }

		return word;
	}

    function convert(source, target) {
        var original = document.getElementById(source);
        var cheetorized = document.getElementById(target);

        cheetorized.value = cheetorize(original.value);
    }

    return {
        convert: convert,
		cheetorize: cheetorize
    }
}());
