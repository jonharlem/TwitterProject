var vcHandle = '';

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

var uniqueMentionsList = [];

var cleanFlaredata = [{
  "name": 'twitter/vc/' + vcHandle,
  "imports": []
}];

function formatData(arr) {
  for (var i = 0; i < arr.length; i++) {
    // var found = false;
    var found = vcList.indexOf(arr[i]) > -1
    if (found === false && arr[i] !== vcHandle) {
      cleanFlaredata[0].imports.push('twitter/influencer/' + arr[i])
    } else if (found === true && arr[i] !== vcHandle) {
      cleanFlaredata[0].imports.push('twitter/vc/' + arr[i])
    }
  }
  return cleanFlaredata;
}

// VC IMPORTS
var cleanFlaredata = formatData(uniqueMentionsList)

// console.log(cleanFlaredata[0].imports[1])

// // CREATE NODES FOR INFLUENCERS
function influencerNodes(cleanFlaredata) {
  for (var i = 0; i < cleanFlaredata[0].imports.length; i++) {
    var influencerObj = {
      "name": cleanFlaredata[0].imports[i],
      "imports": []
    };
    cleanFlaredata.push(influencerObj)
  };
  console.log(cleanFlaredata);
  return
}

console.log(influencerNodes(cleanFlaredata))