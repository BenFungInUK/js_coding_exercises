function getSquares(nums) {
	if (nums === undefined) throw new Error("nums is required");
	if (nums.length === 0) return [];
	return nums.map((item) => Math.pow(item, 2));
}

function camelCaseWords(words) {
	if (words === undefined) throw new Error("words is required");
	return words.flatMap((item, index) => {
		if (index === 0) return item;
		return item[0].toUpperCase() + item.slice(1);
	}).join("");
}

function getTotalSubjects(people) {
	if (people === undefined) throw new Error("people is required");
	return people.reduce((previous, current, index) => {
		if (index === 1)
			return previous.subjects.length + current.subjects.length;
		else
			return previous + current.subjects.length;
	});
}

function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error("menu is required");
	if (!ingredient) throw new Error("ingredient is required");
	return menu.filter((item) => item.ingredients.includes(ingredient)).length > 0 ? true : false;
}

function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error("arr1 is required");
	if (arr2 === undefined) throw new Error("arr2 is required");
	return [...new Set(arr1)].filter((item) => [...new Set(arr2)].includes(item)).sort();
}

module.exports = {
	getSquares,
	camelCaseWords,
	getTotalSubjects,
	checkIngredients,
	duplicateNumbers
};
