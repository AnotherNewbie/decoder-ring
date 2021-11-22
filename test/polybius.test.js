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
        it("should contain only spaces and characters while encoding", ()=> {
            const message = "a1b^ "
            const actual = polybius(message);
            expect(actual).to.be.false;
        });

        it("should contain only spaces and characters", ()=> {
            const message = "a1b^ "
            const actual = polybius(message, false);
            expect(actual).to.be.false;
        });
    describe("encoding",() => {
    // spaces must be maintained througout
        it("should maintain spaces in encoding",() => {
            const message = "a b";
            const code = "11 21"
            const actual = polybius(message);
            expect(actual).to.eql(code);
        });        
        // letter i&j are both 42 but when decoding should show i/j for 42
        it("should encode i or j as 42", ()=>{
            const message = "ij";
            const code = "4242";
            const actual = polybius(message);
            expect(actual).to.eql(code);
        });
    });
    describe("decoding", () => {
    // spaces must be maintained througout
        it("should maintain spaces in decoding", ()=>{
            const message = "a b";
            const code = "11 21"
            const actual = polybius(code, false);
            expect(actual).to.eql(message);
        });
    // letter i&j are both 42 but when decoding should show i/j for 42
    });
        it("should decode 42 as i/j", ()=>{
            const code = "42";
            const message = "i/j";
            const actual = polybius(code, false);
            expect(actual).to.eql(message);

        });


});