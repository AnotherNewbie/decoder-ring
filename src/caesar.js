// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // input is code to be shifted
    // shift is ammount code is to be shifted or ammount to shift back
    // when encode === false flip sign of shift
    try {
      if (shift > 25 || shift < -25 || shift === 0 || !shift) {
        throw "Invalid shift amount";
      }
      if (encode === false) {
        shift = shift * -1;
      }
      let code = input.toLowerCase();
      let result = "";
      for (let i = 0; i < code.length; i++) {
        let codeval = code.charCodeAt(i);
        if (codeval >= 97 && codeval <= 122) {
          // check that the ascii is within a-z
          if (codeval + shift < 97) {
            // check to see if the shift will make it less than a
            shift += 26; //  roll over shift change to make it start at z
            result += String.fromCharCode(codeval + shift);
          } else if (codeval + shift > 122) {
            //check to see if shift is greater than z
            shift -= 26; // roll over shift to start at a
            result += String.fromCharCode(codeval + shift);
          } else {
            result += String.fromCharCode(codeval + shift);
          }
        } else {
          result += code.charAt(i); //for ascii characters not within a to z just copy them
        }
      }
      return result;
    } catch (error) {
      return false;
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
