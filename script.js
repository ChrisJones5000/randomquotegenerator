/*Generate Quote and Display*/

document.getElementById("btn-quote").addEventListener("click", displayQuote);

function slideQuote() {

	$(document).ready(function(){

		$("#quote-text").stop(true, true).hide().slideDown(1000);
		$("#author-text").stop(true, true).hide().delay(1500).fadeIn(1000);
		
	});

}

function displayQuote() {

	var quote = generateQuote();

	document.getElementById("quote-text").innerHTML = quote[0];
	document.getElementById("author-text").innerHTML = quote[1];

	slideQuote();

}

function generateQuote() {

	var index = randomGenerator();

	var quote = [["Get your facts first, then you can distort them as you please.", "- Mark Twain"], ["Even Napoleon had his Watergate.", "- Yogi Berra"], ["Go to Heaven for the climate, Hell for the company.", "- Mark Twain"], ["Roses are red, violets are blue, I'm a schizophrenic, and so am I.", "- Oscar Levant"], ["When we talk to God, we're praying. When God talks to us, we're schizophrenic.", "- Jane Wagner"], ["Weather forecast for tonight: dark.", "- George Carlin"], ["No man has a good enough memory to be a successful liar.", "- Abraham Lincoln"], ["What's another word for Thesaurus?", "- Steven Wright"], ["It's not that I'm so smart, it's that I stay with problems longer.", "- Albert Einstein"], ["Coincidence is God's way of remaining anonymous", "- Albert Einstein"], ["Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.", "- Steve Jobs"], ["My fake plants died because I did not pretend to water them.", "- Mitch Hedberg"], ["All my life, I always wanted to be somebody. Now I see that I should have been more specific.", "- Jane Wagner"]];

	return quote[index];

}

function randomGenerator() {

	var randomNum = Math.floor(Math.random() * 13);
	return randomNum;

}

/*End Generate Quote and Display*/

/*Tweet Quote*/

document.getElementById("tweet-btn").addEventListener("click", tweetQuote);

function tweetQuote() {

	$(document).ready(function(){

		var phrase = document.getElementById("quote-text").innerHTML;
		var encodedPhrase = encodeURIComponent(phrase);
		var url = "https://twitter.com/intent/tweet?text=" + encodedPhrase;

		window.open(url, 'tweetPage', 'resizable, scrollbars, height=550, width=500');

	});

}

/*End Tweet Quote*/


