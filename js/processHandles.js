var rawTweets = []

//stores RT and tweets
function findHandles(arr) {
	var tweetHandles = [];
	for (var i = 0; i < arr.length; i++) {
		//push twitter handles to array
		if (arr[i].text.match(/RT +@\w+/g)) {
			tweetHandles = tweetHandles.concat(arr[i].text.match(/RT +@\w+/g))
		} else if (arr[i].text.match(/@\w+/g)) {
			tweetHandles = tweetHandles.concat(arr[i].text.match(/@\w+/g))
		}

	};

	return tweetHandles;
}

console.log(findHandles(rawTweets))

//get rid of 'RT ' and replace with root.inluencer.rt.
//if @handle is a vc on the list of 20 replace with root.vc.
