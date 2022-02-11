function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word[0].toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0] + '.' + lastName[0];
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.round(originalPrice * (1 + vatRate / 100) * 100) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return Math.round(originalPrice * (1 - reduction / 100) * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length % 2 === 1)
		return str.substring(str.length/2, str.length/2 + 1);
	else
		return str.substring(str.length/2 - 1, str.length/2 + 1);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
	return [...word].reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map((item) => {
		return [...item].reverse().join("");
	});
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter((item) => item.type === "Linux").length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  return Math.round((scores.reduce((previous, current) => previous + current, 0)/scores.length) * 100) / 100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
	let result = '';
  if (n % 3 === 0) 
		result += "fizz";
	if (n % 5 === 0)
		result += "buzz";
	
	return result.length === 0 ? n : result
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
