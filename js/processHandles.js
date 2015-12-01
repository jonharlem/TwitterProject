var vcHandle = ''

vcList = [ '@sama',
  '@kevinrose',
  '@pmarca',
  '@paulg',
  '@peterfenton',
  '@davemcclure',
  '@eileentso',
  '@reidhoffman',
  '@joshk',
  '@m2jr',
  '@johndoerr',
  '@fredwilson',
  '@davidsze',
  '@sacca',
  '@bfeld',
  '@vkhosla',
  '@davidlee',
  '@jason',
  '@guykawasaki',
  '@jeffnolan',
  '@bhorowitz',
  '@kentgoldman',
  '@mokoyfman',
  '@adventurista',
  '@robgo',
  '@chrisfralic',
  '@andrewparker',
  '@bijan',
  '@jeremyl',
  '@larryvc',
  '@mikeeisenberg',
  '@dba',
  '@christine',
  '@jasonmendelson',
  '@bussgang',
  '@jeremysliew',
  '@sether',
  '@HLMorgan',
  '@msuster',
  '@robhayes',
  '@FlybridgeCap',
  '@santopoliti',
  '@standers',
  '@yuris',
  '@gralston',
  '@mwseibel',
  '@KatManalac',
  '@kevinwtung',
  '@asenkut',
  '@ttunguz',
  '@johnolilly',
  '@ajay_bcv',
  '@balajis',
  '@georgezachary',
  '@ethankurz',
  '@davidbeisel',
  '@pcflanagan',
  '@richminer',
  '@kraneland',
  '@briansin',
  '@SuthaKamal',
  '@jeff_jordan',
  '@chamath',
  '@runvc',
  '@davemorin',
  '@nivi',
  '@GigiLevy',
  '@satyap',
  '@stan_chudnovsky',
  '@jberrebi',
  '@cyantist',
  '@christine_tsai',
  '@fabricegrinda',
  '@TimDraper',
  '@TalmadgeOrion',
  '@davidcohen',
  '@KevinColleran',
  '@mattocko',
  '@davetisch',
  '@tydanco',
  '@paultoo',
  '@joshu',
  '@alexisohanian',
  '@garrytan',
  '@paulsingh',
  '@joecaruso2020',
  '@bling0',
  '@paigecraig',
  '@mkapor',
  '@tferriss',
  '@eladgil',
  '@gilpenchina',
  '@JoshuaBaer',
  '@andrewchen',
  '@Bandrew',
  '@brockpierce',
  '@tgm',
  '@davidsrose',
  '@mjones',
  '@photomatt' ]


var rawTweets = [];




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
var uniqueMentionsList = findHandles(rawTweets)

// console.log(uniqueMentionsList)



function findVC(arr) {
  // console.log(uniqueMentionsList)
  var mentionedVC = [];
  
  for (var i = 0; i < arr.length; i++) {
    var found = vcList.indexOf(arr[i]) > -1;
    if (found === true && arr[i] !== vcHandle) {
      mentionedVC.push(arr[i])
    }
  }
  return mentionedVC;
}

console.log(findVC(uniqueMentionsList))
