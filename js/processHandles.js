var vcHandle = ''

var rawTweets = []

// var vcList = [{
//   "handle": "@sama",
//   "name": "Sam Altman"
// }, {
//   "handle": "@paulg",
//   "name": "Paul Graham"
// }, {
//   "handle": "@kevinrose",
//   "name": "Kevin Rose"
// }]

//create a list of unique handles
function uniq(arr) {
  var seen = {};
  return arr.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
};

// function findHandles(arr) {
//   var tweetHandles = [];
//   for (var i = 0; i < arr.length; i++) {
//     //push twitter handles to array
//     if (arr[i].text.match(/RT +@\w+/g)) {
//       tweetHandles = tweetHandles.concat(arr[i].text.match(/RT +@\w+/g))
//     } else if (arr[i].text.match(/@\w+/g)) {
//       tweetHandles = tweetHandles.concat(arr[i].text.match(/@\w+/g))
//     }

//   };

//   return tweetHandles;

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
// var uniqueMentionsList = findHandles(rawTweets)

console.log(findHandles(rawTweets))