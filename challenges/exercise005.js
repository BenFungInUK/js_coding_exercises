const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error("nums is required");
	if (n === undefined) throw new Error("n is required");
	let index = nums.indexOf(n);
	return index === -1 ?
		null : index + 1 > nums.length - 1 ?
			null : nums[index + 1];
};

const count1sand0s = str => {
	if (str === undefined) throw new Error("str is required");
	return { "1": str.split("1").length - 1, "0": str.split("0").length - 1 };
};

const reverseNumber = n => {
	if (n === undefined) throw new Error("n is required");
	let reverseNum = 0;
	while (n) {
		reverseNum = (reverseNum * 10) + (n % 10);
		n = Math.floor(n / 10);
	}
	return reverseNum;
};

const sumArrays = arrs => {
	if (arrs === undefined) throw new Error("arrs is required");
	return arrs.flat().reduce((previous, current) => previous + current);
};

const arrShift = arr => {
	if (arr === undefined) throw new Error("arr is required");
	return arr.map((item, index) => {
		return index === 0 ?
			arr[arr.length - 1] : index === arr.length - 1 ?
				arr[0] : item;
	})
};

const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error("haystack is required");
	if (searchTerm === undefined) throw new Error("searchTerm is required");
	let upperCaseSearch = searchTerm.toUpperCase();
	for (let key in haystack) {
		if (typeof haystack[key] === "string")
			if (haystack[key].toUpperCase().includes(upperCaseSearch)) return true;
	}
	return false;
};

const getWordFrequencies = str => {
	if (str === undefined) throw new Error("str is required");
	let splitStr = str.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").split(" ");
	let key = [...new Set(splitStr)];
	let obj = {};
	key.forEach((item) => {
		obj[item] = splitStr.filter((strItem) => item.toUpperCase() === strItem.toUpperCase()).length;
	});
	return obj;
};

module.exports = {
	findNextNumber,
	count1sand0s,
	reverseNumber,
	sumArrays,
	arrShift,
	findNeedle,
	getWordFrequencies
};
