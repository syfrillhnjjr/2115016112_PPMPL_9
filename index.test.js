// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("should return uppercased World", () => {
    expect(capitalize("world")).toBe("World");
  });

  test("should return empty string for empty input", () => {
    expect(capitalize("")).toBe("");
  });

  test("should return same string for already capitalized input", () => {
    expect(capitalize("Capital")).toBe("Capital");
  });
});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });

  it("should return [2, 4, 6]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  it("should return [10, 12, 14]", () => {
    expect(filterOddNumber([9, 10, 11, 12, 13, 14])).toEqual([10, 12, 14]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    expect(epochDateToUTC(0)).toMatch("Thu, 01 Jan 1970");
  });

  it("should return Sat, 13 Mar 2021 12:34:56 GMT", () => {
    expect(epochDateToUTC(1615637696)).toMatch("Sat, 13 Mar 2021");
  });

  it("should return Tue, 27 Nov 2018 18:45:30 GMT", () => {
    expect(epochDateToUTC(1543327530)).toMatch("Tue, 27 Nov 2018");
  });

  it("should return Sun, 07 Aug 2022 23:59:59 GMT", () => {
    expect(epochDateToUTC(1659916799)).toMatch("Sun, 07 Aug 2022 23:59:59 GMT");
  });
});