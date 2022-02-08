const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
	test("it throws an error if no parameter is passed", () => {
		expect(() => {sumMultiples()}).toThrow("arr is required");
	})
	test("it throws an error if not passed an array", () => {
		expect(() => {sumMultiples(0.5)}).toThrow("An array is required");
	})
  test("returns the sum of numbers which are a multiple of 3 in the array", () => {
    expect(sumMultiples([11, 3, 7, 8, 1, 9])).toBe(12);
  });
	test("returns the sum of numbers which are a multiple of 5 in the array", () => {
    expect(sumMultiples([5, 20, 7, 8, 1, 10])).toBe(35);
  });
	test("returns the sum of numbers which are a multiple of 3 or 5 in the array", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 9])).toBe(17);
  });
	test("returns empty array if there is no number which is a multiple of 3 or 5 in the array", () => {
    expect(sumMultiples([])).toEqual(0);
    expect(sumMultiples([4, 22, 301, 124, 67, 23, 41, 1])).toEqual(0);
  });
});

describe("isValidDNA", () => {
	test("it throws an error if no parameter is passed", () => {
		expect(() => {isValidDNA()}).toThrow("str is required");
	})
	test("returns true if DNA string contain characters C, G, T or A only", () => {
    expect(isValidDNA("CCTTTGGGAAAGACT")).toBe(true);
  });
	test("returns false if DNA string contain characters other than C, G, T or A", () => {
    expect(isValidDNA("CCTTTFGGGAAAGACT")).toBe(false);
		expect(isValidDNA("PQWE")).toBe(false);
  });
	test("returns false if DNA string is empty", () => {
		expect(isValidDNA("")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
	test("it throws an error if no parameter is passed", () => {
		expect(() => {getComplementaryDNA()}).toThrow("str is required");
	})
	test("returns the true if DNA string contain characters C, G, T or A only", () => {
    expect(getComplementaryDNA("CCTTTGGGAAAGACT")).toBe("GGAAACCCTTTCTGA");
		expect(getComplementaryDNA("T")).toBe("A");
		expect(getComplementaryDNA("C")).toBe("G");
		expect(getComplementaryDNA("A")).toBe("T");
		expect(getComplementaryDNA("G")).toBe("C");
  });
	test("returns empty if DNA string is empty", () => {
		expect(getComplementaryDNA("")).toBe("");
  });
});

describe("isItPrime", () => {
	test("it throws an error if no parameter is passed", () => {
		expect(() => {isItPrime()}).toThrow("n is required");
	})
	test("returns the true if n is prime number", () => {
    expect(isItPrime(2)).toBe(true);
		expect(isItPrime(3)).toBe(true);
		expect(isItPrime(5)).toBe(true);
		expect(isItPrime(7)).toBe(true);
		expect(isItPrime(13)).toBe(true);
  });
	test("returns the false if n is not prime number", () => {
    expect(isItPrime(0)).toBe(false);
		expect(isItPrime(1)).toBe(false);
		expect(isItPrime(4)).toBe(false);
		expect(isItPrime(6)).toBe(false);
		expect(isItPrime(57)).toBe(false);
  });
});

describe("createMatrix", () => {
	test("it throws an error if no parameter is passed", () => {
		expect(() => {createMatrix()}).toThrow("n is required");
	})
	test("returns an array of n arrays, each filled with n items.", () => {
    expect(createMatrix(1, "test1")).toEqual([["test1"]]);
		expect(createMatrix(2, "test2")).toEqual([["test2", "test2"], ["test2", "test2"]]);
		expect(createMatrix(3, "test3")).toEqual([["test3", "test3", "test3"], ["test3", "test3", "test3"], ["test3", "test3", "test3"]]);
  });
	test("returns empty array if n is 0", () => {
		expect(createMatrix(0, "test")).toEqual([]);
  });
	test("it throws an error if fill is empty", () => {
		expect(() => {createMatrix(2)}).toThrow("fill is required");
  });
});

describe("areWeCovered", () => {
	test("it throws an error if no parameter/staff is passed", () => {
		expect(() => {areWeCovered([], "Monday")}).toThrow("staff is required");
		expect(() => {areWeCovered()}).toThrow("staff is required");
	})
	test("it throws an error if no parameter is passed", () => {
		expect(() => {areWeCovered([{ name: "Sally" }])}).toThrow("day is required");
	})
	test("returns true if there are at least 3 staff members on a day.", () => {
		var staff = [
			{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
			{ name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
			{ name: "Peter", rota: ["Saturday", "Friday", "Tuesday", "Wednesday"] },
			{ name: "Ben", rota: ["Friday", "Tuesday"] },
		];
    expect(areWeCovered(staff, "Monday")).toBe(false);
		expect(areWeCovered(staff, "Tuesday")).toBe(true);
		expect(areWeCovered(staff, "Wednesday")).toBe(false);
		expect(areWeCovered(staff, "Thursday")).toBe(false);
		expect(areWeCovered(staff, "Friday")).toBe(true);
		expect(areWeCovered(staff, "Saturday")).toBe(false);
		expect(areWeCovered(staff, "Sunday")).toBe(false);
  });
	test("test the day is not case sensitive.", () => {
		var staff = [
			{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
			{ name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
			{ name: "Peter", rota: ["Saturday", "Friday", "Tuesday", "Wednesday"] },
			{ name: "Ben", rota: ["Friday", "Tuesday"] },
		];
    expect(areWeCovered(staff, "monday")).toBe(false);
		expect(areWeCovered(staff, "tuEsday")).toBe(true);
		expect(areWeCovered(staff, "wednesday")).toBe(false);
		expect(areWeCovered(staff, "thursday")).toBe(false);
		expect(areWeCovered(staff, "friday")).toBe(true);
		expect(areWeCovered(staff, "saturDay")).toBe(false);
		expect(areWeCovered(staff, "SundaY")).toBe(false);
  });
});