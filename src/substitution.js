// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function encoder(input, alphabet) {    
    let subObj = {
      "a": alphabet.charAt(0),
      "b": alphabet.charAt(1),
      "c": alphabet.charAt(2),
      "d": alphabet.charAt(3),
      "e": alphabet.charAt(4),
      "f": alphabet.charAt(5),
      "g": alphabet.charAt(6),
      "h": alphabet.charAt(7),
      "i": alphabet.charAt(8),
      "j": alphabet.charAt(9),
      "k": alphabet.charAt(10),
      "l": alphabet.charAt(11),
      "m": alphabet.charAt(12),
      "n": alphabet.charAt(13),
      "o": alphabet.charAt(14),
      "p": alphabet.charAt(15),
      "q": alphabet.charAt(16),
      "r": alphabet.charAt(17),
      "s": alphabet.charAt(18),
      "t": alphabet.charAt(19),
      "u": alphabet.charAt(20),
      "v": alphabet.charAt(21),
      "w": alphabet.charAt(22),
      "x": alphabet.charAt(23),
      "y": alphabet.charAt(24),
      "z": alphabet.charAt(25),
    };
    let encodedMsg = "";
    for(let i = 0; i < input.length; i++){
      if(input.charAt(i) === " "){
        encodedMsg += " ";
      }else {
        encodedMsg += subObj[input.charAt(i)];
      }
    }
    return encodedMsg;
  }

  function decoder (input, alphabet) {    
    let subObj = {
      "a": alphabet.charAt(0),
      "b": alphabet.charAt(1),
      "c": alphabet.charAt(2),
      "d": alphabet.charAt(3),
      "e": alphabet.charAt(4),
      "f": alphabet.charAt(5),
      "g": alphabet.charAt(6),
      "h": alphabet.charAt(7),
      "i": alphabet.charAt(8),
      "j": alphabet.charAt(9),
      "k": alphabet.charAt(10),
      "l": alphabet.charAt(11),
      "m": alphabet.charAt(12),
      "n": alphabet.charAt(13),
      "o": alphabet.charAt(14),
      "p": alphabet.charAt(15),
      "q": alphabet.charAt(16),
      "r": alphabet.charAt(17),
      "s": alphabet.charAt(18),
      "t": alphabet.charAt(19),
      "u": alphabet.charAt(20),
      "v": alphabet.charAt(21),
      "w": alphabet.charAt(22),
      "x": alphabet.charAt(23),
      "y": alphabet.charAt(24),
      "z": alphabet.charAt(25)
    };
    let dencodedMsg = "";

    for(let i = 0; i < input.length; i++){
      if(input.charAt(i) === " "){
        dencodedMsg += " ";
      }else {
        dencodedMsg += Object.keys(subObj).find(key => subObj[key] === input.charAt(i));
      }
    }
    return dencodedMsg;
  }

  function substitution(input, alphabet, encode = true) {
    
    // your solution code here
    if (alphabet === undefined){
      return false;
    }
    if(alphabet.length !== 26){
      return false;
    }
    input.toLowerCase();
    alphabet.toLowerCase();
    for(let i = 0; i < 26; i++){
      let max = 0;
      for(let j = 0; j < 26; j++){
        if(alphabet.charAt(j)===String.fromCharCode(97+i)){
          max++;
        }
      }
      if (max > 1){
        return false;
      }
    }
    if (encode){
      return encoder(input, alphabet);
    }else if (!encode){
      return decoder(input, alphabet);
    }

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
