var cheetorize = (function () {

	var laughIdentifier = new RegExp("^((rs|sr)(r|s)*)|(k|K){3,}|(h|H|(a|A|e|E)){4,}$");

	var laughSymbols = [ "a", "e", "i", "o", "u", "h", "s"];

	function setCharAt(str, index, chr) {
		return str.substr(0,index) + chr + str.substr(index+1);
	}

	function shouldAddFakeTypo(current, next) {
		return (current.length + next.length) % 2 == 0;
	}

	function cheetorize(original) {
		var words = original.split(' ');

		for (var i = 0; i < words.length; i++) {
			if (shouldAddFakeTypo(words[i], words[(i+1) % words.length]))
				words[i] = addFakeTypoTo(words[i]);

			if(isLaugh(words[i]))
				words[i] = laughAsCheeto(words[i].length * 2);
		}

		return words.join(' ');
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
		if (word.length < 3 || isLaugh(word))
			return word;

		if (word.length % 2 != 0) {
			var mid = (word.length-1) / 2;   // js doesn't round int division.
			var tmp = word[mid+1];
			word = setCharAt(word, mid+1, word[mid-1]);
			word = setCharAt(word, mid-1, tmp);
		} else {
			var mid = word.length / 2;
			var tmp = word[mid+1];
			word = setCharAt(word, mid+1, word[mid]);
			word = setCharAt(word, mid, tmp);
		}

		return word;
	}

	function isLaugh(word){
		return laughIdentifier.test(word);
	}

	function convert(source, target) {
		var original = document.getElementById(source);
		var cheetorized = document.getElementById(target);

		cheetorized.value = cheetorize(original.value);
	}

	function tweet(source) {
		var baseUrl = "https://twitter.com/home/?status=";
		var text = document.getElementById(source).value;
		text += " (via www.cheetorize.me)"

		window.open(baseUrl + encodeURI(text), '_blank');
	}

	return {
		convert: convert,
		cheetorize: cheetorize,
		tweet: tweet
	}
}());
