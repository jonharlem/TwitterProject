var rawHandles = [];

//create a list of unique handles
function uniq(a) {
	var seen = {};
	return a.filter(function(item) {
		return seen.hasOwnProperty(item) ? false : (seen[item] = true);
	});
}

console.log(uniq(rawHandles))