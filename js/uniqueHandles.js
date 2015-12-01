var rawHandles = [ '@jaltma',
  '@sama',
  '@jaltma',
  '@sama',
  '@TechCrunch',
  '@paultoo',
  '@KatManalac',
  '@ilikevests',
  '@gdb',
  '@justinkan',
  '@reddit',
  '@paulg',
  '@paulg',
  '@adamdangelo',
  '@mwseibel',
  '@FortuneMagazine',
  '@GovMaryFallin',
  '@paulg',
  '@GovMaryFallin',
  '@dansitu',
  '@paultoo',
  '@paulg',
  '@sama',
  '@rabois',
  '@paulg',
  '@moskov',
  '@liseman' ];

//create a list of unique handles
function uniq(a) {
	var seen = {};
	return a.filter(function(item) {
		return seen.hasOwnProperty(item) ? false : (seen[item] = true);
	});
}

console.log(uniq(rawHandles))