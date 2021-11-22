const { expect } = require("chai");
const { polybius } = require("../src/polybius");
// Write your tests here!
describe("polybius() tests written by Me", () => {
    describe("error handling", ()=>{
    // numer of characters in the string should be even, excluding spaces when decoding
        it("should return false if the string has odd characters, excluding spaces",() => {
            const message = "111 "
            const actual = polybius(message, false);
            expect(actual).to.be.false;
        });
    });
    // only spaces and characters
    describe("encoding",() => {
    // spaces must be maintained througout
    });
    describe("decoding", () => {
    // spaces must be maintained througout
    // letter i&j are both 42 but when decoding should show i/j for 42
    });
    


});