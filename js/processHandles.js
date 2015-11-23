var rawTweets = []


function findHandles(arr) {
	var tweetText = [];
	for (var i = 0; i < arr.length; i++) {
		//push twitter handles to array
		if (arr[i].text.match(/@\w+/g)) {
			tweetText = tweetText.concat(arr[i].text.match(/@\w+/g))
		};

	};
	return tweetText;
}

console.log(findHandles(rawTweets))