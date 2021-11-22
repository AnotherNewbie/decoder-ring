const { expect } = require("chai");
const { caesar } = require("../src/caesar");
describe("caesar() submission tests written by me", () => {
  // Write your tests here!
  // test for greater than 25 should return false
  describe("error handling", () => {
    it("should return false if shift is greater than 25", () => {
      const message = "Hello World!";
      const shift = 26;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });
    it("should return false if shift is less than -25", () => {
      const message = "Hello World!";
      const shift = -26;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });
  });
  describe("encoding tests", () => {
    it("should maintain characters other than alphanumerics", () => {
      const message = "123 !";
      const shift = 1;
      const actual = caesar(message, shift);
      expect(actual).to.eql(message);
    });
  });
  describe("decoding tests", () => {
    it("should maintain characters other than alphanumerics", () => {
      const message = "123 !";
      const shift = 1;
      const actual = caesar(message, shift, false);
      expect(actual).to.eql(message);
    });
  });
});
