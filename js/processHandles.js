var vcHandle = '@sama'

var rawTweets = [{
  text: 'RT @jaltma: @sama I think he does it in his head because he still barely knows how to use excel',
  id: 652951228364648400
}, {
  text: 'RT @jaltma: No matter how big the company, @sama still makes investment decisions based on a 60 second mental model with about 4 vaguely ac…',
  id: 652951220303216600
}, {
  text: 'SaaS businesses always have great margins, except in every specific instance',
  id: 652920462993784800
}, {
  text: 'RT @TechCrunch: Segment raises $27M for its “one API to rule them all” http://t.co/z6F5glO6as',
  id: 652600437200154600
}, {
  text: 'Tried to do an AMA about applying to YC and people pretty much just wanted to talk about YCR!',
  id: 652578572788371500
}, {
  text: 'Post of the week on HN: https://t.co/1tRe7lksFq',
  id: 652543325682044900
}, {
  text: 'I\'m doing an AMA on HN: https://t.co/hdCj0t50PJ',
  id: 652521999709827100
}, {
  text: 'Two great quotes from Harry Kroto: http://t.co/x3wehy3M4g http://t.co/Z1BzZ7GhK3',
  id: 652514798878371800
}, {
  text: 'I\'m going to do an AMA on HN tomorrow about applying to YC (and anything else). Will start around 9 am pacific time.',
  id: 652268218170536000
}, {
  text: 'insight from @paultoo: selling software is a bad biz. MSFT and ORCL were the last two good ones. build software but sell something else.',
  id: 652242405966483500
}, {
  text: 'Welcome Jared! http://t.co/J7tqhVFr3Z',
  id: 652223785660084200
}, {
  text: 'RT @KatManalac: .@ilikevests\' UI/UX talk is one of the best, most informative talks for startups I\'ve seen. See it 10/12 at Stanford https:…',
  id: 652170555156660200
}, {
  text: 'RT @gdb: Hint about what I\'m working on next: http://t.co/CdNEen8JOG.',
  id: 651830327380283400
}, {
  text: 'YC Research: http://t.co/fyi334xhJ0',
  id: 651826135232200700
}, {
  text: 'RT @justinkan: Amazing article about Steve\'s return as Reddit CEO. Definitely read to the last line. http://t.co/KdgSe5CFK1 http://t.co/J6u…',
  id: 651525164656558100
}, {
  text: 'RT @reddit: Don Knight, one of the defense attorneys for #RichardGlossip doing AMA LIVE NOW! http://t.co/Pazlsb2CNh',
  id: 651184996829425700
}, {
  text: 'RT @paulg: Richard Glossip\'s lawyer Don Knight is doing a Reddit AMA at 4:30 PT: http://t.co/WrgwIZYoCh',
  id: 651173213133627400
}, {
  text: 'Lesson from working with lots of startups: simple is always better.',
  id: 651091096357875700
}, {
  text: 'After my unit economics post, I get a lot of emails like "we\'re burning $1M a month and if we grow more we\'ll burn more. what should we do?"',
  id: 651085733915029500
}, {
  text: 'My talk at CS183C: https://t.co/BSeYJji886',
  id: 651085081302319100
}, {
  text: 'Sam: "what\'s your favorite toy?"\n@paulg\'s 3 yo: "Dad!"',
  id: 650781816320688100
}, {
  text: 'The number of engineers the mean startup can hire doesn\'t change much with up and down cycles. Landlords just make more/less money.',
  id: 650391147680927700
}, {
  text: 'The mobile interface method I like most for infrequently used services is chat.  Better than web or apps.',
  id: 650381458360504300
}, {
  text: 'Thought from @adamdangelo: it\'s important to have time to be bored, because that\'s when big ideas happen.',
  id: 650026634653732900
}, {
  text: 'A good thing about being around lots of startups: it makes you pretty unflappable.',
  id: 649730310339326000
}, {
  text: 'Excited by the number of VR companies apply to the next YC batch!',
  id: 649629576927182800
}, {
  text: '"Branded a nerd king, who\'s almost always spotted in a pair of shorts and hoodies..." ಠ_ಠ http://t.co/oQeV3BWwMQ',
  id: 649625288469381100
}, {
  text: 'RT @mwseibel: Can Y Combinator find its next \'unicorn\' in a hardware startup? via @FortuneMagazine http://t.co/1uGTOvtxnV',
  id: 649454876720652300
}, {
  text: 'Tried a service the scans my old meeting notebooks. The person that results in the most inches of notes per hour of meeting: Alan Kay.',
  id: 649340704401981400
}, {
  text: 'Surprising comment from a number of YC founders at lunch: they\'re all seeing engagement on Twitter going down',
  id: 649337054220841000
}, {
  text: 'RT @GovMaryFallin: I have issued a 37 day stay for Richard Glossip while the state addresses questions about its execution protocol http://…',
  id: 649330641247453200
}, {
  text: 'Richard Glossip And The End Of The Death Penalty: http://t.co/sfpnPj2UoE',
  id: 649285507407437800
}, {
  text: 'RT @paulg: .@GovMaryFallin I don\'t think you realize this is no ordinary execution. This mistake will become the thing you are best known f…',
  id: 649280416822661100
}, {
  text: 'Great post from @dansitu : https://t.co/deX8S1PBXd',
  id: 649269498248196100
}, {
  text: '"Cubs fans love being miserable" -YC GC dropping wisdom',
  id: 649071921292701700
}, {
  text: 'RT @paultoo: The surprise ending: WWIII starts with Twitter flame war between Putin and President Trump.',
  id: 649002879030681600
}, {
  text: 'RT @paulg: @sama http://t.co/ENIti7CPgW',
  id: 648739535140982800
}, {
  text: 'Now here is the interesting one: tech giants over the last 10 years.  1379% monster increase for AAPL! http://t.co/PQMgo01GCJ',
  id: 648720569651720200
}, {
  text: 'Tech giants over the last year: http://t.co/RNAw44bEbh',
  id: 648714476875702300
}, {
  text: 'I have a bottle of good bourbon for great days and a bottle of great bourbon for bad days. Tonight I\'m having some really delicious bourbon!',
  id: 648709035735158800
}, {
  text: 'RT @rabois: The economic platform of the future:http://t.co/88BXcvgtWE',
  id: 648700448682016800
}, {
  text: 'Just finished 7600 words of advice for startups.  I am...not a writer.  And very tired.',
  id: 648696669186342900
}, {
  text: '" \'capital punishment is arbitrary, racist and meted out to those without the resources to defend themselves.\' " http://t.co/eT8H9EsQeZ',
  id: 648644478295633900
}, {
  text: 'The Case of Richard Glossip: http://t.co/eT8H9EsQeZ',
  id: 648643733928341500
}, {
  text: 'Very few of the best startups I have been involved with could describe themselves as "the X for Y".',
  id: 648626792329166800
}, {
  text: 'Dear Trump: I don\'t think people making $25k or less a year feel like they should be saying "I win", even if you save them $1k in tax.',
  id: 648623997446307800
}, {
  text: 'RT @paulg: Are you a programmer looking for a job? No one knows better than Harj which are the best places to work: http://t.co/e5PkfhO44m',
  id: 648623859722158100
}, {
  text: 'BTW, I do think it can be a bubble even when everyone else says it\'s a bubble, especially when investors are investing other people\'s money.',
  id: 648598614047002600
}, {
  text: 'Can it be a bubble when startup investors universally agree it\'s a bubble?',
  id: 648579058456899600
}, {
  text: 'Housing policy I\'d actually like to see: tax policy that heavily favors living/owning over speculating/renting.',
  id: 648576472991469600
}, {
  text: 'Water on Mars! http://t.co/5shWWnONU5',
  id: 648549921524547600
}, {
  text: 'Airbnb and San Francisco: http://t.co/9p9ttfjs9q',
  id: 648548488318349300
}, {
  text: 'Is there evidence that taxing capital gains at a lower rate than ordinary income is a net benefit? Do people really just not invest their $?',
  id: 648259173679935500
}, {
  text: 'Asked to pass this on to @moskov: "Please tell Dustin his talk in your Stanford class was the most important career advice I ever got."',
  id: 648222291122253800
}, {
  text: 'The real risk in life is regret.',
  id: 647807127080140800
}, {
  text: 'Something I learned from both YC Pauls: think about how big a company could be, not why it might fail. Then convince the founders of that.',
  id: 647584466907476000
}, {
  text: '"VP Product is the toughest executive search.  That\'s called...a founder."',
  id: 647530430619516900
}, {
  text: 'Here is an easy way to register to vote: http://t.co/4N8MVOhTPa',
  id: 647491900727885800
}, {
  text: 'the airbnb law. wow :( https://t.co/oAtGUGgwyw',
  id: 647487585086926800
}, {
  text: 'In startup investing, always think twice if something feels really cheap. Usually the best investments feel expensive.',
  id: 647429198563307500
}, {
  text: 'Hardware at YC with @liseman http://t.co/RhtaPLauxG',
  id: 647178991426601000
}]

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


