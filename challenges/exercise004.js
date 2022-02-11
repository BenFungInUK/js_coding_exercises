function findSmallNums(nums) {
	if (!nums) throw new Error("nums is required");
	if (nums.length === 0) return [];
	return nums.filter((item) => item < 1);
}

function findNamesBeginningWith(names, char) {
	if (!names) throw new Error("names is required");
	if (!char) throw new Error("char is required");
	return names.filter((item) => item[0] === char);
}

function findVerbs(words) {
	if (!words) throw new Error("words is required");
	return words.filter((item) => item.substring(0, 3) === "to ");
}

function getIntegers(nums) {
	if (!nums) throw new Error("nums is required");
	return nums.filter((item) => item * 10 % 10 === 0);
}

function getCities(users) {
	if (!users) throw new Error("users is required");
	return users.map((item) => item.data.city.displayName);
}

function getSquareRoots(nums) {
	if (!nums) throw new Error("nums is required");
	return nums.map((item) => Math.round(Math.sqrt(item) * 100) / 100);
}

function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error("sentences is required");
	if (!str) throw new Error("str is required");
	let upperCaseStr = str.toUpperCase()
	return sentences.filter((item) => item.toUpperCase().includes(upperCaseStr));
}

function getLongestSides(triangles) {
	if (!triangles) throw new Error("triangles is required");
	return triangles.map((item) => {
		return Math.max(...item);
	});
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
