var vcHandle = ''

vcList = ['@sama', '@kevinrose', '@pmarca', '@paulg', '@peterfenton', '@davemcclure', '@eileentso', '@reidhoffman', '@joshk', '@m2jr', '@johndoerr', '@fredwilson', '@davidsze', '@sacca', '@bfeld', '@vkhosla', '@davidlee']

var uniqueMentionsList = []

var cleanFlaredata = {
  "name": 'root.vc.'+vcHandle,
  "imports": []
};


function formatData(arr) {
  for (var i = 0; i < arr.length; i++) {
    // var found = false;
    var found = vcList.indexOf(arr[i]) > -1
    if(found === false && arr[i] !== vcHandle) {
      cleanFlaredata.imports.push('root.influencer.'+arr[i])
    } else if (found === true && arr[i] !==vcHandle) {
      cleanFlaredata.imports.push('root.vc.'+arr[i])
    }
  }
return cleanFlaredata;}

// VC IMPORTS
var vcNode = formatData(uniqueMentionsList))
console.log(formatData(uniqueMentionsList)))

// CREATE NODES FOR INFLUENCERS



