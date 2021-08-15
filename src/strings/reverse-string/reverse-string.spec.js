const rs = require("./reverse-string");

describe("reverse-string.js", () => {
  describe("reverseString", () => {
    it("should reverse string", () => {
      const testCases = [
        { input: "foo", expectedOutput: "oof" },
        { input: "123456789", expectedOutput: "987654321" },
      ];
      for (const testCase of testCases) {
        expect(rs.reverseString(testCase.input)).toBe(testCase.expectedOutput);
      }
    });
  });
});
