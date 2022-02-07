function findSmallNums(nums) {
	if (!nums) throw new Error("nums is required");
	if (nums.length === 0) return [];
	var arr = []
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] < 1) arr.push(nums[i]);
	}
	return arr;
}

function findNamesBeginningWith(names, char) {
	if (!names) throw new Error("names is required");
	if (!char) throw new Error("char is required");
	var arr = []
	for (var i = 0; i < names.length; i++) {
		if (names[i][0] === char) arr.push(names[i]);
	}
	return arr;
}

function findVerbs(words) {
	if (!words) throw new Error("words is required");
	var arr = []
	for (var i = 0; i < words.length; i++) {
		if (words[i].substring(0, 3) === "to ") arr.push(words[i]);
	}
	return arr;
}

function getIntegers(nums) {
	if (!nums) throw new Error("nums is required");
	var arr = []
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] * 10 % 10 === 0) arr.push(nums[i]);
	}
	return arr;
}

function getCities(users) {
	if (!users) throw new Error("users is required");
	var arr = []
	for (var i = 0; i < users.length; i++) {
		arr.push(users[i].data.city.displayName);
	}
	return arr;
}

function getSquareRoots(nums) {
	if (!nums) throw new Error("nums is required");
	var arr = []
	for (var i = 0; i < nums.length; i++) {
		arr.push(Math.round(Math.sqrt(nums[i]) * 100) / 100);
	}
	return arr;
}

function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error("sentences is required");
	if (!str) throw new Error("str is required");
	var arr = [], upperCaseStr = str.toUpperCase()
	for (var i = 0; i < sentences.length; i++) {
		var tempSentence = sentences[i].toUpperCase().split(" ");
		for (var j = 0; j < tempSentence.length; j++) {
			if (tempSentence[j].includes(upperCaseStr)) {
				arr.push(sentences[i]);
				break;
			}
		}
	}
	return arr;
}

function getLongestSides(triangles) {
	if (!triangles) throw new Error("triangles is required");
	var arr = []
	for (var i = 0; i < triangles.length; i++) {
		var maxSide = 0;
		for (var j = 0; j < triangles[i].length; j++) {
			if (triangles[i][j] > maxSide) {
				maxSide = triangles[i][j];
			}
		}
		arr.push(maxSide);
	}
	return arr;
}

module.exports = {
	findSmallNums,
	findNamesBeginningWith,
	findVerbs,
	getIntegers,
	getCities,
	getSquareRoots,
	findSentencesContaining,
	getLongestSides
};
