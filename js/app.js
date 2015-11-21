var Twit = require('twit');
var T = new Twit({
	  consumer_key: process.env.TWITTER_CONSUMER_KEY,
	  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
	  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
	});

var params = {
  count: 200,
  exclude_replies: true,
  user_id: 1605,
  screen_name:'sama'
}

var allCleanedData = [];

function getTweetsAfter(maxIdValue){
  var params = {
    count: 200,
    max_id: maxIdValue,
    exclude_replies: true,
    user_id: 1605,
    screen_name:'sama'
  }

  T.get('statuses/user_timeline', params, function(err, data, response) {
    
    try {
      // console.log(data)
      if (allCleanedData.length <= 3200) {
        var cleanedData = data.map(function(tweetObj) {
          return {
            text: tweetObj.text,
            id: tweetObj.id
          }
        });

        //ADD TO ALLCLEANEDDATA
        allCleanedData = allCleanedData.concat(cleanedData);
        //GET THE RIGHT MAX ID VALUE
        maxIdValue = allCleanedData[allCleanedData.length-1].id
        getTweetsAfter(maxIdValue);
      }
      else {
        console.log(allCleanedData);
      }
  }
  catch (error) {
    console.log(allCleanedData);
  }

    

  });
  return
}

getTweetsAfter();


