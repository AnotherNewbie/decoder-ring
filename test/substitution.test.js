const { expect } = require("chai");
const { substitution } = require("../src/substitution");
// Write your tests here!
describe("substitution tests written by me", ()=>{
    
    describe("error handling", ()=>{
        
    });

    describe("encoding",() => {
        //check if alphanumerics other than letters work in alphabet
        it("should allow characters other than letters in alphabet to encode",()=>{
            const message = "i think";
            const alphabet = "xoyqmcgrukswaflnthd1pzibev"
            const expected = "u 1rufs"
            const actual = substitution(message, alphabet);
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding", () => {
        //check if alphanumerics other than letters work in alphabet
        it("should allow characters other than letters in alphabet to decode", () => {
            const message = "u 1rufs";
            const alphabet = "xoyqmcgrukswaflnthd1pzibev"
            const expected = "i think";
            const actual = substitution(message, alphabet, false);
            expect(actual).to.equal(expected);
        });
    });
});
