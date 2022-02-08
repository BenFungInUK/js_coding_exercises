const {
	sumDigits,
	createRange,
	getScreentimeAlertList,
	hexToRGB,
	findWinner
} = require("../challenges/exercise007");

describe("sumMultiples", () => {
	test("it throws an error if no parameter is passed", () => {
		expect(() => { sumDigits() }).toThrow("n is required");
	});
	test("it throws an error if not passed an array", () => {
		expect(() => { sumDigits(0.5) }).toThrow("An positive integer is required");
		expect(() => { sumDigits(4.5) }).toThrow("An positive integer is required");
		expect(() => { sumDigits(-1) }).toThrow("An positive integer is required");
	});
	test("returns the sum of all its digits", () => {
		expect(sumDigits(123)).toBe(6);
		expect(sumDigits(1234)).toBe(10);
		expect(sumDigits(12345)).toBe(15);
		expect(sumDigits(12)).toBe(3);
		expect(sumDigits(0)).toBe(0);
	});
});

describe("createRange", () => {
	test("it throws an error if no parameter is passed", () => {
		expect(() => { createRange() }).toThrow("start is required");
	});
	test("it throws an error if no end parameter is passed", () => {
		expect(() => { createRange(1) }).toThrow("end is required");
	});
	test("it throws an error step is smaller than/ equals to zero", () => {
		expect(() => { createRange(1, 3, -1) }).toThrow("step should be greater than 0");
		expect(() => { createRange(1, 3, 0) }).toThrow("step should be greater than 0");
	});
	test("returns an array of numbers between start and end", () => {
		expect(createRange(1, 11, 2)).toEqual([1, 3, 5, 7, 9, 11]);
		expect(createRange(2, 11, 3)).toEqual([2, 5, 8, 11]);
		expect(createRange(3, 11, 4)).toEqual([3, 7, 11]);
		expect(createRange(4, 11, 5)).toEqual([4, 9]);
		expect(createRange(5, 11)).toEqual([5, 6, 7, 8, 9, 10, 11]);
	});
	test("returns only start number if start + step is greater than end/ start is equal to end", () => {
		expect(createRange(1, 11, 12)).toEqual([1]);
		expect(createRange(10, 11, 2)).toEqual([10]);
		expect(createRange(11, 11)).toEqual([11]);
	});
	test("test it is acceptable with negative number and float number", () => {
		expect(createRange(-11, 11, 4)).toEqual([-11, -7, -3, 1, 5, 9]);
		expect(createRange(-11, 0, 2.5)).toEqual([-11, -8.5, -6, -3.5, -1]);
		expect(createRange(4.7, 5.3, 0.2)).toEqual([4.7, 4.9, 5.1, 5.3]);
	});
});

describe("getScreentimeAlertList", () => {
	let users = [
		{
			username: "beth_1234",
			name: "Beth Smith",
			screenTime: [
				{ date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },	//96
				{ date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },	//127
				{ date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } }, //46
				{ date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } }, //127
			]
		},
		{
			username: "sam_j_1989",
			name: "Sam Jones",
			screenTime: [
				{ date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } }, //10
				{ date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } }, //16
				{ date: "2019-06-14", usage: { mapMyRun: 100, whatsApp: 0, facebook: 0, safari: 31 } }, //131
			]
		},
		{
			username: "ben_2345",
			name: "Ben Fung",
			screenTime: [
				{ date: "2019-05-01", usage: { mapMyRun: 0, whatsApp: 50, facebook: 40, safari: 10 } }, //100
				{ date: "2019-05-04", usage: { mapMyRun: 0, whatsApp: 300, facebook: 0, safari: 16 } }, //316
				{ date: "2019-06-14", usage: { mapMyRun: 100, whatsApp: 0, facebook: 0, safari: 31 } }, //131
			]
		},
	]
	test("it throws an error if no parameter is passed", () => {
		expect(() => { getScreentimeAlertList() }).toThrow("users is required");
	});
	test("it throws an error if no date parameter is passed", () => {
		expect(() => { getScreentimeAlertList([]) }).toThrow("date is required");
	});
	test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
		expect(getScreentimeAlertList(users, "2019-05-01")).toEqual([]);
		expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234"]);
		expect(getScreentimeAlertList(users, "2019-05-03")).toEqual([]);
		expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234", "ben_2345"]);
		expect(getScreentimeAlertList(users, "2019-06-14")).toEqual(["sam_j_1989", "ben_2345"]);
		expect(getScreentimeAlertList(users, "2022-01-01")).toEqual([]);
		expect(getScreentimeAlertList([], "2022-01-01")).toEqual([]);
	});
	test("returns an empty array if users is empty", () => {
		expect(getScreentimeAlertList([], "2022-01-01")).toEqual([]);
	});
});

describe("hexToRGB", () => {
	test("it throws an error if no parameter is passed", () => {
		expect(() => { hexToRGB() }).toThrow("hexStr is required");
	});
	test("convert each hexadecimal value for R, G and B into its decimal equivalent", () => {
		expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
		expect(hexToRGB("#ABCDEF")).toBe("rgb(171,205,239)");
		expect(hexToRGB("#32FBC8")).toBe("rgb(50,251,200)");
		expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
	});
});

describe("findWinner", () => {
	test("it throws an error if no parameter is passed", () => {
		expect(() => { findWinner() }).toThrow("board is required");
	});
	test("Return X as winner", () => {
		const boardX0 = [
			["X", "X", "X"],
			["0", null, "0"],
			["X", null, "0"]
		];
		const boardX1 = [
			["X", "0", null],
			["X", "X", "X"],
			["0", null, "0"]
		];
		const boardX2 = [
			["X", "0", null],
			["0", "0", "X"],
			["X", "X", "X"]
		];
		const boardX3 = [
			["X", "0", null],
			["X", "0", "X"],
			["X", null, "0"]
		];
		const boardX4 = [
			["X", "X", null],
			["0", "X", "X"],
			["0", "X", "0"]
		];
		const boardX5 = [
			["X", "0", "X"],
			["X", null, "X"],
			["0", null, "X"]
		];
		const boardX6 = [
			["X", "0", null],
			["0", "X", "X"],
			["0", null, "X"]
		];
		const boardX7 = [
			["X", "0", "X"],
			["0", "X", "X"],
			["X", null, "0"]
		];
		expect(findWinner(boardX0)).toBe("X");
		expect(findWinner(boardX1)).toBe("X");
		expect(findWinner(boardX2)).toBe("X");
		expect(findWinner(boardX3)).toBe("X");
		expect(findWinner(boardX4)).toBe("X");
		expect(findWinner(boardX5)).toBe("X");
		expect(findWinner(boardX6)).toBe("X");
		expect(findWinner(boardX7)).toBe("X");
	});
	test("Return 0 as winner", () => {
		const board0 = [
			["X", "0", null],
			["0", null, "0"],
			["0", "0", "0"]
		]
		expect(findWinner(board0)).toBe("0");
	});
	test("Return null as no winner", () => {
		const boardNull = [
			["X", "0", null],
			["X", null, "0"],
			[null, null, "0"]
		]
		expect(findWinner(boardNull)).toBe(null);
	});
});