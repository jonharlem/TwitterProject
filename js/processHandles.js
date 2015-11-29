var vcHandle = '@sama'

var rawTweets = []

var vcList = [{
  "handle": "@sama",
  "name": "Sam Altman"
}, {
  "handle": "@paulg",
  "name": "Paul Graham"
}, {
  "handle": "@kevinrose",
  "name": "Kevin Rose"
}]

//create a list of unique handles
function uniq(arr) {
  var seen = {};
  return arr.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

//stores RT and tweets
function findHandles(arr) {
  var tweetHandles = [];
  for (var i = 0; i < arr.length; i++) {
    //push twitter handles to array
    //to classify retweets in future versions us if/else (arr[i].text.match(/RT +@\w+/g)) {tweetHandles = tweetHandles.concat(arr[i].text.match(/RT +@\w+/g))
    if (arr[i].text.match(/@\w+/g)) {
      tweetHandles = tweetHandles.concat(arr[i].text.match(/@\w+/g))
    }
  };
  //returns unique handle list
  return uniq(tweetHandles);
}

//list of unique mentions
uniqueMentionsList = findHandles(rawTweets)


//properly format json file
for (var i = 0; i < uniqueMentionsList.length; i++) {
  var flaredata = []
    //only add if mention is NOT the vc him/herself
  if (uniqueMentionsList[i] !== vcHandle) {
    var obj = {
      "name": vcHandle,
      "imports": []
    };


  }
};